/**
 * This is the file where the bot commands are located
 *
 * @license MIT license
 */
const MESSAGES_TIME_OUT = 7 * 24 * 60 * 60 * 1000;

var http = require('http');

// .set constants
const CONFIGURABLE_COMMANDS = {
	autoban: true,
	banword: true,
	say: true,
	joke: true,
	usagestats: true,
	randomcommands: true,
};

const CONFIGURABLE_MODERATION_OPTIONS = {
	flooding: true,
	caps: true,
	stretching: true,
	bannedwords: true
};

const CONFIGURABLE_COMMAND_LEVELS = {
	off: false,
	disable: false,
	'false': false,
	on: true,
	enable: true,
	'true': true
};

for (var i in Config.groups) {
	if (i !== ' ') CONFIGURABLE_COMMAND_LEVELS[i] = i;
}

// Lists for random generator commands
var adjectives = ["crystal","floating","eternal-dusk","sunset","snowy","rainy","sunny","chaotic","peaceful","colorful","gooey","fiery","jagged","glass","vibrant","rainbow","foggy","calm","demonic","polygonal","glistening","sexy","overgrown","frozen","dark","mechanical","mystic","steampunk","subterranean","polluted","bleak","dank","smooth","vast","pixelated","enigmatic","illusionary","sketchy","spooky","flying","legendary","cubic","moist","oriental","fluffy","odd","fancy","strange","authentic", "bustling","barren","cluttered","creepy","dangerous","distant","massive","exotic","tainted","filthy","flawless","forsaken","frigid","frosty","grand","grandiose","grotesque","harmful","harsh","hospitable","hot","jaded","meek","weird","awkward","silly","cursed","blessed","drought-stricken","futuristic","ancient","medieval", "gothic", "radioactive"
];
var locations = ["river","island","desert","forest","jungle","plains","mountains","mesa","cave","canyon","marsh","lake","plateau","tundra","volcano","valley","waterfall","atoll","asteroid","grove","treetops","cavern","beach","ocean","heavens","abyss","city","crag","planetoid","harbor","evergreen","cabin","hill","field","ship","glacier","estuary","wasteland","clouds","chamber","ruin","tomb","park","closet","terrace","hotairballoon","shrine","room","swamp","road","path","gateway","school","building","vault","pool","pit","temple","lagoon","prison","harem","mine","catacombs","rainforest","laboratory","library","stadium","museum","mansion","carnival","amusementpark","farm","factory","castle","spaceship","space station","cafe","theater","island","hospital","ruins","bazaar"
];
var characterAdjectives = ["sturdy","helpless","young","rugged","odd-looking","amusing","dynamic","exuberant","quirky","awkward","elderly","adolescent","'ancient'","odd","funny-looking","tall","short","round","blind" 
];
var characterTypes = ["Marksman","Adventurer","Pokemon Trainer","Pokemon","Dragonkin","Chef","Businessman","Kitsune","Youkai","...thing","Archer","Taxi Driver","Dentist","Demon","Paladin","Writer","Diety","Spy","Goverment Agent","Farmer","Teacher","Warrior","Athlete","Artist","Assassin","Beast","Journalist","Designer","Doctor","Vampire","Time Traveller","Alien","Butler","PoliceOfficer","Toymaker","Student","Photographer","Mage","Computer Programmer","Person"
];
var perks = ["kind of heart","powerful","handsome","ambitious","amiable","brave","rational","witty","honest","agile","athletic","quick on their feet","assertive","fearless","intelligent","persistent","philosophical","pioneering","quiet","wealthy","not afraid to voice their opinion","quick-witted","lucky","friendly","neat","sympathetic","sincere","mysterious","loyal","trustworthy","imaginative","gentle"
];
var debuffs = ["sly","unclean","smelly","obnoxiously loud","fond of 'tricks'","fond of 'games'","fond of 'jokes'","prone to 'accidentally' taking others' things","cocky","prone to falling over","prone to bad luck at times","clingy","foolish","fussy","greedy","gullible","impatient","inconsiderate","lazy","moody","obsessive","narrow-minded","patronizing","resentful","unreliable","vague","weak-willed","egotistical","sensitive","Grammar Nazi-ish","'bitchy'","emotionally scarred","overly-serious","volatile","morally scrupulous","lacking of empathy","prone to overreacting","overbearing","prone to panic attacks","self-pessimistic"
];
var genres = ["Action","Adventure","Comedy","Crime","Drama","Fantasy","Historical","Horror","Mystery","Philosophical","Romance","Saga","Satire","Science Fiction","Thriller"
];
var roles = ["Protagonist","Antagonist","Major character","Minor character"];
var pronouns = {'male': 'he', 'female': 'she', 'hermaphrodite': 'shi', 'neuter': 'they'};
var possessivePronouns = {'male': 'His', 'female': 'Her', 'hermaphrodite': 'Hir', 'neuter': 'Their'};
var types = ["Normal","Fire","Water","Electric","Grass","Ice","Fighting","Poison","Flying","Ground","Psychic","Bug","Rock","Ghost","Dragon","Dark","Steel","Fairy","Bird"];
/* Shop Merchandise 
 * 1st Element: Name
 * 2nd Element: Description
 * 3rd Element: Price
 * 4th Element: Price with comma included (used for advertising)
 * 5th Element: Usage Instructions
 * 6th Element: Rooms
 */
var shopMerch = [
	["Cookie",
	"Does nothing, but you'll want it anyway!",
	"5 (Five)",
	5,
	"cookie, amount of cookies",
	"All/Any"],
	["Inspirational Quote",
	"You'll receive a nugget of wisdom that's sure to fire you up!",
	"10 (Ten)",
	10,
	"inspirational quote",
	"All/Any"],
	["Inspire The Masses",
	"After redeeming this, talk to an RO about having a picture of your choosing displayed to the whole room!",
	"300 (Three Hundred)",
	300,
	"inspire the masses, picture URL (EG: http://imgur.rAnd0mL3tterz.png)",
	"Writing, Myths & Magic"],
	["Personal Greeting (PM)",
	"From now on, The Scribe will PM you whenever you join the room with a greeting of your choosing!",
	"500 (Five Hundred)",
	500,
	"personal greeting. Then, follow the instructions provided by " + Config.nick + " when you complete the purchase.",
	"Private Messages Only"],
	["Take The Stage",
	"For up to 2 minutes, we will set the room to modchat(+) and let you recite your poem or rap in the chat live! There is no greater way to receive feedback and recognition.",
	"500 (Five Hundred)",
	500,
	"take the stage. Then, use the 'spotlight' command as instructed to use up your purchase! No refunds on this if you use it and nobody's paying attention, so use it when you think would be the best time. :3",
	"Writing, The Arcadium"],
	["Poetic License",
	"Simply owning one of these grants you the ability to set the Word of the Day up to 3 times through the " + Config.commandcharacter + "wotd command! Usage: " + Config.commandcharacter + "wotd Word, Pronunciation, Part of Speech (Noun, Verb, Adjective, etc...), and Definition. -- DON'T BUY THIS IF YOU ARE ALREADY VOICE OR ABOVE",
	"550 (Five Hundred and Fifty)",
	550,
	"poetic license. Then, follow the instructions provided in the item's description.",
	"Writing"],
	["Personal Greeting (Public)",
	"Use this to gain the ability to set a personal greeting for The Scribe to say whenever you join the room after being gone for a while! What better way to make an entrance?",
	"1,500 (One Thousand, Five Hundred)",
	1500,
	"public greeting. Follow the instructions provided on purchase.",
	"Writing, Myths & Magic, and The Arcadium"],
	["Let's Save The World!",
	"Get yourself immortalized as a PROTAGONIST in a short story written by some of the Writing Room's best story writers. ETA: 3 weeks from purchase.",
	"2,000 (Two Thousand)",
	2000,
	"protagonist. Follow the rest instuctions provided on purchase.",
	"Writing"],
	["Destroy It All!",
	"Get yourself immortalized as an ANTAGONIST in a short story written by some of the Writing Room's best story writers. ETA: 3 weeks from purchase.",
	"2,000 (Two Thousand)",
	2000,
	"antagonist. Follow the rest instuctions provided on purchase.",
	"Writing"],
	["Your Soul",
	"???",
	"1,000,000 (One Million)",
	0,
	"my soul",
	"Yourself"]
];

