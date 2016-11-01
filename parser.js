/**
 * This is the file where commands get parsed
 *
 * Some parts of this code are taken from the Pokémon Showdown server code, so
 * credits also go to Guangcong Luo and other Pokémon Showdown contributors.
 * https://github.com/Zarel/Pokemon-Showdown
 *
 * @license MIT license
 */

var fs = require('fs');
var http = require('http');
var https = require('https');
var url = require('url');

const ACTION_COOLDOWN = 3 * 1000;
const FLOOD_MESSAGE_NUM = 5;
const FLOOD_PER_MSG_MIN = 500; // this is the minimum time between messages for legitimate spam. It's used to determine what "flooding" is caused by lag
const FLOOD_MESSAGE_TIME = 6 * 1000;
const MIN_CAPS_LENGTH = 18;
const MIN_CAPS_PROPORTION = 0.8;
const RECONNECT_TIME = 60;

// TODO: move to rooms.js
// TODO: store settings by room, not command/blacklists
var settings;
try {
	settings = JSON.parse(fs.readFileSync('settings.json'));
} catch (e) {} // file doesn't exist [yet]
if (!Object.isObject(settings)) settings = {};

var messages;
try {
	messages = JSON.parse(fs.readFileSync('messages.json'));
} catch (e) {} // file doesn't exist [yet]
if (!Object.isObject(messages)) messages = {};

var myths;
try {
	myths = JSON.parse(fs.readFileSync('mythDatabase.json'));
} catch (e) {}
if (!Object.isObject(myths)) myths = {};

exports.parse = {
	actionUrl: url.parse('https://play.pokemonshowdown.com/~~' + Config.serverid + '/action.php'),
	'settings': settings,
	'messages': messages,
	'myths': myths,
	// TODO: handle chatdata in users.js
	chatData: {},
	// TODO: handle blacklists in rooms.js
	blacklistRegexes: {},

	init: function () {
		// Prompt of the Day stuff
		if (!this.settings.potd) {
			this.settings.potd = [];
			this.settings.potdeadline = Date.now() + 20000;
			this.writeSettings();
		}
		var self = this;
		var settings = this.settings;
		var one_day = 1000 * 60 * 60 * 24;
		this.warn = setInterval(function() {
			if (settings && settings.bookmark) {
				var now = new Date().getTime();
				for (var i = 0; i < settings.bookmark.length; i++) {
					var bookmark = settings.bookmark[i];
					switch (bookmark.type) {
					case "AntagTimeout":
						var timeout = new Date(bookmark.timeout).getTime();
						var difference_ms = timeout - now;
						var output = Math.round(difference_ms/one_day);
						//We don't check to see if the ScribeShop exists already because for AntagTimeout to exist, the SS must exist.
						if (output <= 0) {
							for (var j = 0; j < settings.scribeShop.length; j++) {
								if (settings.scribeShop[j].account === bookmark.solicitor) {
									settings.scribeShop[j].antag.enabled = false;
									settings.scribeShop[j].antag.sponsored = false;
									settings.scribeShop[j].antag.deadline = null;
									settings.scribeShop[j].antag.sponsor = null;
									// Refund quills...
									settings.scribeShop[j].bal += 2000;
									break;
								}
							}
							for (var j = 0; j < settings.sponsors.length; j++) {
								if (settings.sponsors[j].user === bookmark.sponsor) {
									settings.sponsors[j].fail += 1;
									settings.sponsors[j].sponsoring = false;
									settings.sponsors[j].who = "Nobody";
									break;
								}
							}
							settings.bookmark.splice(i, 1);
							if (!settings.notifs) settings.notifs = [];
							settings.notifs.push({
								type: "ASponsor",
								name: bookmark.sponsor,
								other: bookmark.solicitor
							});
							settings.notifs.push({
								type: "ASolicitor",
								name: bookmark.solicitor,
								other: bookmark.sponsor
							});
							self.writeSettings();
						}
					case "ProtagTimeout":
						var timeout = new Date(bookmark.timeout).getTime();
						var difference_ms = timeout - now;
						var output = Math.round(difference_ms/one_day);
						//We don't check to see if the ScribeShop exists already because for ProtagTimeout to exist, the SS must exist.
						if (output <= 0) {
							for (var j = 0; j < settings.scribeShop.length; j++) {
								if (settings.scribeShop[j].account === bookmark.solicitor) {
									settings.scribeShop[j].protag.enabled = false;
									settings.scribeShop[j].protag.sponsored = false;
									settings.scribeShop[j].protag.deadline = null;
									settings.scribeShop[j].protag.sponsor = null;
									// Refund quills...
									settings.scribeShop[j].bal += 2000;
									break;
								}
							}
							for (var j = 0; j < settings.sponsors.length; j++) {
								if (settings.sponsors[j].user === bookmark.sponsor) {
									settings.sponsors[j].fail += 1;
									settings.sponsors[j].sponsoring = false;
									settings.sponsors[j].who = "Nobody";
									break;
								}
							}
							settings.bookmark.splice(i, 1);
							if (!settings.notifs) settings.notifs = [];
							settings.notifs.push({
								type: "PSponsor",
								name: bookmark.sponsor,
								other: bookmark.solicitor
							});
							settings.notifs.push({
								type: "PSolicitor",
								name: bookmark.solicitor,
								other: bookmark.sponsor
							});
							self.writeSettings();
						}
					}
				}
			}
		}, 5000);

		this.prompt = setInterval(function() {
			if ((settings.potdeadline - Date.now()) <= 0) {
				console.log("Updating Prompt of the Day...");
				if (!settings.notifs) settings.notifs = [];
				if (settings.potd.length >= 1) {
					settings.potdeadline += 1000 * 60 * 60 * 24;
					settings.notifs.push({type: "Prompt", autogen: false});
					settings.potdCurrent = settings.potd[0];
					settings.potd.shift();
				} else {
					settings.notifs.push({type: "Prompt", autogen: true});
				}
				self.writeSettings();
			}
		}, 1000 * 60 * 60);
	},
	data: function (data) {
		if (data.charAt(0) !== 'a') return false;
		data = JSON.parse(data.substr(1));
		if (Array.isArray(data)) {
			for (var i = 0, len = data.length; i < len; i++) {
				this.splitMessage(data[i]);
			}
		} else {
			this.splitMessage(data);
		}
	},
	splitMessage: function (message) {
		if (!message) return;

		var room = null;
		if (message.indexOf('\n') < 0) return this.message(message, room);

		var spl = message.split('\n');
		if (spl[0].charAt(0) === '>') {
			if (spl[1].substr(1, 10) === 'tournament') return false;
			var roomid = spl.shift().substr(1);
			room = Rooms.get(roomid);
			if (spl[0].substr(1, 4) === 'init') {
				var users = spl[2].substr(7);
				room = Rooms.add(roomid, Config.rooms.indexOf(roomid) === 1);
				room.onUserlist(users);
				send('|/roomauth ' + room.id);
				return ok('joined ' + room.id);
			}
		}

		for (var i = 0, len = spl.length; i < len; i++) {
			this.message(spl[i], room);
		}
	},
	message: function (message, room) {
		var spl = message.split('|');
		switch (spl[1]) {
		case 'challstr':
			info('received challstr, logging in...');
			var id = spl[2];
			var str = spl[3];

			var requestOptions = {
				hostname: this.actionUrl.hostname,
				port: this.actionUrl.port,
				path: this.actionUrl.pathname,
				agent: false
			};

			var data;
			if (!Config.pass) {
				requestOptions.method = 'GET';
				requestOptions.path += '?act=getassertion&userid=' + toId(Config.nick) + '&challengekeyid=' + id + '&challenge=' + str;
			} else {
				requestOptions.method = 'POST';
				data = 'act=login&name=' + Config.nick + '&pass=' + Config.pass + '&challengekeyid=' + id + '&challenge=' + str;
				requestOptions.headers = {
					'Content-Type': 'application/x-www-form-urlencoded',
					'Content-Length': data.length
				};
			}

			var req = https.request(requestOptions, function (res) {
				res.setEncoding('utf8');
				data = '';
				res.on('data', function (chunk) {
					data += chunk;
				});
				res.on('end', function () {
					if (data === ';') {
						error('failed to log in; nick is registered - invalid or no password given');
						setTimeout(function () {
							process.exit(-1);
						}, RECONNECT_TIME * 1000);
					} else if (data.length < 50) {
						error('failed to log in: ' + data);
						setTimeout(function () {
							process.exit(-1);
						}, RECONNECT_TIME * 1000);
					} else if (data.indexOf('heavy load') !== -1) {
						error('the login server is under heavy load; trying again in ' + RECONNECT_TIME + ' seconds');
						setTimeout(function () {
							this.message(message);
						}.bind(this), RECONNECT_TIME * 1000);
					} else if (data.substr(0, 16) === '<!DOCTYPE html>') {
						error('Connection error 522; trying again in ' + RECONNECT_TIME + ' seconds');
						setTimeout(function () {
							this.message(message);
						}.bind(this), RECONNECT_TIME * 1000);
					} else {
						if (Config.pass) {
							try {
								data = JSON.parse(data.substr(1));
								if (data.actionsuccess) {
									data = data.assertion;
								} else {
									error('could not log in; action was not successful: ' + JSON.stringify(data));
									setTimeout(function () {
										process.exit(-1);
									}, RECONNECT_TIME * 1000);
								}
							} catch (e) {}
						}
						send('|/trn ' + Config.nick + ',0,' + data);
					}
				}.bind(this));
			}.bind(this));

			req.on('error', function (err) {
				error('login error: ' + err.stack);
				setTimeout(function () {
					process.exit(-1);
				}, RECONNECT_TIME * 1000);
			});

			if (data) req.write(data);
			req.end();
			break;
		case 'updateuser':
			if (spl[2] !== Config.nick) return;

			if (spl[3] !== '1') {
				error('failed to log in, still guest');
				setTimeout(function () {
					process.exit(-1);
				}, RECONNECT_TIME * 1000);
				return;
			}

			ok('logged in as ' + spl[2]);
			this.init();
			send('|/blockchallenges');
			if (Config.avatarNumber) send('|/avatar ' + Config.avatarNumber);

			// Now join the rooms
			Rooms.join();

			if (this.settings.blacklist) {
				var blacklist = this.settings.blacklist;
				for (var list in blacklist) {
					this.updateBlacklistRegex(list);
				}
			}
			this.cleanChatDataInterval = setInterval(this.cleanChatData.bind(this), 30 * 60 * 1000);
			break;
		case 'c':
			var username = spl[2];
			var user = Users.get(username);
			if (!user) return false; // various "chat" responses contain other data
			if (user === Users.self) return false;
			if (this.isBlacklisted(user.id, room.id)) this.say(room, '/roomban ' + user.id + ', Blacklisted user');

			spl = spl.slice(3).join('|');
			if (!user.hasRank(room.id, '%')) this.processChatData(user.id, room.id, spl);
			this.chatMessage(spl, user, room);
			break;
		case 'c:':
			var username = spl[3];
			var user = Users.get(username);
			if (!user) return false; // various "chat" responses contain other data
			if (user === Users.self) return false;
			if (this.isBlacklisted(user.id, room.id)) this.say(room, '/roomban ' + user.id + ', Blacklisted user');

			spl = spl.slice(4).join('|');
			if (!user.hasRank(room.id, '%')) this.processChatData(user.id, room.id, spl);
			this.chatMessage(spl, user, room);
			break;
		case 'pm':
			var username = spl[2];
			var user = Users.get(username);
			var group = username.charAt(0);
			if (!user) user = Users.add(username);
			if (user === Users.self) return false;

			spl = spl.slice(4).join('|');
			if (spl.startsWith('/invite ') && user.hasRank(group, '%') &&
					!(toId(spl.substr(8)) === 'lobby' && Config.serverid === 'showdown')) {
				return send('|/join ' + spl.substr(8));
			}
			this.chatMessage(spl, user, user);
			break;
		case 'N':
			var username = spl[2];
			var oldid = spl[3];
			var user = room.onRename(username, oldid);
			if (this.isBlacklisted(user.id, room.id)) this.say(room, '/roomban ' + user.id + ', Blacklisted user');
			this.updateSeen(oldid, spl[1], user.id);
			if (Config.logmain) console.log(oldid.cyan + " has changed their nickname to " + username.cyan);
			break;
		case 'J': case 'j':
			var username = spl[2];
			var user = room.onJoin(username, username.charAt(0));
			if (user === Users.self) return false;
			if (this.isBlacklisted(user.id, room.id)) this.say(room, '/roomban ' + user.id + ', Blacklisted user');
			this.updateSeen(user.id, spl[1], room.id);
			// Send pending mail
			var mail = this.messages[user.id];
			if (mail) {
				for (var i = 0, len = mail.length; i < len; i++) {
					this.say(room, "/pm " + user.id + ", " + this.getTimeAgo(mail[i].time) + " ago, " + mail[i].from + " said: " + mail[i].text);
				}
				delete this.messages[user.id];
				this.writeMessages();
			}
			//Word of the Day tracking
			if (this.settings.wotd && room.id === "writing" && user.hasRank(room.id, '+') && Config.roomauth && Config.roomauth[room.id] && Config.roomauth[room.id][user.id]) {
				var now = Date.now();
				if ((now - this.settings.wotd.time) > 86400000) {
					this.say(room, "/msg " + user.id + ", The Word of the Day has not been updated for at least a day. You should probably get on that. :/");
				} else if ((now - this.settings.wotd.time) > 77760000) {
					this.say(room, "/msg " + user.id + ", The Word of the Day will need to be updated soon. Just a friendly heads up. ^.^'");
				}
			}
			//Prompt of the Day tracking
			if (this.settings.potdRanOut && room.id == "writing" && user.hasRank(room.id, '+') && Config.roomauth && Config.roomauth[room.id] && Config.roomauth[room.id][user.id]) {
				this.say(room, "/msg " + user.id + ", I'm currently out of prompts to set! Halp! q-q Please add one with ``;prompt add, [prompt]``, or with ``;prompt autogen``");
			}
			// Scribe Shop greetings.
			if (this.settings.scribeShop) {
				for (i = 0; i < this.settings.scribeShop.length; i++) {
					if (this.settings.scribeShop[i].account === user.id && this.settings.scribeShop[i].greetings) {
						if (this.settings.scribeShop[i].greetings.private) {
							if ((Date.now() - this.settings.scribeShop[i].greetings.private.lastTriggered > 60 * 60 * 1000) || this.settings.scribeShop[i].greetings.private.lastTriggered === null) {
								if (this.settings.scribeShop[i].greetings.private.enabled === false) break;
								this.settings.scribeShop[i].greetings.private.lastTriggered = Date.now();
								this.writeSettings();
								this.say(room, "/msg " + user.id + ", " + this.settings.scribeShop[i].greetings.private.text);
							}
						}
						if (this.settings.scribeShop[i].greetings.public) {
							if ((Date.now() - this.settings.scribeShop[i].greetings.public.lastTriggered > 60 * 60 * 1000) || this.settings.scribeShop[i].greetings.public.lastTriggered === null) {
								if (this.settings.scribeShop[i].greetings.public.enabled === false) break;
								this.settings.scribeShop[i].greetings.public.lastTriggered = Date.now();
								this.writeSettings();
								// Check for default message.
								if (this.settings.scribeShop[i].greetings.public.text.substr(0, 4) === "/msg") {
									this.say(room, this.settings.scribeShop[i].greetings.public.text);
								} else {
									this.say(room, "Personal greeting for ``" + user.name + "``: " + this.settings.scribeShop[i].greetings.public.text);
								}
							}
						}
						break;
					}
				}
			}
			// Check for pending notifications...
			if (this.settings.notifs) {
				for (var i = 0; i < this.settings.notifs.length; i++) {
					if ((this.settings.notifs[i].name === user.id) || (this.settings.notifs[i].type == "Prompt")) {
						switch (this.settings.notifs[i].type) {
							case "PSponsor":
							case "ASponsor":
								this.say(room, "/msg " + this.settings.notifs[i].name + ", Your sponsorship of " + this.settings.notifs[i].other + " has expired. They will be refunded and you will no-longer be officially rewarded for completing the project. :c");
								this.settings.notifs.splice(i, 1);
								this.writeSettings();
							case "PSolicitor":
							case "ASolicitor":
								this.say(room, "/msg " + this.settings.notifs[i].name + ", Your sponsorship from " + this.settings.notifs[i].other + " has expired because they didn't submit the project within 3 weeks. Oh no... :c");
								this.say(room, "/msg " + this.settings.notifs[i].name + ", But, on the bright side, you have been refunded for your spent Quills! You've lost absolutely nothing. c: Except maybe time.");
								this.settings.notifs.splice(i, 1);
								this.writeSettings();
							case "Submission":
								this.say(room, "/msg " + this.settings.notifs[i].name + ", Your sponsor, " + this.settings.notifs[i].submitter + ", has finished their project for you! Here's a link:");
								this.say(room, "/msg " + this.settings.notifs[i].name + ", " + this.settings.notifs[i].link);
								this.settings.notifs.splice(i, 1);
								this.writeSettings();
							case "Prompt":
								if (this.settings.potd.length == 0) {
									if (!this.settings.potdRanOut) {
										this.settings.potdRanOut = true;
										this.writeSettings();
									}
								} else {
									this.say(room, "The Prompt of the Day has been updated! New Prompt:");
									this.say(room, this.settings.potdCurrent.prompt);
									this.say(room, "This was added by: " + this.settings.potdCurrent.user);
								}
								this.settings.notifs.splice(i, 1);
								this.writeSettings();
						}
						break;
					}
				}
			}
			if (Config.logmain) console.log(user.name.cyan + " has " + "joined".green + " the room " + room.id);
			break;
		case 'l': case 'L':
			var username = spl[2];
			var user = room.onLeave(username);
			if (user) {
				if (user === Users.self) return false;
				this.updateSeen(user.id, spl[1], room.id);
			} else {
				this.updateSeen(toId(username), spl[1], room.id);
			}
			if (Config.logmain) console.log(username.cyan + " has " + "left".red + " the room " + room.id);
			break;
		case 'popup':
			if (spl[2].indexOf('room auth') !== -1) {
				var tarRoom = toId(spl[2].split('room auth')[0]);
				if (!tarRoom) return;
				var data = spl.slice(3).join("|").split('||');
				var ranks = {'roomowners': '#', 'bots': '*', 'moderators': '@', 'drivers': '%', 'voices': '+'};
				var auth = {};
				var rank, line;
				for (var i = 0, len = data.length; i < len; i++) {
					line = toId(data[i].split('(')[0]);
					if (!line) continue;
					if (line in ranks) {
						rank = ranks[line];
					} else {
						line = data[i].split(", ");
						for (var l = 0, lineLen = line.length; l < lineLen; l++) {
							auth[toId(line[l])] = rank;
						}
					}
				}
				if (!Config.roomauth) Config.roomauth = {};
				Config.roomauth[tarRoom] = auth;
			}
			break;
		default:
			if (Config.readElse) {
				var oS = spl.toString().split(',');
				if (oS[1] === "formats" || oS[1] === "queryresponse" || oS[0] === "You are already blocking challenges!" || oS[1] === "raw" || oS[1] === "updatechallenges" || oS[0] === "Avatar changed to:") return false;
                		var output = oS.toString();
        			if (oS[1] === "html") output = "(SERVER): ".red + oS[2];
				console.log(output);
			}
		}
	},
	chatMessage: function (message, user, room) {
		var cmdrMessage = '["' + room.id + '|' + user.name + '|' + message + '"]';
		message = message.trim();
		if (room === user) {
			// auto accept invitations to rooms
			if (message.substr(0, 8) === '/invite ' && user.hasRank(room.id, '%') && !(Config.serverid === 'showdown' && toId(message.substr(8)) === 'lobby')) {
				this.say('', '/join ' + message.substr(8));
			}
			if (Config.logpms) console.log("Private Message from ".red + user.name.cyan + ": ".cyan + message);
		} else if (Config.logmain) {
			var sender;
			if (!user.hasRank(room.id, '+')) {
				sender = user.name;
			} else if (user.hasRank(room.id, '~')) {
				sender = user.name.yellow;
			} else if (user.hasRank(room.id, '#')) {
				sender = user.name.cyan;
			} else if (user.hasRank(room.id, '@')) {
				sender = user.name.blue;
			} else if (user.hasRank(room.id, '%')) {
				sender = user.name.red;
			} else if (user.hasRank(room.id, '+')) {
				sender = user.name.green;
			}
			console.log(room.id.cyan + ': '.cyan + sender + ': '.cyan + message);
		}
		if (message.substr(0, Config.commandcharacter.length) !== Config.commandcharacter) return false;

		message = message.substr(Config.commandcharacter.length);
		var index = message.indexOf(' ');
		var arg = '';
		var cmd = message;
		if (index > -1) {
			cmd = cmd.substr(0, index);
			arg = message.substr(index + 1).trim();
		}

		if (!!Commands[cmd]) {
			var failsafe = 0;
			while (typeof Commands[cmd] !== "function" && failsafe++ < 10) {
				cmd = Commands[cmd];
			}
			if (typeof Commands[cmd] === "function") {
				cmdr(cmdrMessage);
				Commands[cmd].call(this, arg, user, room);
			} else {
				error("invalid command type for " + cmd + ": " + (typeof Commands[cmd]));
			}
		}
	},
	say: function (target, text) {
		var targetId = target.id;
		if (Rooms.get(targetId)) {
			send((targetId !== 'lobby' ? targetId : '') + '|' + text);
		} else {
			send('|/pm ' + targetId + ', ' + text);
		}
	},
	isBlacklisted: function (userid, roomid) {
		var blacklistRegex = this.blacklistRegexes[roomid];
		return blacklistRegex && blacklistRegex.test(userid);
	},
	blacklistUser: function (userid, roomid) {
		var blacklist = this.settings.blacklist || (this.settings.blacklist = {});
		if (blacklist[roomid]) {
			if (blacklist[roomid][userid]) return false;
		} else {
			blacklist[roomid] = {};
		}

		blacklist[roomid][userid] = 1;
		this.updateBlacklistRegex(roomid);
		return true;
	},
	unblacklistUser: function (userid, roomid) {
		var blacklist = this.settings.blacklist;
		if (!blacklist || !blacklist[roomid] || !blacklist[roomid][userid]) return false;

		delete blacklist[roomid][userid];
		if (Object.isEmpty(blacklist[roomid])) {
			delete blacklist[roomid];
			delete this.blacklistRegexes[roomid];
		} else {
			this.updateBlacklistRegex(roomid);
		}
		return true;
	},
	updateBlacklistRegex: function (roomid) {
		var blacklist = this.settings.blacklist[roomid];
		var buffer = [];
		for (var entry in blacklist) {
			if (entry.startsWith('/') && entry.endsWith('/i')) {
				buffer.push(entry.slice(1, -2));
			} else {
				buffer.push('^' + entry + '$');
			}
		}
		this.blacklistRegexes[roomid] = new RegExp(buffer.join('|'), 'i');
	},
	uploadToHastebin: function (toUpload, callback) {
		if (typeof callback !== 'function') return false;
		var reqOpts = {
			hostname: 'hastebin.com',
			method: 'POST',
			path: '/documents'
		};
		
		var req = http.request(reqOpts, function (res) {
			res.on('data', function (chunk) {
                // CloudFlare can go to hell for sending the body in a header request like this
				try {
                    var filename = JSON.parse(chunk).key;
                } catch (e) {
                    if (typeof chunk === 'string' && /^[^\<]*\<!DOCTYPE html\>/.test(chunk)) {
                        callback('Cloudflare-related error uploading to Hastebin: ' + e.message);
                    } else {
                        callback('Unknown error uploading to Hastebin: ' + e.message);
                    }
                }
                callback('http://hastebin.com/raw/' + filename);
			});
        });
        req.on('error', function (e) {
			callback('Error uploading to Hastebin: ' + e.message);
			throw e;
		});
		req.write(toUpload);
		req.end();
	},
	processChatData: function (userid, roomid, msg) {
		// NOTE: this is still in early stages
		msg = msg.trim().replace(/[ \u0000\u200B-\u200F]+/g, ' '); // removes extra spaces and null characters so messages that should trigger stretching do so
		this.updateSeen(userid, 'c', roomid);
		var now = Date.now();
		if (!this.chatData[userid]) this.chatData[userid] = {
			zeroTol: 0,
			lastSeen: '',
			seenAt: now
		};
		var userData = this.chatData[userid];
		if (!userData[roomid]) userData[roomid] = {
			times: [],
			points: 0,
			lastAction: 0
		};
		var roomData = userData[roomid];

		roomData.times.push(now);

		// this deals with punishing rulebreakers, but note that the bot can't think, so it might make mistakes
		if (Config.allowmute && Users.self.hasRank(roomid, '%') && Config.whitelist.indexOf(userid) < 0) {
			var useDefault = !(this.settings.modding && this.settings.modding[roomid]);
			var pointVal = 0;
			var muteMessage = '';
			var modSettings = useDefault ? null : this.settings.modding[roomid];

			// moderation for banned words
			if ((useDefault || !this.settings.banword[roomid]) && pointVal < 2) {
				var bannedPhraseSettings = this.settings.bannedphrases;
				var bannedPhrases = !!bannedPhraseSettings ? (Object.keys(bannedPhraseSettings[roomid] || {})).concat(Object.keys(bannedPhraseSettings.global || {})) : [];
				for (var i = 0; i < bannedPhrases.length; i++) {
					if (msg.toLowerCase().indexOf(bannedPhrases[i]) > -1) {
						pointVal = 2;
						muteMessage = ', Automated response: your message contained a banned phrase';
						break;
					}
				}
			}
			// moderation for flooding (more than x lines in y seconds)
			var times = roomData.times;
			var timesLen = times.length;
			var isFlooding = (timesLen >= FLOOD_MESSAGE_NUM && (now - times[timesLen - FLOOD_MESSAGE_NUM]) < FLOOD_MESSAGE_TIME &&
				(now - times[timesLen - FLOOD_MESSAGE_NUM]) > (FLOOD_PER_MSG_MIN * FLOOD_MESSAGE_NUM));
			if ((useDefault || !('flooding' in modSettings)) && isFlooding) {
				if (pointVal < 2) {
					pointVal = 2;
					muteMessage = ', Automated response: flooding';
				}
			}
			// moderation for caps (over x% of the letters in a line of y characters are capital)
			var capsMatch = msg.replace(/[^A-Za-z]/g, '').match(/[A-Z]/g);
			if ((useDefault || !('caps' in modSettings)) && capsMatch && toId(msg).length > MIN_CAPS_LENGTH && (capsMatch.length >= ~~(toId(msg).length * MIN_CAPS_PROPORTION))) {
				if (pointVal < 1) {
					pointVal = 1;
					muteMessage = ', Automated response: caps';
				}
			}
			// moderation for stretching (over x consecutive characters in the message are the same)
			var stretchMatch = /(.)\1{7,}/gi.test(msg) || /(..+)\1{4,}/gi.test(msg); // matches the same character (or group of characters) 8 (or 5) or more times in a row
			if ((useDefault || !('stretching' in modSettings)) && stretchMatch) {
				if (pointVal < 1) {
					pointVal = 1;
					muteMessage = ', Automated response: stretching';
				}
			}

			if (pointVal > 0 && now - roomData.lastAction >= ACTION_COOLDOWN) {
				var cmd = 'mute';
				// defaults to the next punishment in Config.punishVals instead of repeating the same action (so a second warn-worthy
				// offence would result in a mute instead of a warn, and the third an hourmute, etc)
				if (roomData.points >= pointVal && pointVal < 4) {
					roomData.points++;
					cmd = Config.punishvals[roomData.points] || cmd;
				} else { // if the action hasn't been done before (is worth more points) it will be the one picked
					cmd = Config.punishvals[pointVal] || cmd;
					roomData.points = pointVal; // next action will be one level higher than this one (in most cases)
				}
				if (Config.privaterooms.indexOf(roomid) > -1 && cmd === 'warn') cmd = 'mute'; // can't warn in private rooms
				// if the bot has % and not @, it will default to hourmuting as its highest level of punishment instead of roombanning
				if (roomData.points >= 4 && !Users.self.hasRank(roomid, '@')) cmd = 'hourmute';
				if (userData.zeroTol > 4) { // if zero tolerance users break a rule they get an instant roomban or hourmute
					muteMessage = ', Automated response: zero tolerance user';
					cmd = Users.self.hasRank(roomid, '@') ? 'roomban' : 'hourmute';
				}
				if (roomData.points > 1) userData.zeroTol++; // getting muted or higher increases your zero tolerance level (warns do not)
				roomData.lastAction = now;
				this.say(Rooms.get(roomid), '/' + cmd + ' ' + userid + muteMessage);
			}
		}
	},
	cleanChatData: function () {
		var chatData = this.chatData;
		for (var user in chatData) {
			for (var room in chatData[user]) {
				var roomData = chatData[user][room];
				if (!Object.isObject(roomData)) continue;

				if (!roomData.times || !roomData.times.length) {
					delete chatData[user][room];
					continue;
				}
				var newTimes = [];
				var now = Date.now();
				var times = roomData.times;
				for (var i = 0, len = times.length; i < len; i++) {
					if (now - times[i] < 5 * 1000) newTimes.push(times[i]);
				}
				newTimes.sort(function (a, b) {
					return a - b;
				});
				roomData.times = newTimes;
				if (roomData.points > 0 && roomData.points < 4) roomData.points--;
			}
		}
	},

	updateSeen: function (user, type, detail) {
		if (type !== 'N' && Config.rooms.indexOf(detail) < 0 || Config.privaterooms.indexOf(detail) > -1) return;
		var now = Date.now();
		if (!this.chatData[user]) this.chatData[user] = {
			zeroTol: 0,
			lastSeen: '',
			seenAt: now
		};
		if (!detail) return;
		var userData = this.chatData[user];
		var msg = '';
		switch (type) {
		case 'j':
		case 'J':
			msg += 'joining ';
			break;
		case 'l':
		case 'L':
			msg += 'leaving ';
			break;
		case 'c':
		case 'c:':
			msg += 'chatting in ';
			break;
		case 'N':
			msg += 'changing nick to ';
			if (detail.charAt(0) !== ' ') detail = detail.substr(1);
			break;
		}
		msg += detail.trim() + '.';
		userData.lastSeen = msg;
		userData.seenAt = now;
	},
	getTimeAgo: function (time) {
		time = ~~((Date.now() - time) / 1000);

		var seconds = time % 60;
		var times = [];
		if (seconds) times.push(seconds + (seconds === 1 ? ' second' : ' seconds'));
		if (time >= 60) {
			time = ~~((time - seconds) / 60);
			var minutes = time % 60;
			if (minutes) times.unshift(minutes + (minutes === 1 ? ' minute' : ' minutes'));
			if (time >= 60) {
				time = ~~((time - minutes) / 60);
				var hours = time % 24;
				if (hours) times.unshift(hours + (hours === 1 ? ' hour' : ' hours'));
				if (time >= 24) {
					var days = ~~((time - hours) / 24);
					if (days) times.unshift(days + (days === 1 ? ' day' : ' days'));
				}
			}
		}
		if (!times.length) return '0 seconds';
		return times.join(', ');
	},
	writeSettings: (function () {
		var writing = false;
		var writePending = false;
		return function () {
			if (writing) {
				writePending = true;
				return;
			}
			writing = true;

			var data = JSON.stringify(this.settings);
			var path = 'settings.json';
			var tempPath = path + '.0';

			fs.writeFile(tempPath, data, function () {
				fs.rename(tempPath, path, function () {
					writing = false;
					if (writePending) {
						writePending = false;
						process.nextTick(function () {
							this.writeSettings();
						}.bind(this));
					}
				}.bind(this));
			}.bind(this));
		};
	})(),
	writeMessages: (function () {
		var writing = false;
		var writePending = false;
		return function () {
			if (writing) {
				writePending = true;
				return;
			}
			writing = true;

			var data = JSON.stringify(this.messages);
			var path = 'messages.json';
			var tempPath = path + '.0';

			fs.writeFile(tempPath, data, function () {
				fs.rename(tempPath, path, function () {
					writing = false;
					if (writePending) {
						writePending = false;
						process.nextTick(function () {
							this.writeMessages();
						}.bind(this));
					}
				}.bind(this));
			}.bind(this));
		};
	})(),
	writeMyths: (function () {
		var writing = false;
		var writePending = false;
		return function () {
			if (writing) {
				writePending = true;
				return;
			}
			writing = true;

			var data = JSON.stringify(this.myths);
			var path = 'mythDatabase.json';
			var tempPath = path + '.0';

			fs.writeFile(tempPath, data, function () {
				fs.rename(tempPath, path, function () {
					writing = false;
					if (writePending) {
						writePending = false;
						process.nextTick(function () {
							this.writeMyths();
						}.bind(this));
					}
				}.bind(this));
			}.bind(this));
		};
	})(),
	shuffle: function (array) {
		for (var i = array.length - 1; i > 0; i--) {
			var j = Math.floor(Math.random() * (i + 1));
			var temp = array[i];
			array[i] = array[j];
			array[j] = temp;
		}
		return array;
	},
	uncacheTree: function (root) {
		var uncache = [require.resolve(root)];
		do {
			var newuncache = [];
			for (var i = 0; i < uncache.length; ++i) {
				if (require.cache[uncache[i]]) {
					newuncache.push.apply(newuncache,
						require.cache[uncache[i]].children.map(function (module) {
							return module.filename;
						})
					);
					delete require.cache[uncache[i]];
				}
			}
			uncache = newuncache;
		} while (uncache.length > 0);
	}
};