function randIdea() {
	var genre1 = genres[Math.floor(genres.length * Math.random())];
	if (Math.floor(Math.random() * 2)) {
		var genre2 = genres[Math.floor(genres.length * Math.random())];
		while (genre1 === genre2) {
			genre2 = genres[Math.floor(genres.length * Math.random())];
		}
	}
	var adjective = adjectives[Math.floor(adjectives.length * Math.random())];
	var location = locations[Math.floor(locations.length * Math.random())];
	var characterAdjective = characterAdjectives[Math.floor(characterAdjectives.length * Math.random())];
	var type = characterTypes[Math.floor(characterTypes.length * Math.random())];
	var role = roles[Math.floor(4 * Math.random())];
	var gender = ["male", "female"][Math.floor(2 * Math.random())];
	if (Math.floor(Math.random() * 4200 < 15)) gender = "hermaphrodite";
	if (Math.floor(Math.random() * 4200 < 10)) gender = "transgender";
	if (Math.floor(Math.random() * 4200 < 5)) gender = "neuter";
	var pronoun = pronouns[gender];
	var possessivePronoun = possessivePronouns[gender];
	var perkList = perks.slice(0);
	var perk1 = perkList[Math.floor(perkList.length * Math.random())];
	perkList.splice(perkList.indexOf(perk1), 1);
	var perk2 = perkList[Math.floor(perkList.length * Math.random())];
	perkList.splice(perkList.indexOf(perk2), 1);
	var perk3 = perkList[Math.floor(perkList.length * Math.random())];
	var debuff = debuffs[Math.floor(debuffs.length * Math.random())];
	return "Setting: __" + adjective + " " + location + "__ | Genre: __" + genre1 + (genre2 ? "/" + genre2 : "") + "__ | " + role + ": __a " + gender + ", " + characterAdjective + " " + type + ". " + possessivePronoun + " positive factors include: " + perk1 + ", " + perk2 + ", and " + perk3 + ", though " + pronoun + (gender === "neuter" ? " are" : " is") + " unfortunately rather " + debuff + ".__";
};
exports.commands = {
	/**
	 * Help commands
	 *
	 * These commands are here to provide information about the bot.
	 */

	//Returns basic information about the bot
	credits: 'about',
	about: function (arg, user, room) {
		var text = (room === user || user.hasRank(room.id, '#')) ? '' : '/pm ' + user.id + ', ';
		text += "**Writing Bot** by AxeBane & sirDonovan __(forked from Pokémon Showdown Bot by: Quinella, TalkTakesTime, and Morfent)__";
		this.say(room, text);
	},
	git: function (arg, user, room) {
		var text = (room === user || user.isExcepted()) ? '' : '/pm ' + user.id + ', ';
		text += '**The Scribe** source code: ' + Config.fork;
		this.say(room, text);
	},
	//Returns a link to a guide on the bot's commands.
	help: 'guide',
	guide: function (arg, user, room) {
		var text = (room === user || user.hasRank(room.id, '#'))  ? '' : '/pm ' + user.id + ', ';
		if (Config.botguide) {
			text += 'A guide on how to use this bot can be found here: ' + Config.botguide;
		} else {
			text += 'There is no guide for this bot. PM the owner with any questions.';
		}
		this.say(room, text);
	},

	/**
	 * Dev commands
	 *
	 * These commands are here for highly ranked users (or the creator) to use
	 * to perform arbitrary actions that can't be done through any other commands
	 * or to help with upkeep of the bot.
	 */
	//Updates commands.js to include changes to commands.
	reload: function (arg, user, room) {
		if (!user.isExcepted()) return false;
		try {
			this.uncacheTree('./commands.js');
			global.Commands = require('./commands.js').commands;
			this.say(room, 'Commands reloaded.');
		} catch (e) {
			error('failed to reload: ' + e.stack);
		}
	},
	ping: function (arg, user, room) {
		if (Math.round(Math.random() * 100) === 10) return this.say(room, "/me swings at the ball but misses.");
		this.say(room, "Pong.");
	},
	'do': 'custom',
	custom: function (arg, user, room) {
		if (!user.isExcepted()) return false;
		// Custom commands can be executed in an arbitrary room using the syntax
		// ".custom [room] command", e.g., to do !data pikachu in the room lobby,
		// the command would be ".custom [lobby] !data pikachu". However, using
		// "[" and "]" in the custom command to be executed can mess this up, so
		// be careful with them.
		if (arg.indexOf('[') !== 0 || arg.indexOf(']') < 0) {
			return this.say(room, arg);
		}
		var tarRoomid = arg.slice(1, arg.indexOf(']'));
		var tarRoom = Rooms.get(tarRoomid);
		if (!tarRoom) return this.say(room, Users.self.name + ' is not in room ' + tarRoomid + '!');
		arg = arg.substr(arg.indexOf(']') + 1).trim();
		this.say(tarRoom, arg);
	},
	//Has the bot act out any JavaScript functions given. Only let people you trust use this, as it can cause some serious damage if you don't know what you're doing (and they do)
	'eval': 'js',
	js: function (arg, user, room) {
		if (!user.isExcepted()) return false;
		if (toId(arg) === 'configpass') {
			this.say(room, "Seriously? Please don't try to access the bot's password; this incident has been reported.");
			return console.log(user + " has tried to access the bot's password with JS privileges!");
		}
		try {
			var result = eval(arg.trim());
			this.say(room, JSON.stringify(result));
		} catch (e) {
			this.say(room, e.name + ": " + e.message);
		}
	},
	//Returns how long the bot has been running, similar to Shodown's /uptime command.
	uptime: function (arg, user, room) {
		var text = ((room === user || user.isExcepted()) ? '' : '/pm ' + user.id + ', ') + '**Uptime:** ';
		var divisors = [52, 7, 24, 60, 60];
		var units = ['week', 'day', 'hour', 'minute', 'second'];
		var buffer = [];
		var uptime = ~~(process.uptime());
		do {
			var divisor = divisors.pop();
			var unit = uptime % divisor;
			buffer.push(unit > 1 ? unit + ' ' + units.pop() + 's' : unit + ' ' + units.pop());
			uptime = ~~(uptime / divisor);
		} while (uptime);

		switch (buffer.length) {
		case 5:
			text += buffer[4] + ', ';
			/* falls through */
		case 4:
			text += buffer[3] + ', ';
			/* falls through */
		case 3:
			text += buffer[2] + ', ' + buffer[1] + ', and ' + buffer[0];
			break;
		case 2:
			text += buffer[1] + ' and ' + buffer[0];
			break;
		case 1:
			text += buffer[0];
			break;
		}

		this.say(room, text);
	},


	/**
	 * Room Owner commands
	 *
	 * These commands allow room owners to personalise settings for moderation and command use.
	 */

	//Used to set various values on and off, as well as alter what sorts of things the bot reacts to (typically best to leave unchanged).
	settings: 'set',
	set: function (arg, user, room) {
		if (room === user || !user.hasRank(room.id, '#')) return false;

		var opts = arg.split(',');
		var cmd = toId(opts[0]);
		var roomid = room.id;
		if (cmd === 'm' || cmd === 'mod' || cmd === 'modding') {
			var modOpt;
			if (!opts[1] || !CONFIGURABLE_MODERATION_OPTIONS[(modOpt = toId(opts[1]))]) {
				return this.say(room, 'Incorrect command: correct syntax is ' + Config.commandcharacter + 'set mod, [' +
					Object.keys(CONFIGURABLE_MODERATION_OPTIONS).join('/') + '](, [on/off])');
			}
			if (!opts[2]) return this.say(room, 'Moderation for ' + modOpt + ' in this room is currently ' +
				(this.settings.modding && this.settings.modding[roomid] && modOpt in this.settings.modding[roomid] ? 'OFF' : 'ON') + '.');

			if (!this.settings.modding) this.settings.modding = {};
			if (!this.settings.modding[roomid]) this.settings.modding[roomid] = {};

			var setting = toId(opts[2]);
			if (setting === 'on') {
				delete this.settings.modding[roomid][modOpt];
				if (Object.isEmpty(this.settings.modding[roomid])) delete this.settings.modding[roomid];
				if (Object.isEmpty(this.settings.modding)) delete this.settings.modding;
			} else if (setting === 'off') {
				this.settings.modding[roomid][modOpt] = 0;
			} else {
				return this.say(room, 'Incorrect command: correct syntax is ' + Config.commandcharacter + 'set mod, [' +
					Object.keys(CONFIGURABLE_MODERATION_OPTIONS).join('/') + '](, [on/off])');
			}

			this.writeSettings();
			return this.say(room, 'Moderation for ' + modOpt + ' in this room is now ' + setting.toUpperCase() + '.');
		}

		if (!(cmd in Commands)) return this.say(room, Config.commandcharacter + '' + opts[0] + ' is not a valid command.');

		var failsafe = 0;
		while (true) {
			if (typeof Commands[cmd] === 'string') {
				cmd = Commands[cmd];
			} else if (typeof Commands[cmd] === 'function') {
				if (cmd in CONFIGURABLE_COMMANDS) break;
				return this.say(room, 'The settings for ' + Config.commandcharacter + '' + opts[0] + ' cannot be changed.');
			} else {
				return this.say(room, 'Something went wrong. PM Morfent or TalkTakesTime here or on Smogon with the command you tried.');
			}

			if (++failsafe > 5) return this.say(room, 'The command "' + Config.commandcharacter + '' + opts[0] + '" could not be found.');
		}

		if (!opts[1]) {
			var msg = '' + Config.commandcharacter + '' + cmd + ' is ';
			if (!this.settings[cmd] || (!(roomid in this.settings[cmd]))) {
				msg += 'available for users of rank ' + ((cmd === 'autoban' || cmd === 'banword') ? '#' : Config.defaultrank) + ' and above.';
			} else if (this.settings[cmd][roomid] in CONFIGURABLE_COMMAND_LEVELS) {
				msg += 'available for users of rank ' + this.settings[cmd][roomid] + ' and above.';
			} else {
				msg += this.settings[cmd][roomid] ? 'available for all users in this room.' : 'not available for use in this room.';
			}

			return this.say(room, msg);
		}

		var setting = opts[1].trim();
		if (!(setting in CONFIGURABLE_COMMAND_LEVELS)) return this.say(room, 'Unknown option: "' + setting + '". Valid settings are: off/disable/false, +, %, @, #, &, ~, on/enable/true.');
		if (!this.settings[cmd]) this.settings[cmd] = {};
		this.settings[cmd][roomid] = CONFIGURABLE_COMMAND_LEVELS[setting];

		this.writeSettings();
		this.say(room, 'The command ' + Config.commandcharacter + '' + cmd + ' is now ' +
			(CONFIGURABLE_COMMAND_LEVELS[setting] === setting ? ' available for users of rank ' + setting + ' and above.' :
			(this.settings[cmd][roomid] ? 'available for all users in this room.' : 'unavailable for use in this room.')));
	},
	//Usage of this command adds the specified user to the list of people the bot checks through and automatically bans upon their joining.
	blacklist: 'autoban',
	ban: 'autoban',
	ab: 'autoban',
	autoban: function (arg, user, room) {
		if (room === user || !user.canUse('autoban', room.id)) return false;
		if (!Users.self.hasRank(room.id, '@')) return this.say(room, Users.self.name + ' requires rank of @ or higher to (un)blacklist.');
		if (!toId(arg)) return this.say(room, 'You must specify at least one user to blacklist.');

		arg = arg.split(',');
		var added = [];
		var illegalNick = [];
		var alreadyAdded = [];
		var roomid = room.id;
		for (var i = 0; i < arg.length; i++) {
			var tarUser = toId(arg[i]);
			if (!tarUser || tarUser.length > 18) {
				illegalNick.push(tarUser);
			} else if (!this.blacklistUser(tarUser, roomid)) {
				alreadyAdded.push(tarUser);
			} else {
				added.push(tarUser);
				this.say(room, '/roomban ' + tarUser + ', Blacklisted user');
			}
		}

		var text = '';
		if (added.length) {
			text += 'User' + (added.length > 1 ? 's "' + added.join('", "') + '" were' : ' "' + added[0] + '" was') + ' added to the blacklist.';
			this.say(room, '/modnote ' + text + ' by ' + user.name + '.');
			this.writeSettings();
		}
		if (alreadyAdded.length) {
			text += ' User' + (alreadyAdded.length > 1 ? 's "' + alreadyAdded.join('", "') + '" are' : ' "' + alreadyAdded[0] + '" is') + ' already present in the blacklist.';
		}
		if (illegalNick.length) text += (text ? ' All other' : 'All') + ' users had illegal nicks and were not blacklisted.';
		this.say(room, text);
	},
	//Usage of this command undoes the above.
	unblacklist: 'unautoban',
	unban: 'unautoban',
	unab: 'unautoban',
	unautoban: function (arg, user, room) {
		if (room === user || !user.canUse('autoban', room.id)) return false;
		if (!Users.self.hasRank(room.id, '@')) return this.say(room, Users.self.name + ' requires rank of @ or higher to (un)blacklist.');
		if (!toId(arg)) return this.say(room, 'You must specify at least one user to unblacklist.');

		arg = arg.split(',');
		var removed = [];
		var notRemoved = [];
		var roomid = room.id;
		for (var i = 0; i < arg.length; i++) {
			var tarUser = toId(arg[i]);
			if (!tarUser || tarUser.length > 18) {
				notRemoved.push(tarUser);
			} else if (!this.unblacklistUser(tarUser, roomid)) {
				notRemoved.push(tarUser);
			} else {
				removed.push(tarUser);
				this.say(room, '/roomunban ' + tarUser);
			}
		}

		var text = '';
		if (removed.length) {
			text += ' User' + (removed.length > 1 ? 's "' + removed.join('", "') + '" were' : ' "' + removed[0] + '" was') + ' removed from the blacklist';
			this.say(room, '/modnote ' + text + ' by user ' + user.name + '.');
			this.writeSettings();
		}
		if (notRemoved.length) text += (text.length ? ' No other' : 'No') + ' specified users were present in the blacklist.';
		this.say(room, text);
	},
	//Usage of this command is identical to Autoban in function, but the name is specified using Regular Expressions. Be careful with these.
	rab: 'regexautoban',
	regexautoban: function (arg, user, room) {
		if (room === user || !user.isRegexWhitelisted() || !user.canUse('autoban', room.id)) return false;
		if (!Users.self.hasRank(room.id, '@')) return this.say(room, Users.self.name + ' requires rank of @ or higher to (un)blacklist.');
		if (!arg) return this.say(room, 'You must specify a regular expression to (un)blacklist.');

		var regexObj;
		try {
			regexObj = new RegExp(arg, 'i');
		} catch (e) {
			return this.say(room, e.message);
		}

		if (/^(?:(?:\.+|[a-z0-9]|\\[a-z0-9SbB])(?![a-z0-9\.\\])(?:\*|\{\d+\,(?:\d+)?\}))+$/i.test(arg)) {
			return this.say(room, 'Regular expression /' + arg + '/i cannot be added to the blacklist. Don\'t be Machiavellian!');
		}

		var regex = '/' + arg + '/i';
		if (!this.blacklistUser(regex, room.id)) return this.say(room, '/' + regex + ' is already present in the blacklist.');

		var groups = Config.groups;
		var selfid = Users.self.id;
		var selfidx = groups[room.users.get(selfid)];
		room.users.forEach(function (value, userid) {
			if (userid !== selfid && regexObj.test(userid) && groups[value] < selfidx) {
				this.say(room, '/roomban ' + userid + ', Blacklisted user');
			}
		});

		this.writeSettings();
		this.say(room, '/modnote Regular expression ' + regex + ' was added to the blacklist by user ' + user.name + '.');
		this.say(room, 'Regular expression ' + regex + ' was added to the blacklist.');
	},
	//Undoes the above.
	unrab: 'unregexautoban',
	unregexautoban: function (arg, user, room) {
		if (room === user || !user.isRegexWhitelisted() || !user.canUse('autoban', room.id)) return false;
		if (!Users.self.hasRank(room.id, '@')) return this.say(room, Users.self.name + ' requires rank of @ or higher to (un)blacklist.');
		if (!arg) return this.say(room, 'You must specify a regular expression to (un)blacklist.');

		arg = '/' + arg.replace(/\\\\/g, '\\') + '/i';
		if (!this.unblacklistUser(arg, room.id)) return this.say(room, '/' + arg + ' is not present in the blacklist.');

		this.writeSettings();
		this.say(room, '/modnote Regular expression ' + arg + ' was removed from the blacklist user by ' + user.name + '.');
		this.say(room, 'Regular expression ' + arg + ' was removed from the blacklist.');
	},
	//Returns a list (through PM) of the users banned in the room you post the command in.
	viewbans: 'viewblacklist',
	vab: 'viewblacklist',
	viewautobans: 'viewblacklist',
	viewblacklist: function (arg, user, room) {
		if (room === user || !user.canUse('autoban', room.id)) return false;

		var text = '/pm ' + user.id + ', ';
		if (!this.settings.blacklist) return this.say(room, text + 'No users are blacklisted in this room.');

		var roomid = room.id;
		var blacklist = this.settings.blacklist[roomid];
		if (!blacklist) return this.say(room, text + 'No users are blacklisted in this room.');

		if (!arg.length) {
			var userlist = Object.keys(blacklist);
			if (!userlist.length) return this.say(room, text + 'No users are blacklisted in this room.');
			return this.uploadToHastebin('The following users are banned from ' + roomid + ':\n\n' + userlist.join('\n'), function (link) {
				if (link.startsWith('Error')) return this.say(room, text + link);
				this.say(room, text + 'Blacklist for room ' + roomid + ': ' + link);
			}.bind(this));
		}

		var nick = toId(arg);
		if (!nick || nick.length > 18) {
			text += 'Invalid username: "' + nick + '".';
		} else {
			text += 'User "' + nick + '" is currently ' + (blacklist[nick] || 'not ') + 'blacklisted in ' + roomid + '.';
		}
		this.say(room, text);
	},
	//Adds the specified phrase to a list of banned strings that the bot checks for. Useful if a particular troll has a catchphrase of sorts.
	banphrase: 'banword',
	banword: function (arg, user, room) {
		arg = arg.trim().toLowerCase();
		if (!arg) return false;

		var tarRoom = room.id;
		if (room === user) {
			if (!user.isExcepted()) return false;
			tarRoom = 'global';
		} else if (user.canUse('banword', room.id)) {
			tarRoom = room.id;
		} else {
			return false;
		}

		var bannedPhrases = this.settings.bannedphrases ? this.settings.bannedphrases[tarRoom] : null;
		if (!bannedPhrases) {
			if (bannedPhrases === null) this.settings.bannedphrases = {};
			bannedPhrases = (this.settings.bannedphrases[tarRoom] = {});
		} else if (bannedPhrases[arg]) {
			return this.say(room, 'Phrase "' + arg + '" is already banned.');
		}
		bannedPhrases[arg] = 1;

		this.writeSettings();
		this.say(room, 'Phrase "' + arg + '" is now banned.');
	},
	//Undoes the above.
	unbanphrase: 'unbanword',
	unbanword: function (arg, user, room) {
		var tarRoom;
		if (room === user) {
			if (!user.isExcepted()) return false;
			tarRoom = 'global';
		} else if (user.canUse('banword', room.id)) {
			tarRoom = room.id;
		} else {
			return false;
		}

		arg = arg.trim().toLowerCase();
		if (!arg) return false;
		if (!this.settings.bannedphrases) return this.say(room, 'Phrase "' + arg + '" is not currently banned.');

		var bannedPhrases = this.settings.bannedphrases[tarRoom];
		if (!bannedPhrases || !bannedPhrases[arg]) return this.say(room, 'Phrase "' + arg + '" is not currently banned.');

		delete bannedPhrases[arg];
		if (Object.isEmpty(bannedPhrases)) {
			delete this.settings.bannedphrases[tarRoom];
			if (Object.isEmpty(this.settings.bannedphrases)) delete this.settings.bannedphrases;
		}

		this.writeSettings();
		this.say(room, 'Phrase "' + arg + '" is no longer banned.');
	},
	//Returns a list of banned phrases (through PM) in the room you post the command in.
	viewbannedphrases: 'viewbannedwords',
	vbw: 'viewbannedwords',
	viewbannedwords: function (arg, user, room) {
		var tarRoom = room.id;
		var text = '';
		var bannedFrom = '';
		if (room === user) {
			if (!user.isExcepted()) return false;
			tarRoom = 'global';
			bannedFrom += 'globally';
		} else if (user.canUse('banword', room.id)) {
			text += '/pm ' + user.id + ', ';
			bannedFrom += 'in ' + room.id;
		} else {
			return false;
		}

		if (!this.settings.bannedphrases) return this.say(room, text + 'No phrases are banned in this room.');
		var bannedPhrases = this.settings.bannedphrases[tarRoom];
		if (!bannedPhrases) return this.say(room, text + 'No phrases are banned in this room.');

		if (arg.length) {
			text += 'The phrase "' + arg + '" is currently ' + (bannedPhrases[arg] || 'not ') + 'banned ' + bannedFrom + '.';
			return this.say(room, text);
		}

		var banList = Object.keys(bannedPhrases);
		if (!banList.length) return this.say(room, text + 'No phrases are banned in this room.');

		this.uploadToHastebin('The following phrases are banned ' + bannedFrom + ':\n\n' + banList.join('\n'), function (link) {
			if (link.startsWith('Error')) return this.say(room, link);
			this.say(room, text + 'Banned phrases ' + bannedFrom + ': ' + link);
		}.bind(this));
	},

	/**
	 * General commands
	 *
	 * Add custom commands here.
	 */

	tell: 'say',
	say: function (arg, user, room) {
		if (room === user || !user.canUse('say', room.id)) return false;
		this.say(room, stripCommands(arg) + ' (' + user.name + ' said this)');
	},
	//Returns the last action that this bot has seen the specified user do, if they have been.
	seen: function (arg, user, room) { // this command is still a bit buggy
		var text = (room === user ? '' : '/pm ' + user.id + ', ');
		arg = toId(arg);
		if (!arg || arg.length > 18) return this.say(room, text + 'Invalid username.');
		if (arg === user.id) {
			text += 'Have you looked in the mirror lately?';
		} else if (arg === Users.self.id) {
			text += 'You might be either blind or illiterate. Might want to get that checked out.';
		} else if (!this.chatData[arg] || !this.chatData[arg].seenAt) {
			text += 'The user ' + arg + ' has never been seen.';
		} else {
			text += arg + ' was last seen ' + this.getTimeAgo(this.chatData[arg].seenAt) + ' ago' + (
				this.chatData[arg].lastSeen ? ', ' + this.chatData[arg].lastSeen : '.');
		}
		this.say(room, text);
	},

	/*
	 * Random Commands Section!
	 * Place all 'random thing generator' commands in this area!
	 * This is a template for all Random Commands; please don't use this as an actual command.
	 * randomcommands: function (arg, user, room) {
	 *	if (!user.canUse('randomcommands', room.id)) return false;
	 *	var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
	 *	var variableone = list1[Math.floor(list1.length * Math.random())];
	 *	var variabletwo = list2[Math.floor(list2.length * Math.random())];
	 *	this.say(room, text + "Randomly generated thing: __" + variableone + " " + variabletwo + "__.");
	 * },
	 */
	//Returns a random character build.
	randchar: 'randomcharacter',
	chargen: 'randomcharacter',
	genchar: 'randomcharacter',
	randomcharacter: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		var adjective = characterAdjectives[Math.floor(characterAdjectives.length * Math.random())];
		var type = characterTypes[Math.floor(characterTypes.length * Math.random())];
		var role = roles[Math.floor(roles.length * Math.random())];
		var gender = ["male", "female"][Math.floor(2 * Math.random())];
		if (Math.floor(Math.random() * 4200 < 20)) gender = "hermaphrodite";
		if (Math.floor(Math.random() * 4200 < 10) || type === "...thing") gender = "neuter";
		var pronoun = pronouns[gender];
		var possessivePronoun = possessivePronouns[gender];
		var perkList = perks.slice(0);
		var perk1 = perkList[Math.floor(perkList.length * Math.random())];
		perkList.splice(perkList.indexOf(perk1), 1);
		var perk2 = perkList[Math.floor(perkList.length * Math.random())];
		perkList.splice(perkList.indexOf(perk2), 1);
		var perk3 = perkList[Math.floor(perkList.length * Math.random())];
		var debuff = debuffs[Math.floor(debuffs.length * Math.random())];
		this.say(room, text + "Randomly generated character: __A " + gender + ", " + adjective + " " + type + " (" + role + "). " + possessivePronoun + " positive factors include: " + perk1 + ", " + perk2 + ", and " + perk3 + ", though " + pronoun + (gender === "neuter" ? " are" : " is") + " unfortunately rather " + debuff + ".__");
	},
	//Returns a random Pokemon type or type combination.
	gentype: 'randomtype',
	randtype: 'randomtype',
	randomtype: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		arg = toId(arg);
		if (arg && arg !== 'single' && arg !== 'dual') this.say(room, text + "Please input either 'single' or 'dual' as arguments, or leave it blank for a random decision. Continuing as if you left it blank.");
		var firstType = types[Math.floor(types.length * Math.random())];
		if (arg !== 'single' && (arg === 'dual' || Math.floor(Math.random() * 2))) {
			var secondType = types[Math.floor(types.length * Math.random())];
			while (firstType === secondType) {
				secondType = types[Math.floor(types.length * Math.random())];
			}
		}
		this.say(room, text + "Randomly generated type: __" + firstType + (secondType ? "/" + secondType : "") + "__.");
	},
	//Returns a random statistical build.
	randstats: 'randomstats',
	randomstats: function (arg, user, room, shuffle) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		arg = parseInt(arg);
		if (arg && (isNaN(arg) || arg < 30 || arg > 780)) return this.say(room, text + "Specified BST must be a whole number between 30 and 780.");
		var bst = arg ? Math.floor(arg) : Math.floor(580 * Math.random()) + 200;
		var stats = [0, 0, 0, 0, 0, 0];
		var currentST = 0;
		var leveler = 2 * (Math.floor(Math.random() + 1));
		for (var j = 0; j < leveler; j++) {
			for (var i = 0; i < 6; i++) {
				var randomPart = Math.floor((bst / (leveler * 6)) * Math.random()) + 1;
				stats[i] += randomPart;
				currentST += randomPart;
			}
		}
		if (currentST > bst) {
			for (var k = currentST; k > bst; k--) {
				stats[Math.floor(5 * Math.random()) + 1] -= 1;
			}
		} else if (currentST < bst) {
			for (var k = currentST; k < bst; k++) {
				stats[Math.floor(5 * Math.random()) + 1] += 1;
			}
		}
		stats = this.shuffle(stats);
		this.say(room, text + "Randomly generated stats: HP: " + stats[0] + " Atk: " + stats[1] + " Def: " + stats[2] + " SpA: " + stats[3] + " SpD: " + stats[4] + " Spe: " + stats[5] + " BST: " + bst);
	},
	//Generates a random interaction between two specified characters. Can have some humourous outcomes. c:
	genrp: 'randRP',
	genRP: 'randRP',
	randrp: 'randRP',
	randRP: function(arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		arg = arg.split(", ");
		if (!arg || arg.length < 2) return this.say(room, text + "Please specify two names, seperated by a comma.");
		var X = arg[0];
		var Y = arg[1];
		var RANDNUM = Math.floor((Math.random() * 94));
		var ar = new Array();

		ar[0] = X + " as a superhero and " + Y + " as the sidekick.";
		ar[1] = X + " cooking lunch for " + Y + ".";
		ar[2] = X + " as a vampire feeding on " + Y + ".";
		ar[3] = X + " and " + Y + "  as children playing together.";
		ar[4] = X + " as a film noir detective and " + Y + " as the desperate client.";
		ar[5] = X + " and " + Y + " in hand to hand combat.";
		ar[6] = X + " taking care of an injured " + Y + ".";
		ar[7] = X + " giving " + Y + " a piggy back ride.";
		ar[8] = X + " frustrated by losing a board game or card game to " + Y + ".";
		ar[9] = X + " and " + Y + " fighting together, back to back.";
		ar[10] = X + " giving " + Y + " a present.";

		ar[11] = X + " and " + Y + " wearing each other's clothes.";
		ar[12] = X + " and " + Y + " cuddling.";
		ar[13] = X + " and " + Y + " dancing.";
		ar[14] = X + " striking the finishing blow on " + Y + ".";
		ar[15] = X + " and " + Y + " meeting after they haven't seen each other in a very long time.";
		ar[16] = X + " and " + Y + " watching a very sad movie. " + X + " is crying.";
		ar[17] = X + " and " + Y + " at a wild party. " + X + " doesn't want to be there.";
		ar[18] = X + " and " + Y + " going to an event that requires formal attire.";
		ar[19] = X + " and " + Y + " as JRPG style characters.";
		ar[20] = X + " and " + Y + " as medieval-fantasy RPG characters archetypes.";

		ar[21] = X + " is the lead singer and " + Y + " is the guitarist in a band.";
		ar[22] = X + " and " + Y + " at the beach.";
		ar[23] = X + " and " + Y + " watching the sunset.";
		ar[24] = X + " and " + Y + " playing a sports game together.";
		ar[25] = X + " mourning over a dead " + Y + ".";
		ar[26] = X + " and " + Y + " eating dinner together";
		ar[27] = X + " helping " + Y + " with chores.";
		ar[28] = X + " is about to do something stupid. " + Y + " does not think this is a good idea.";
		ar[29] = X + " with a hangover, but " + Y + " is feeling fine.";
		ar[30] = X + " drawing " + Y + ".";

		ar[31] = X + " and " + Y + " taking care of a bunch of orphan puppies and/or kittens."
		ar[32] = X + " and " + Y + " in dressing in drag."
		ar[33] = X + " is a member of the royal family and " + Y + " is a lowly peasant."
		ar[34] = X + " comforting a sad " + Y + "."
		ar[35] = X + " confronting " + Y + " about something bad they have done."
		ar[36] = X + " reveals a secret to " + Y + "."
		ar[37] = X + " discovers " + Y + "'s terrible secret."
		ar[38] = X + " playing pranks on " + Y + "."
		ar[39] = X + " getting revenge on " + Y + "."
		ar[40] = X + " and " + Y + " as rivals in a competition or contest. " + X + " wins.";
	
		ar[41] = X + " and " + Y + " in matching cosplays";
		ar[42] = X + " and " + Y + " go to a bar. " + Y + " gets too drunk and " + X + " has to take them home.";
		ar[43] = X + " suspects " + Y + " is a werewolf. " + Y + " is actually hiding a more mundane secret.";
		ar[44] = X + " and " + Y + " meet during the zombie apocalypse. " + Y + " needs " + X + "'s help.";
		ar[45] = X + " accidentally drinks a love potion and falls for " + Y + ".";
		ar[46] = X + " gets amnesia and forgets everything about " + Y + ".";
		ar[47] = X + " and " + Y + " get separated in a place that's easy to get lost in. They need to reunite.";
		ar[48] = X + " has something that " + Y + " desperately wants or needs. " + X + " won't give it up easily.";
		ar[49] = X + " has offended " + Y + " in some way but doesn't realize it.";
		ar[50] = X + " and " + Y + " as buddy cops.";

		ar[51] = X + " and " + Y + " play an MMO together. " + X + " is the tank and " + Y + " is the healer.";
		ar[52] = X + " is famous and " + Y + " is their biggest fan.";
		ar[53] = X + " is a super hero hiding their secret identity from " + Y + ".";
		ar[54] = X + " was bullied by " + Y + " when they were both children. " + Y + " doesn't remember doing it.";
		ar[55] = X + " is finally noticed by their senpai, " + Y + ".";
		ar[56] = X + " gets a contract to assassinate " + Y + ".";
		ar[57] = X + " and " + Y + " are in an arranged marriage, but " + X + " doesn't want to go through with it.";
		ar[58] = X + " is " + Y + "'s hired body guard.";
		ar[59] = X + " and " + Y + " meet when " + X + " finds " + Y + "'s lost pet.";
		ar[60] = X + " and " + Y + " are atheletes from different countries that meet at the Olympics.";


		ar[61] = X + " is too nervous to approach " + Y + ", and only admires them from afar.";
		ar[62] = X + " and " + Y + " are part of a team, but their constant arguing causes problems. They have to pull it together for the sake of the team.";
		ar[63] = X + " is a barista at " + Y + "'s favorite coffee shop.";
		ar[64] = X + " has stowed away on a ship that " + Y + " works on.";
		ar[65] = X + " saved " + Y + "'s life. " + Y + " is honorbound to return the favor.";
		ar[66] = X + " is a demon summoned by wizard " + Y + " to do their bidding.";
		ar[67] = "A prophecy foretold that " + X + " would be the only one who could defeat the evil " + Y + ".";
		ar[68] = X + " and " + Y + " are reincarnated lovers, but aren't initially compatable to each other.";
		ar[69] = X + " and " + Y + " meet on a blind date. " + Y + " wants to go on another date, but " + X + " isn't sure.";
		ar[70] = X + " is under a terrible curse. " + Y + " knows how to cure it.";
	
		ar[71] = X + " and " + Y + " are the leaders of rival gangs.";
		ar[72] = X + " is the leader of an organization. " + Y + " is their loyal second-in-command";
		ar[73] = X + " confessed their love to " + Y + ", but was rejected.";
		ar[74] = X + " and " + Y + " pretend to be in a relationship for the purpose of an undercover mission.";
		ar[75] = X + " frequently has dreams or nightmares about " + Y + ".";
		ar[76] = X + " is hired to spy on " + Y + ".";
		ar[77] = X + " and " + Y + " got handcuffed together and lost the key.";
		ar[78] = X + " is cornered by a bully, but " + Y + " comes to the rescue.";
		ar[79] = X + " is bitten by a zombie and has to be put down by " + Y + ".";
		ar[80] = X + " and " + Y + " go on a road trip.";
	
		ar[81] = X + " tries to tell " + Y + " that 'It isn't what it looks like, I swear!'";
		ar[82] = X + " and " + Y + " swap bodies.";
		ar[83] = X + " knits an ugly sweater and forces " + Y + " to wear it.";
		ar[84] = X + " loses a bet to " + Y + ".";
		ar[85] = X + " and " + Y + " decide to go camping. " + Y + " reads the map upside down and they both become terribly lost.";
		ar[86] = X + ", a knight in shining armor, must rescue the distressed " + Y + ".";
		ar[87] = X + " gives up their life so that " + Y + " can live.";
		ar[88] = X + " and " + Y + " fight over who will sleep where on the bunk bed.";
		ar[89] = X + " trains " + Y + " in combat.";
		ar[90] = X + " and " + Y + " go ice skating. " + Y + " is not very good and " + X + " has to help them.";
	
		ar[91] = X + " and " + Y + " watch fireworks together.";
		ar[92] = X + " and " + Y + " are Pokemon trainers that cross paths and end up traveling together.";
		ar[93] = X + " and " + Y + " get caught up in a storm and must stay sheltered together until it passes.";

		this.say(room, text + "Randomly Generated RP: " + ar[RANDNUM]);
	},
	//Returns a random Pokemon.
	rollpokemon: 'randpokemon',
	randpoke: 'randpokemon',
	randompoke: 'randpokemon',
	randompokemon: 'randpokemon',
	randpokemon: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		var randompokes = [];
		var parameters = [];
		/*
		 *  OBJECT KEY
		 *  0 = will reject roll if it has property
		 *  1 = property will not affect roll
		 *  2 = roll will be rejected if it lacks this property
		 */
		var conditions = {"uber":1, "legend":1, "nfe":1, "mega":1, "forms":1, "shiny":1};
		var types = {"normal":1, "fire":1, "water":1, "grass":1, "electric":1, "ice":1, "fighting":1, "poison":1, "ground":1, "flying":1, "psychic":1, "bug":1, "rock":1, "ghost":1, "dragon":1, "dark":1, "steel":1, "fairy":1};
		var singleType = false;
		var noDt = {"Unown":1, "Shellos":1, "Gastrodon":1, "Deerling":1, "Sawsbuck":1, "Vivillon":1, "Flabebe":1, "Floette":1, "Florges":1, "Furfrou":1};

		var pokequantity = 1;
		if (arg) {
			var parameters = arg.toLowerCase().split(", ");
			var hasBeenSet = false;
			for (var j = 0; j < parameters.length; j++) {
				if (parameters[j] === parseInt(parameters[j], 10)) {
					if (hasBeenSet) return this.say(room, text + "Please only specify number of pokemon once");
					if (parameters[j] < 1 || parameters[j] > 6) return this.say(room, text + "Quantity of random pokemon must be between 1 and 6.");
					pokequantity = parameters[j];
					hasBeenSet = true;
					continue;
				}
				var notGate = false;
				if (parameters[j].charAt(0) === '!') {
					notGate = true;
					parameters[j] = parameters[j].substr(1);
				}
				//argument alias list
				switch (parameters[j]) {
					case "legendary": parameters[j] = "legend"; break;
					case "fe": parameters[j] = "nfe"; notGate = !notGate; break;
					case "ubers": parameters[j] = "uber"; break;
				}

				if (parameters[j] in conditions) {
					if (conditions[parameters[j]] !== 1) return this.say(room, text + "Cannot include both '" + parameters[j] + "' and '!" + parameters[j] + "'.");
					if (notGate) {
						if (parameters[j] === 'forms') conditions.mega = 0;
						conditions[parameters[j]] = 0;
					} else {
						conditions[parameters[j]] = 2;
					}
					continue;
				}
				if (parameters[j].indexOf(' type') > -1) parameters[j] = parameters[j].substr(0, parameters[j].length - 5);
				if (parameters[j] in types) {
					if (types[parameters[j]] !== 1) return this.say(room, text + "Cannot include both '" + parameters[j] + "' and '!" + parameters[j] + "'.");
					if (notGate) {
						types[parameters[j]] = 0;
					} else {
						types[parameters[j]] = 2;
						singleType = true;
					}
					continue;
				} else {
					return this.say(room, text + "Parameter '" + parameters[j] + "' not recognized.");
				}
			}

			//More complex checks to prevent it getting stuck searching for combinations that don't exist
			if (conditions.forms === 2 && singleType) return this.say(room, text + "The parameter 'forms' must be used by itself.");
			if ((conditions.uber === 2 && conditions.legend === 0 && pokequantity > 3) || (conditions.mega === 2 && conditions.uber === 2 && pokequantity > 1) ||
				(conditions.nfe === 2 && (conditions.uber === 2 || conditions.legend === 2 || conditions.mega === 2))) return this.say(room, text + "Invalid generation conditions.");

			if (singleType) {
				if (conditions.uber === 2 || conditions.legend === 2 || conditions.mega === 2) return this.say(room, text + "Invalid generation conditions.");
				for (var set in types) {
					if (types[set] === 1) types[set] = 0;
				}
			}
		}
		if (pokequantity === 1 && room !== user && user.hasRank(room.id, '+')) text = '!dt ';

		var attempt = -1;
		var dexNumbers = [];
		if (parameters.length > 0) {
			//create an array for all dex numbers and then shuffle it
			for (var g = 0; g < 722; g++) {
				dexNumbers.push(g);
			}
			dexNumbers = this.shuffle(dexNumbers);
		}
		for (var i = 0; i < pokequantity; i++) {
			attempt++;
			if (attempt > 721) {
				console.log('randpoke fail: ' + parameters);
				return this.say(room, text + "Could not find " + pokequantity + " unique Pokemon with ``" + parameters.join(', ') + "``");
			}
			var skipPoke = false;
			if (parameters.length > 0) {
				var pokeNum = dexNumbers[attempt];
			} else {
				var pokeNum = Math.floor(722 * Math.random());
			}
			if (conditions.uber === 2 && !Pokedex[pokeNum].uber) {i--; continue;}
			if (conditions.legend === 2 && !Pokedex[pokeNum].legend) {i--; continue;}
			if (conditions.nfe === 2 && !Pokedex[pokeNum].nfe) {i--; continue;}
			if (conditions.mega === 2 && !Pokedex[pokeNum].mega) {i--; continue;}
			if (conditions.forms === 2 && !Pokedex[pokeNum].forms) {i--; continue;}
			if (conditions.uber === 0 && Pokedex[pokeNum].uber) {i--; continue;}
			if (conditions.legend === 0 && Pokedex[pokeNum].legend) {i--; continue;}
			if (conditions.nfe === 0 && Pokedex[pokeNum].nfe) {i--; continue;}
			for (var h = 0; h < Pokedex[pokeNum].type.length; h++) {
				var currentType = Pokedex[pokeNum].type[h].toLowerCase();
				if (types[currentType] !== 0) break;
				skipPoke = true;
			}
			if (skipPoke) {i--; continue;}
			if (Pokedex[pokeNum].mega && conditions.mega !== 0) {
				var buffer = Pokedex[pokeNum].species;
				var megaNum = (conditions.mega === 2 ? 0 : -1);
				megaNum += Math.floor((Pokedex[pokeNum].mega.length + (conditions.mega === 2 ? 0 : 1)) * Math.random());
				if (megaNum == -1) {
					randompokes.push(buffer);
				} else {
					randompokes.push(buffer + '-' + Pokedex[pokeNum].mega[megaNum]);
				}
				continue;
			}
			if (Pokedex[pokeNum].forms && conditions.forms !== 0) {
				var formNum = Math.floor(Pokedex[pokeNum].forms.length * Math.random());
				if (Pokedex[pokeNum].forms[formNum] !== "norm") {
					var buffer = Pokedex[pokeNum].species;
					if (text === '!dt ' && noDt[buffer] && Pokedex[pokeNum].forms[formNum] !== "eternal-flower") text = '';
					randompokes.push(buffer + '-__' + Pokedex[pokeNum].forms[formNum] + '__');
					continue;
				}
			}
			randompokes.push(Pokedex[pokeNum].species);
		}
		for (var k = 0; k < randompokes.length; k++) {
			if (Math.floor(((conditions.shiny === 2) ? 2 : 1364) * Math.random()) !== 0) continue;
			randompokes[k] = '``shiny`` ' + randompokes[k];
		}
		this.say(room, (text === "!dt " ? text + randompokes.join(", ") : text + "Randomly generated Pokemon: " + randompokes.join(", ")));
	},
	//Returns a random 'scene'.
	randscene: 'randomlocation',
	randomscene: 'randomlocation',
	randlocation: 'randomlocation',
	randomlocation: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		var adjective = adjectives[Math.floor(adjectives.length * Math.random())];
		var location = locations[Math.floor(locations.length * Math.random())];
		this.say(room, text + "Randomly generated scene: __" + adjective + " " + location + "__.");
	},
	//Returns a random Pokemon move.
	randmove: 'randommove',
	randommove: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		var types = {"normal":1, "fire":1, "water":1, "grass":1, "electric":1, "ice":1, "fighting":1, "poison":1, "ground":1, "flying":1, "psychic":1, "bug":1, "rock":1, "ghost":1, "dragon":1, "dark":1, "steel":1, "fairy":1};
		var classes = {"physical": 1, "special": 1, "status": 1};
		var moveQuantity = 1;
		var hasBeenSet = false;
		var singleType = false;
		var singleClass = false;

		var parameters = arg.split(', ');
		if (parameters.length > 10) return this.say(room, text + "Please use 10 or fewer arguments.");
		for (var i = 0; i < parameters.length; i++) {
			if (parameters[i] === parseInt(parameters[i], 10)) {
				if (hasBeenSet) return this.say(room, text + "Please only specify number of pokemon once");
				if (parameters[i] < 1 || parameters[i] > 6) return this.say(room, text + "Quantity of random moves must be between 1 and 6.");
				moveQuantity = parameters[i];
				hasBeenSet = true;
				continue;
			}
			var notGate = false;
			if (parameters[i].charAt(0) === '!') {
				notGate = true;
				parameters[i] = parameters[i].substr(1);
			}
			var parameter = toId(parameters[i]);
			if (parameter in types) {
				if (types[parameter] === 1 && !notGate) {
					types[parameter] = 2;
					singleType = true;
				} else if (types[parameter] === 1 && notGate) {
					types[parameter] = 0;
				} else {
					return this.say(room, text + "Cannot include both '" + parameters[i] + "' and '!" + parameters[i] + "'.");
				}
			} else if (parameter in classes) {
				if (classes[parameter] === 1 && !notGate) {
					classes[parameter] = 2;
					singleClass = true;
				} else if (classes.parameter === 1 && notGate) {
					classes[parameter] = 0;
				} else {
					return this.say(room, text + "Cannot include both '" + parameters[i] + "' and '!" + parameters[i] + "'.");
				}
			} else {
				return this.say(room, text + "Please specify a parameter or check that you are spelling it correctly.");
			}
		}
		if (singleType) {
			if (moveQuantity > 3) return this.say(room, text + "Invalid generation conditions.");
			for (var set in types) {
				if (types[set] === 1) types[set] = 0;
			}
		}
		if (singleClass) {
			for (var set in classes) {
				if (classes[set] === 1) classes[set] = 0;
			}
		}

		var randomMoves = [];
		for (var j = 0; j < moveQuantity; j++) {
			var roll = Math.floor(614 * Math.random()) + 1;
			if (types[Movedex[roll].type] === 0 || classes[Movedex[roll].class] === 0 || randomMoves.indexOf(Movedex[roll].name) > -1) {
				j--;
				continue;
			}
			randomMoves.push(Movedex[roll].name);
		}
		this.say(room, text + randomMoves.join(', '));
	},
	//Returns a random genre combination.
	randstyle: 'randomgenre',
	randomstyle: 'randomgenre',
	randgenre: 'randomgenre',
	randomgenre: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		var genre1 = genres[Math.floor(genres.length * Math.random())];
		var genre2 = genres[Math.floor(genres.length * Math.random())];
		while (genre1 === genre2) {
			genre2 = genres[Math.floor(genres.length * Math.random())];
		}
		this.say(room, text + "Randomly generated genre: __" + genre1 + "/" + genre2 + "__.");
	},
	//Returns a random story idea. Mashup of the above commands.
	idea: 'randomstory',
	randidea: 'randomstory',
	randomidea: 'randomstory',
	randstory: 'randomstory',
	randomstory: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		return this.say(room, text + "Randomly generated story | " + randIdea());
	},
	//End Random Commands
	// Used for prompt of the Day stuff.
	// CURRENTLY IN BETA
	'ptsd': 'potd',
	'prompt': 'potd',
	potd: function (arg, user, room) {
		if (!arg) {
			if (!this.settings.potd[0]) return this.say(room, "ERROR: Out of Prompt of the Days! q-q");
			this.say(room, "The current Prompt of the Day is:");
			return this.say(room, this.settings.potdCurrent.prompt + " (set by " + this.settings.potdCurrent.user + ")");
		} else {
			var arg = arg.split(', ');
			if ((toId(arg[0]) == "makerandom") || (toId(arg[0]) == "autogen")) {
				// This should be a last resort.
				var thing = randIdea();
				this.settings.potd.push({
					prompt: thing,
					user: user.id
				});
				this.settings.potdRanOut = false;
				this.writeSettings();
				return this.say(room, "Recorded random prompt: " + thing);
			} else if (toId(arg[0]) == "add") {
				if (!user.hasRank(room.id, '+')) return false;
				if (!arg[1]) return this.say(room, "Please specify a prompt to add.");
				this.settings.potd.push({
					prompt: arg.slice(1).join(', ').trim(),
					user: user.id
				});
				this.settings.potdRanOut = false;
				this.writeSettings();
				return this.say(room, "Recorded prompt. Your prompt is number " + this.settings.potd.length + " in the queue!");
			} else if (toId(arg[0]) == "delete") {
				if (!arg[1]) return this.say(room, "Please state which prompt you want to delete (between 1 and " + this.settings.potd.length + ")");
				if (arg[1] == "0") return false;
				if (!user.hasRank(room.id, '%') && user.id != this.settings.potd[arg[1] - 1].user) return false;
				this.settings.potd.splice(Number(arg[1]) - 1, 1);
				this.writeSettings();
				return this.say(room, "Deleting specified prompt... Prompts remaining in queue: " + this.settings.potd.length);
			} else if (toId(arg[0]) == "list") {
				var output = [];
				for (var i = 0; i < this.settings.potd.length; i++) {
					output.push("Prompt Number - " + (i + 1) + "\nPrompt: " + this.settings.potd[i].prompt + "\nSubmitter: " + this.settings.potd[i].user + "\n");
				}
				this.uploadToHastebin('List of Upcoming Prompts\n\n' + output.join('\n'), function (link) {
					this.say(room, link);
				}.bind(this));
			}
		}
	},
	//Returns the Word of the Day! One of Writing's most-used commands.
	'word': 'wotd',
	wotd: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		if (!arg) {
			if (!this.settings.wotd) return this.say(room, text + "No Word of the Day has been set.");
			return this.say(room, text + "Today's Word of the Day is **" + this.settings.wotd.word + "**: " + this.settings.wotd.kind + " [__" + this.settings.wotd.pron + "__] - " + this.settings.wotd.definition);
		}
		if (toId(arg) === 'check' || toId(arg) === 'time') return this.say(room, text + "The Word of the Day was last updated to **" + this.settings.wotd.word + "** " + this.getTimeAgo(this.settings.wotd.time) + " ago by " + this.settings.wotd.user);
		var hasPerms = false;
		if (this.settings.wotd) {
			if (Date.now() - this.settings.wotd.time < 61200000) return this.say(room, "Sorry, but at least 17 hours must have passed since the WOTD was last set in order to set it again!");
		}
		if (this.settings.scribeShop) {
			if (user.hasRank(room.id, '+')) {
				hasPerms = true;
			} else {
				for (i = 0; i < this.settings.scribeShop.length; i++) {
					if (this.settings.scribeShop[i].account === user.id) {
						if (this.settings.scribeShop[i].wotd != 0) {
							this.settings.scribeShop[i].wotd -= 1;
							hasPerms = true;
							this.say(room, "Redeeming your Poetic License... Uses remaining: " + this.settings.scribeShop[i].wotd + "!");
						}
					}
				}
			}
		} else if (user.hasRank(room.id, '+')) {
			hasPerms = true;
		}
		if (!hasPerms) return this.say(room, text + 'You must be at least Voice or higher to set the Word of the Day.');
		arg = arg.split(', ');
		if (arg.length < 4) return this.say(room, text + "Invalid arguments specified. The format is: __word__, __pronunciation__, __part of speech__, __defintion__.");
		var wotd = {
			word: arg[0],
            		pron: arg[1],
            		kind: arg[2],
			definition: arg.slice(3).join(', ').trim(),
			time: Date.now(),
			user: user.name
		};
		if (!this.settings.wotdHistory) {
			this.settings.wotdHistory = [];
		}
		this.settings.wotd = wotd;
		this.settings.wotdHistory.push(wotd);
		this.writeSettings();
		this.say(room, text + "The Word of the Day has been set to '" + arg[0] + "'!");
	},
	//Returns the link to the Writing Room's website.
	site: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + "Writing Room's Website: http://pswriting.weebly.com/");
	},
	//Returns the current time of day! ...For the bot, that is.
	time: function (arg, user, room) {
		var text = (room === user || user.hasRank(room.id, '+')) ? '' : '/pm ' + user.name + ', ';
		var now = new Date();
		var correct = function (time) {
			return (time < 10 ? '0' : '') + time;
		}
		// Time variables
		var timezone = now.getTimezoneOffset() / 60;
		var year = now.getFullYear();
		var mm = now.getMonth() + 1;
		var theDay = now.getDay();
		var dd = now.getDate();
		var hour = now.getHours();
		var minutes = correct(now.getMinutes());
		var seconds = correct(now.getSeconds());
		// Translate the time variables to a readable date
		if (timezone !== 0) {
			 // create a copy to fix +-timezone issues
			// FIXME: maybe make this not so sloppy???
			var _timezone = ('' + timezone);
			timezone = (timezone > 0 ? '-' : '+') + (isNaN(Number(_timezone.charAt(0))) ? _timezone.substr(1) : _timezone);
		} else {
			timezone = '+0';
		}
		var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var month = months[mm - 1]; // If we don't subtract here, it'll assume it's the next month. For example, if it's October, it'll say November.
		var season;
		switch (month) {
		case 'December': case 'January': case 'February':
			season = 'winter';
			break;
		case 'March': case 'April': case 'May':
			season = 'spring';
			break;
		case 'June': case 'July': case 'August':
			season = 'summer';
			break;
		case 'September': case 'October': case 'November':
			season = 'autumn';
			break;
		}
		var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
		var day = days[theDay];
		var _days = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth', 'thirteenth', 'fourteenth', 'fifteenth', 'sixteenth', 'seventeenth', 'eighteenth', 'nineteen', 'twentieth', 'twenty-first', 'twenty-second', 'twenty-third', 'twenty-fourth', 'twenty-fifth', 'twenty-sixth', 'twenty-seventh', 'twenty-eighth', 'twenty-ninth', 'thirtieth', 'thirty-first'];
		var ordinalDay = _days[dd - 1];
		var AMorPM = 'AM';
		switch (hour) {
		case 12:
			AMorPM = 'PM';
			break;
		case 24:
			AMorPM = 'AM';
			break;
		}
		if (hour > 12) {
			hour = hour - 12;
			AMorPM = 'PM';
		}
		hour = correct(hour);
		var today = hour + ':' + minutes + ':' + seconds + ' ' + AMorPM + ', ' + mm + '/' + dd + '/' + year + ', the ' + ordinalDay + ' of the ' + season + ' month of ' + month + ', ' + year + '.';
		return this.say(room, text + 'The current time is ' + today + ' (' + day + ', GMT' + timezone + ')');
	},
	//Quick and generic introduction. Usually better to answer questions perosonally, though.
	newbie: 'rules',
	faq: 'rules',
	rules: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		switch (room.id) {
		case 'writing':
			text += "If you're new to the Writing room, be sure to read our introduction: http://pswriting.weebly.com/introduction.html";
			break;
		case 'mythology':
			text += "Welcome to Myths & Magic! In this room, we, well... talk about mythology and magic! Though, discussion of black magic is not encouraged.";
			break;
		default:
			text += "Welcome to the room!";
		}
		text += " Feel free to ask the room staff any questions that you may have!";
		this.say(room, text);
	},
	//For when you need a little love.
	esupport: function (arg, user, room) {
		var text = user.hasRank(room.id, '%') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'I love you, ' + user.name + '.');
	},
	//Returns the link for the room's Google Drive.
	drive: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Community Drive: http://bit.do/ps-writing-archive');
	},
	//Quick link to a list of games and activities
	fun: 'games',
	activities: 'games',
	games: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Visit this page for a list of our various games and activities: http://pswriting.weebly.com/games--activities.html');
	},
	//Sunday scribing hype. :o
	//NOTE: Probably needs updating.
	hype: 'sundayscribing',
	slam: 'sundayscribing',
	sundayslam: 'sundayscribing',
	scribing: 'sundayscribing',
	sundayscribing: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + "Every week we hold a Sunday Scribing challenge in which participants are to write a story or a poem (depending on the week) based on the topic announced on Sunday. They have until the following Friday to submit it. For more info and the submission link: http://goo.gl/Ezik4q");
	},
	//Returns a link to a Google Form where one can request for a new folder.
	reqfolder: 'folderreq',
	folderreq: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Need a folder for our Google Drive Writing Archive? Submit a request here: http://bit.do/ps-folderreq');
	},
	//Returns a handy tool for capitalising things.
	titlehelp: 'title',
	title: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Need help capitalising a title? Try out this helpful tool! http://titlecapitalization.com/');
	},
	//Returns a link to the Writing Room's poems list.
	poems: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Writing Room Poems: http://bit.do/PSwritingpoems');
	},
	//Returns a link to the Writing Room's stories list.
	stories: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Writing Room Stories: http://bit.do/PSwritingstories');
	},
	//Returns a brief guide to becoming voice.
	voice: function (arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		this.say(room, text + 'Interested in becoming a voice? Check out the guideines for your chance at having a shot! http://bit.do/pswritingvoicerules or http://bit.do/pswritingvoicerap');
	},
	//Starts timed announcements. 
	//NOTE: Broken? Hard to tell.
	announce: function (arg, user, room) {
		if (!user.hasRank(room.id, '%')) return false;
		arg = toId(arg);
		if (arg === 'off') {
			if (this.buzzer) clearInterval(this.buzzer);
			return this.say(room, 'Announcements have been disabled.');
		} else if (arg === 'on') {
			var self = this;
			this.say(room, 'Announcements have been enabled');
			this.buzzer = setInterval(function() {
				var tips = ["Don't forget to allow people to comment on your work when it's done! Click 'Share', and set permissions accordingly.",
					"We like to play writing games, too! Click 'Activities' in our room introduction (the fancy box you saw when you joined) to see what games are available!",
					"Looking for feedback? Ask writers for an R/R, or a 'review for review'. It's a win-win for both parties!",
					"Questions on the (+) voice rank? Read our Voice Guidelines at http://bit.do/pswritingvoiceguidlines for more information.",
					"Confused as to the time? Wanting to punch timezones in the face? Look no further, for I have a fancy ``time`` command! Try it out!",
					"Would you like to host your work on our cloud drive? Ask a staff member about getting your own folder!",
					"Be sure to keep your work's presentation up to par, or AxeBane will hunt you down! Or, you could ask one of our staff to take a look and check it for you, but that's boring.",
					"Hey, you. Yes, you! Do __you__ want to improve the room? If you answered 'no', then go sit in the naughty corner. If you said 'yes', on the other hand, then go ahead and click the shiny 'submit and idea' button in the roominto!",
					"Want to play a writing game? Ask one of our friendly staff to host one, or if you think you're up to it, try hosting yourself! It's a great way to gain a good reputation!",
					"Every week we hold a Pokemon Showdown! Sunday Scribing contest. Participants are to write a story or a poem, depending on which week it is, based on the topic announced on Saturday. They have the whole of Sunday to write it. For more info, visit http://goo.gl/Ay6U5N",
					"Today's Word of the Day is: " + self.settings.wotd.word + ". Its definition is: " + self.settings.wotd.definition,
					"Need help getting started on a story? Try out the ``;idea`` command! Or, if you need to be a little more specific, try things like ``;randchar`` or ``;randscene``. You'll be writing in no time!",
					"Need a quick way to access our Community Drive? Type ``;drive``!",
					"Psst... You. Yeah, you! Did you know that you can send messages to your scribing buddies just by using the ``;mail`` command? It works, even when they're offline! :o",
					"Need some love? Try using the ``esupport`` command. I promise I won't bite. <3"
				];
				var num = Math.floor((Math.random() * tips.length));
				self.say(room, tips[num]);
			}, 60 * 60 * 1000);
		}
	},

	/*
	 * Messaging-related commands
	 *
	 */
	//Mails the specified user the specified text when they next join the room or run the checkmail command.
	mail: 'message',
	msg: 'message',
	message: function (arg, user, room) {
		if (this.settings.messageBlacklist && this.settings.messageBlacklist[user.id]) return false;
		if (room !== user && !user.canUse('message', room.id)) return this.say(room, '/pm ' + user.name + ', Messaging is not enabled in this room for your rank, please send mail through PM');
		var text = (room === user ? '' : '/pm ' + user.name + ', ');
		arg = arg.split(',');
		if (!arg[0] || !arg[1]) return this.say(room, text + 'Please use the following format: ";mail user, message"');
		var tarUser = toId(arg[0]);
		if (tarUser === toId(Config.nick)) return this.say(room, text + 'Oh, dear. You do know you can just tell me these things up-front, right?');
		var message = arg.slice(1).join(',').trim();
		if (message.length > 215) return this.say(room, text + 'Your message cannot exceed 215 characters');
		if (tarUser.length > 18) return this.say(room, text + 'That\'s not a real username! It\'s too long! >:I');
		if (!this.messages[tarUser]) this.messages[tarUser] = [];
		if (this.messages[tarUser].length >= 5) return this.say(room, text + arg[0] + '\'s inbox is full.');
		var mail = {
			from: user.name,
			text: message,
			destination: arg[0], /* This is included only for reading by ;countmail. It is used nowhere else. */
			time: Date.now()
		}
		this.messages[tarUser].push(mail);
		this.writeMessages();
		this.say(room, text + 'Your message has been sent to ' + arg[0] + '.');
	},
	//Checks the mail.
	checkmail: 'readmessages',
	readmail: 'readmessages',
	readmessages: function (arg, user, room) {
		var text = (room === user ? '' : '/pm ' + user.name + ', ');
		if (!this.messages[user.id]) return this.say(room, text + 'Your inbox is empty.');
		for (var i = 0; i < this.messages[user.id].length; i++) {
			this.say(room, text + this.getTimeAgo(this.messages[user.id][i].time) + " ago, " + this.messages[user.id][i].from + " said: " + this.messages[user.id][i].text);
		}
		delete this.messages[user.id];
		this.writeMessages();
	},
	//Clears the mail of a specific user, or all of it.
	clearmail: 'clearmessages',
	clearmessages: function (arg, user, room) {
		if (!user.hasRank(room.id, '#')) return false;
		if (!arg) return this.say(room, 'Specify whose mail to clear or \'all\' to clear all mail.');
		if (!this.messages) return this.say(room, 'The message file is empty.');
		if (arg === 'all') {
			this.messages = {};
			this.writeMessages();
			this.say(room, 'All messages have been cleared.');
		} else if (arg === 'time') {
			for (var u in this.messages) {
				var messages = this.messages[u].slice(0);
				for (var i = 0; i < messages.length; i++) {
					if (messages[i].time < (Date.now() - MESSAGES_TIME_OUT)) this.messages[u].splice(this.messages[u].indexOf(messages[i]), 1);
				}
			}
			this.writeMessages();
			this.say(room, 'Messages older than one week have been cleared.');
		} else {
			var tarUser = toId(arg);
			if (!this.messages[tarUser]) return this.say(room, arg + ' does not have any pending messages.');
			delete this.messages[tarUser];
			this.writeMessages();
			this.say(room, 'Messages for ' + arg + ' have been cleared.');
		}
	},
	//Counts how much mail is currently pending and returns a link (in PMs) to the user about who sent what when and to whom if they're of a certain rank.
	countmessages: 'countmail',
	countmail: function (arg, user, room) {
		if (!user.hasRank(room.id, '+')) return false;
		if (!this.messages) this.say(room, 'The message file is empty');
		var messageCount = 0;
		var oldestMessage = Date.now();
		var messageArray = []; //Array that stores messages to be uploaded to Hastebin.
		for (var u in this.messages) {
			for (var i = 0; i < this.messages[u].length; i++) {
				if (this.messages[u][i].time < oldestMessage) oldestMessage = this.messages[u][i].time;
				messageCount++;
				messageArray.push(["From: " + this.messages[u][i].from, "To: " + this.messages[u][i].destination, "Days Since Sent: " + Math.round((Date.now() - this.messages[u][i].time) / (24 * 60 * 60 * 1000))]);
			}
		}
		//convert oldestMessage to days
		var day = Math.floor((Date.now() - oldestMessage) / (24 * 60 * 60 * 1000));
		this.say(room, 'There are currently **' + messageCount + '** pending messages. ' + (messageCount ? 'The oldest message ' + (!day ? 'was left today.' : 'is __' + day + '__ days old.') : ''));
		
		if (user.hasRank(room.id, '@')) {
			var output = [];
			for (i = 0; i < messageArray.length; i++) {
				output.push(messageArray[i][0] + "\n" + messageArray[i][1] + "\n" + messageArray[i][2] + "\n");
			}
			this.uploadToHastebin('Messages:\n\n' + output.join('\n'), function (link) {
				this.say(room, "/msg " + user.name + ", Messages Log: " + link);
			}.bind(this));
		}
	},
	//Used to blacklist people that frequently abuse the mail system from the mail system.
	//Thankfully, this hasn't been used as of the time of writing this.
	upl: 'messageblacklist',
	unpoeticlicense: 'messageblacklist',
	messageblacklist: function (arg, user, room) {
		if (!user.hasRank(room.id, '@')) return false;
		if (!arg) return this.say(room, 'Please specify which user(s) to blacklist from the message system');
		var users = arg.split(', ');
		var errors = [];
		if (!this.settings.messageBlacklist) this.settings.messageBlacklist = {};
		for (var i = 0; i < users.length; i++) {
			var tarUser = toId(users[i]);
			if (this.settings.messageBlacklist[tarUser]) {
				errors.push(users[i]);
				users.splice(i, 1);
				continue;
			}
			this.settings.messageBlacklist[tarUser] = 1;
		}
		this.writeSettings();
		if (errors.length) this.say(room, errors.join(', ') + ' is already on the message blacklist');
		if (users.length) this.say(room, '/modnote ' + users.join(', ') + ' added to the message blacklist by ' + user.name.substr(1));
	},
	//Returns the list of users blacklisted from using the messaging system.
	vmb: 'viewmessageblacklist',
	viewmessageblacklist: function (arg, user, room) {
		if (!user.hasRank(room.id, '@')) return false;
		if (!this.settings.messageBlacklist) return this.say(room, 'No users are blacklisted from the message system');
		var messageBlacklist = Object.keys(this.settings.messageBlacklist);
		this.uploadToHastebin('The following users are banned in ' + room + ':\n\n' + messageBlacklist.join('\n'), function (link) {
			this.say(room, "/pm " + user.name + ", Message Blacklist: " + link);
		}.bind(this));
	},
	//Used to both set (if you're a ranked user) your own autobiography and view (any user can do so) the specified user's biography, or your own if you don't specify anyone and are applicable to own one.
	bio: 'biography',
	autobiography: 'biography',
	biography: function(arg, user, room) {
		var text = user.hasRank(room.id, '+') || room === user ? '' : '/pm ' + user.name + ', ';
		var tarUser = toId(arg);
		if (!this.settings.bios) {
			this.settings.bios = [];
			this.writeSettings();
		}
		var bios = this.settings.bios;
		var input = arg.split(' ');
		if (toId(input[0]) === "set" && input[1]) {
			if (!user.hasRank(room.id, '+')) return this.say(room, text + "Sorry, but you need to be at least a voice to set a biography.");
			tarUser = user.id;
			input = input.slice(1).join(' ');
			for (var i = 0, len = bios.length; i < len; i++) {
				if (bios[i].name === tarUser) {
					bios[i].bio = input;
					this.writeSettings();
					return this.say(room, text + "Biography for user " + user.name + " has been edited.");
				}
			}
			bios.push({"name": tarUser, "bio": input});
			this.writeSettings();
			return this.say(room, text + "Biography for user " + user.name + " has been set.");
		} else {
			for (var i = 0, len = bios.length; i < len; i++) {
				if (user.id === bios[i].name) {
					return this.say(room, text + user.name + ": " + bios[i].bio);
				} else if (tarUser === bios[i].name) {
					return this.say(room, text + arg + ": " + bios[i].bio);
				}
			}
			if (arg) {
				this.say(room, text + "No biography found for " + arg);
			} else {
				return this.say(room, text + "You haven't set a biography yet! :o")
			}
		}
	}
};
