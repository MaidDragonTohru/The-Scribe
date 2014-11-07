/**
 * This is the file where the bot commands are located
 *
 * @license MIT license
 */
const MESSAGES_TIME_OUT = 7 * 24 * 60 * 60 * 1000;

var http = require('http');
var sys = require('sys');
exports.commands = {
        /**
         * Help commands
         *
         * These commands are here to provide information about the bot.
         */
        about: function(arg, by, room, con) {
            if (this.hasRank(by, '#~') || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            text +=
                'Writing Bot: fork of Roleplaying Bot by Morfent, with custom Writing Room commands AxeBane. Github Repository: http://github.com/AxeBane/Axe-s-Writing-Bot';
            this.say(con, room, text);
        },
        help: 'guide',
        guide: function(arg, by, room, con) {
            if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            if (config.botguide) {
                text +=
                    'A guide on how to use this bot can be found here: ' +
                    config.botguide;
            } else {
                text +=
                    'There is no guide for this bot. PM the bot\'s owner with any questions.';
            }
            this.say(con, room, text);
        },
        /**
         * Dev commands
         *
         * These commands are here for highly ranked users (or the creator) to use
         * to perform arbitrary actions that can't be done through any other commands
         * or to help with upkeep of the bot.
         */
        reload: function(arg, by, room, con) {
            if (toId(by) !== 'axebane') return false;
            try {
                this.uncacheTree('./commands.js');
                Commands = require('./commands.js').commands;
                this.say(con, room, 'Reloaded. .w.');
                console.log(by, 'reloaded the bot.');
            } catch (e) {
                error('failed to reload: ' + sys.inspect(e));
            }
        },
        do: function(arg, by, room, con) {
            if (!this.hasRank(by, '#')) return false;
            if (arg.indexOf('[') === 0 && arg.indexOf(']') > -1) {
                var tarRoom = arg.slice(1, arg.indexOf(']'));
                arg = arg.substr(arg.indexOf(']') + 1).trim();
            }
            this.say(con, tarRoom || room, arg);
        },
        js: function(arg, by, room, con) {
            if (config.excepts.indexOf(toId(by)) === -1) return false;
            try {
                var result = eval(arg.trim());
                this.say(con, room, JSON.stringify(result));
            } catch (e) {
                this.say(con, room, e.name + ": " + e.message);
            }
        },
        /**
         * Room Owner commands
         *
         * These commands allow room owners to personalise settings for moderation and command use.
         */
        settings: 'set',
        set: function(arg, by, room, con) {
            if (!this.hasRank(by, '%@&#~') || room.charAt(0) === ',') return false;
            var settable = {
                joke: 1,
                autoban: 1,
                regexautoban: 1,
                banword: 1,
                randomcommands: 1,
                message: 1
            };
            var modOpts = {
                flooding: 1,
                caps: 1,
                stretching: 1,
                bannedwords: 1,
                snen: 1
            };
            var opts = arg.split(',');
            var cmd = toId(opts[0]);
            if (cmd === 'mod' || cmd === 'm' || cmd === 'modding') {
                if (!opts[1] || !toId(opts[1]) || !(toId(opts[1]) in
                        modOpts)) return this.say(con, room,
                    'Incorrect command: correct syntax is ;set mod, [' +
                    Object.keys(modOpts).join('/') +
                    '](, [on/off])');
                if (!this.settings['modding']) this.settings['modding'] = {};
                if (!this.settings['modding'][room]) this.settings[
                    'modding'][room] = {};
                if (opts[2] && toId(opts[2])) {
                    if (!this.hasRank(by, '#~')) return false;
                    if (!(toId(opts[2]) in {
                            on: 1,
                            off: 1
                        })) return this.say(con, room,
                        'Incorrect command: correct syntax is ;set mod, [' +
                        Object.keys(modOpts).join('/') +
                        '](, [on/off])');
                    if (toId(opts[2]) === 'off') {
                        this.settings['modding'][room][toId(opts[1])] = 0;
                    } else {
                        delete this.settings['modding'][room][toId(opts[1])];
                    }
                    this.writeSettings();
                    this.say(con, room, 'Moderation for ' + toId(opts[1]) +
                        ' in this room is now ' + toId(opts[2]).toUpperCase() +
                        '.');
                    return;
                    r
                } else {
                    this.say(con, room, 'Moderation for ' + toId(opts[1]) +
                        ' in this room is currently ' + (this.settings[
                                'modding'][room][toId(opts[1])] === 0 ?
                            'OFF' : 'ON') + '.');
                    return;
                }
            } else {
                if (!Commands[cmd]) return this.say(con, room, ';' + opts[0] +
                    ' is not a valid command.');
                var failsafe = 0;
                while (!(cmd in settable)) {
                    if (typeof Commands[cmd] === 'string') {
                        cmd = Commands[cmd];
                    } else if (typeof Commands[cmd] === 'function') {
                        if (cmd in settable) {
                            break;
                        } else {
                            this.say(con, room, 'The settings for ;' + opts[
                                0] + ' cannot be changed.');
                            return;
                        }
                    } else {
                        this.say(con, room,
                            'Something went wrong. PM TalkTakesTime here or on Smogon with the command you tried.'
                        );
                        return;
                    }
                    failsafe++;
                    if (failsafe > 5) {
                        this.say(con, room, 'The command ";' + opts[0] +
                            '" could not be found.');
                        return;
                    }
                }
                var settingsLevels = {
                    off: false,
                    disable: false,
                    '+': '+',
                    '%': '%',
                    '@': '@',
                    '&': '&',
                    '#': '#',
                    '~': '~',
                    on: true,
                    enable: true
                };
                if (!opts[1] || !opts[1].trim()) {
                    var msg = '';
                    if (!this.settings[cmd] || (!this.settings[cmd][room] &&
                            this.settings[cmd][room] !== false)) {
                        msg = ';' + cmd +
                            ' is available for users of rank ' + ((cmd ===
                                    'autoban' || cmd === 'banword') ? '#' :
                                config.defaultrank) + ' and above.';
                    } else if (this.settings[cmd][room] in settingsLevels) {
                        msg = ';' + cmd +
                            ' is available for users of rank ' + this.settings[
                                cmd][room] + ' and above.';
                    } else if (this.settings[cmd][room] === true) {
                        msg = ';' + cmd +
                            ' is available for all users in this room.';
                    } else if (this.settings[cmd][room] === false) {
                        msg = ';' + cmd +
                            ' is not available for use in this room.';
                    }
                    this.say(con, room, msg);
                    return;
                } else {
                    if (!this.hasRank(by, '#~')) return false;
                    var newRank = opts[1].trim();
                    if (!(newRank in settingsLevels)) return this.say(con,
                        room, 'Unknown option: "' + newRank +
                        '". Valid settings are: off/disable, +, %, @, &, #, ~, on/enable.'
                    );
                    if (!this.settings[cmd]) this.settings[cmd] = {};
                    this.settings[cmd][room] = settingsLevels[newRank];
                    this.writeSettings();
                    this.say(con, room, 'The command ;' + cmd + ' is now ' +
                        (settingsLevels[newRank] === newRank ?
                            ' available for users of rank ' + newRank +
                            ' and above.' : (this.settings[cmd][room] ?
                                'available for all users in this room.' :
                                'unavailable for use in this room.')))
                }
            }
        },
        blacklist: 'autoban',
        ban: 'autoban',
        ab: 'autoban',
        autoban: function(arg, by, room, con) {
            if (!this.canUse('autoban', room, by) || room.charAt(0) === ',')
                return false;
            arg = arg.split(',');
            var added = [];
            var illegalNick = [];
            var alreadyAdded = [];
            if (!arg.length || (arg.length === 1 && !arg[0].trim().length))
                return this.say(con, room,
                    'You must specify at least one user to blacklist.');
            for (var i = 0; i < arg.length; i++) {
                var tarUser = toId(arg[i]);
                if (tarUser.length < 1 || tarUser.length > 18) {
                    illegalNick.push(tarUser);
                    continue;
                }
                if (!this.blacklistUser(tarUser, room)) {
                    alreadyAdded.push(tarUser);
                    continue;
                }
                this.say(con, room, '/roomban ' + tarUser +
                    ', Blacklisted user');
                this.say(con, room, '/modnote ' + tarUser +
                    ' was added to the blacklist by ' + by + '.');
                added.push(tarUser);
            }
            var text = '';
            if (added.length) {
                text += 'User(s) "' + added.join('", "') +
                    '" added to blacklist successfully. ';
                this.writeSettings();
            }
            if (alreadyAdded.length) text += 'User(s) "' + alreadyAdded.join(
                '", "') + '" already present in blacklist. ';
            if (illegalNick.length) text += 'All ' + (text.length ?
                    'other ' : '') +
                'users had illegal nicks and were not blacklisted.';
            this.say(con, room, text);
        },
        unblacklist: 'unautoban',
        unban: 'unautoban',
        unab: 'unautoban',
        unautoban: function(arg, by, room, con) {
            if (!this.canUse('autoban', room, by) || room.charAt(0) === ',')
                return false;
            arg = arg.split(',');
            var removed = [];
            var notRemoved = [];
            if (!arg.length || (arg.length === 1 && !arg[0].trim().length))
                return this.say(con, room,
                    'You must specify at least one user to unblacklist.'
                );
            for (var i = 0; i < arg.length; i++) {
                var tarUser = toId(arg[i]);
                if (tarUser.length < 1 || tarUser.length > 18) {
                    notRemoved.push(tarUser);
                    continue;
                }
                if (!this.unblacklistUser(tarUser, room)) {
                    notRemoved.push(tarUser);
                    continue;
                }
                this.say(con, room, '/roomunban ' + tarUser);
                removed.push(tarUser);
            }
            var text = '';
            if (removed.length) {
                text += 'User(s) "' + removed.join('", "') +
                    '" removed from blacklist successfully. ';
                this.writeSettings();
            }
            if (notRemoved.length) text += (text.length ? 'No other ' :
                    'No ') +
                'specified users were present in the blacklist.';
            this.say(con, room, text);
        },
        rab: 'regexautoban',
        regexab: 'regexautoban',
        regexautoban: function(arg, by, room, con) {
            if (!this.canUse('regexautoban', room, by) || room.charAt(0) ===
                ',') return false;
            if (!arg) return this.say(con, room,
                'No pattern was specified.');
            if (!/[^\\\{,]\w/.test(arg)) return false;
            arg = '/' + arg + '/gi';
            if (!this.blacklistUser(arg, room)) return this.say(con, room,
                'Pattern ' + arg +
                ' is already present in the blacklist.');
            this.say(con, room, 'Pattern ' + arg +
                ' added to the blacklist successfully.');
            this.writeSettings();
        },
        unrab: 'unregexautoban',
        unregexab: 'unregexautoban',
        unregexautoban: function(arg, by, room, con) {
            if (!this.canUse('regexautoban', room, by) || room.charAt(0) ===
                ',') return false;
            if (!arg) return this.say(con, room,
                'No pattern was specified.');
            arg = '/' + arg + '/gi';
            if (!this.unblacklistUser(arg, room)) return this.say(con, room,
                'Pattern ' + arg +
                ' isn\'t present in the blacklist.');
            this.say(con, room, 'Pattern ' + arg +
                ' removed from the blacklist successfully.');
            this.writeSettings();
        },
        viewbans: 'viewblacklist',
        vab: 'viewblacklist',
        viewautobans: 'viewblacklist',
        viewblacklist: function(arg, by, room, con) {
            if (!this.canUse('autoban', room, by) || room.charAt(0) === ',')
                return false;
            var text = '';
            if (!this.settings.blacklist || !this.settings.blacklist[room]) {
                text = 'No users are blacklisted in this room.';
            } else {
                if (arg.length) {
                    var nick = toId(arg);
                    if (nick.length < 1 || nick.length > 18) {
                        text = 'Invalid nickname: "' + nick + '".';
                    } else {
                        text = 'User "' + nick + '" is currently ' + (nick in
                            this.settings.blacklist[room] ? '' : 'not '
                        ) + 'blacklisted in ' + room + '.';
                    }
                } else {
                    var nickList = Object.keys(this.settings.blacklist[room]);
                    if (!nickList.length) return this.say(con, room, '/pm ' +
                        by +
                        ', No users are blacklisted in this room.');
                    this.uploadToHastebin(con, room, by,
                        'The following users are banned in ' + room +
                        ':\n\n' + nickList.join('\n'))
                    return;
                }
            }
            this.say(con, room, '/pm ' + by + ', ' + text);
        },
        banphrase: 'banword',
        banword: function(arg, by, room, con) {
            if (!this.canUse('banword', room, by)) return false;
            if (!this.settings.bannedphrases) this.settings.bannedphrases = {};
            arg = arg.trim().toLowerCase();
            if (!arg) return false;
            var tarRoom = room;
            if (room.charAt(0) === ',') {
                if (!this.hasRank(by, '~')) return false;
                tarRoom = 'global';
            }
            if (!this.settings.bannedphrases[tarRoom]) this.settings.bannedphrases[
                tarRoom] = {};
            if (arg in this.settings.bannedphrases[tarRoom]) return this.say(
                con, room, "Phrase \"" + arg +
                "\" is already banned.");
            this.settings.bannedphrases[tarRoom][arg] = 1;
            this.writeSettings();
            this.say(con, room, "Phrase \"" + arg + "\" is now banned.");
        },
        unbanphrase: 'unbanword',
        unbanword: function(arg, by, room, con) {
            if (!this.canUse('banword', room, by)) return false;
            arg = arg.trim().toLowerCase();
            if (!arg) return false;
            var tarRoom = room;
            if (room.charAt(0) === ',') {
                if (!this.hasRank(by, '~')) return false;
                tarRoom = 'global';
            }
            if (!this.settings.bannedphrases || !this.settings.bannedphrases[
                    tarRoom] || !(arg in this.settings.bannedphrases[
                    tarRoom])) return this.say(con, room, "Phrase \"" + arg +
                "\" is not currently banned.");
            delete this.settings.bannedphrases[tarRoom][arg];
            if (!Object.size(this.settings.bannedphrases[tarRoom])) delete this
                .settings.bannedphrases[tarRoom];
            if (!Object.size(this.settings.bannedphrases)) delete this.settings
                .bannedphrases;
            this.writeSettings();
            this.say(con, room, "Phrase \"" + arg +
                "\" is no longer banned.");
        },
        viewbannedphrases: 'viewbannedwords',
        vbw: 'viewbannedwords',
        viewbannedwords: function(arg, by, room, con) {
            if (!this.canUse('banword', room, by)) return false;
            arg = arg.trim().toLowerCase();
            var tarRoom = room;
            if (room.charAt(0) === ',') {
                if (!this.hasRank(by, '~')) return false;
                tarRoom = 'global';
            }
            var text = "";
            if (!this.settings.bannedphrases || !this.settings.bannedphrases[
                    tarRoom]) {
                text = "No phrases are banned in this room.";
            } else {
                if (arg.length) {
                    text = "The phrase \"" + arg + "\" is currently " + (
                        arg in this.settings.bannedphrases[tarRoom] ?
                        "" : "not ") + "banned " + (room.charAt(0) ===
                        ',' ? "globally" : "in " + room) + ".";
                } else {
                    var banList = Object.keys(this.settings.bannedphrases[
                        tarRoom]);
                    if (!banList.length) return this.say(con, room,
                        "No phrases are banned in this room.");
                    this.uploadToHastebin(con, room, by,
                        "The following phrases are banned " + (room.charAt(
                            0) === ',' ? "globally" : "in " + room) +
                        ":\n\n" + banList.join('\n'))
                    return;
                }
            }
            this.say(con, room, text);
        },
        /**
         * General commands
         *
         * Add custom commands here.
         */
        seen: function(arg, by, room, con) { // this command is still a bit buggy
            var text = (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ');
            arg = toId(arg);
            if (!arg || arg.length > 18) return this.say(con, room, text +
                'Invalid username.');
            if (arg === toId(by)) {
                text += 'Have you looked in the mirror lately?';
            } else if (arg === toId(config.nick)) {
                text +=
                    'You might be either blind or illiterate. Might want to get that checked out.';
            } else if (!this.chatData[arg] || !this.chatData[arg].seenAt) {
                text += 'The user ' + arg + ' has never been seen.';
            } else {
                text += arg + ' was last seen ' + this.getTimeAgo(this.chatData[
                    arg].seenAt) + ' ago' + (this.chatData[arg].lastSeen ?
                    ', ' + this.chatData[arg].lastSeen : '.');
            }
            this.say(con, room, text);
        },
        //This is a template for all Random Commands; please don't use this as an actual command.
        randomcommands: function(arg, by, room, con) {
            if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            var variableone = ["entity1", "entity2"];
            var variabletwo = ["entity1", "entity2"];
            var varoneNum = Math.floor(variableone.length * Math.random());
            var vartwoNum = Math.floor(variabletwo.length * Math.random());
            this.say(con, room, text + 'Random thing: __' + variableone[varoneNum] + ' ' + variabletwo[vartwoNum] + '__.');
        },
        //Random Commands Section!
        //Place all 'random thing generator' commands in this section!
        rt: 'randtype',
        gentype: 'randtype',
        randomtype: 'randtype',
        randtype: function(arg, by, room, con) {
            if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
                var text = '';
            } else {
                text = '/pm ' + by + ', ';
            }
            var type = [];
            for (i = 0; i < 2; i++) {
                type[i] = Math.floor(17 * Math.random()) + 1;
                switch (type[i]) {
                    case 1:
                        type[i] = "Normal";
                        break;
                    case 2:
                        type[i] = "Fire";
                        break;
                    case 3:
                        type[i] = "Water";
                        break;
                    case 4:
                        type[i] = "Electric";
                        break;
                    case 5:
                        type[i] = "Grass";
                        break;
                    case 6:
                        type[i] = "Ice";
                        break;
                    case 7:
                        type[i] = "Fighting";
                        break;
                    case 8:
                        type[i] = "Poison";
                        break;
                    case 9:
                        type[i] = "Flying";
                        break;
                    case 10:
                        type[i] = "Ground";
                        break;
                    case 11:
                        type[i] = "Psychic";
                        break;
                    case 12:
                        type[i] = "Bug";
                        break;
                    case 13:
                        type[i] = "Rock";
                        break;
                    case 14:
                        type[i] = "Ghost";
                        break;
                    case 15:
                        type[i] = "Dragon";
                        break;
                    case 16:
                        type[i] = "Dark";
                        break;
                    case 17:
                        type[i] = "Steel";
                        break;
                    case 18:
                        type[i] = "Fairy";
                        break;
                }
            }
            if (type[1] !== type[0]) {
                text += "Randomly generated type: " + type[0] + "/" + type[
                    1] + ".";
            } else {
                text += "Randomly generated type: " + type[0] + ".";
            }
            this.say(con, room, text);
        },
        randstats: 'randomstats',
        rs: 'randomstats',
        randomstats: function(arg, by, room, con, shuffle) {
            if (this.canUse('randomstats', room, by) || room.charAt(0) ===
                ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            var text = '';
            var stat = [0, 0, 0, 0, 0, 0];
            var currentST = 0;
            var leveler = 2 * (Math.floor(Math.random() + 1));
            if (!arg) {
                var bst = Math.floor(580 * Math.random()) + 200;
            } else {
                var bst = Math.floor(arg);
                arg = parseInt(arg);
                if (isNaN(arg) || arg < 30 || arg > 780) return this.say(
                    con, room,
                    "Specified BST must be a whole number between 30 and 780."
                );
            }
            for (j = 0; j < leveler; j++) {
                for (i = 0; i < 6; i++) {
                    var randomPart = Math.floor((bst / (leveler * 6)) *
                        Math.random()) + 1;
                    stat[i] += randomPart;
                    currentST += randomPart;
                }
            }
            if (currentST > bst) {
                for (k = currentST; k > bst; k--) {
                    stat[Math.floor(5 * Math.random()) + 1] -= 1;
                }
            } else if (currentST < bst) {
                for (k = currentST; k < bst; k++) {
                    stat[Math.floor(5 * Math.random()) + 1] += 1;
                }
            }
            ranStats = this.shuffle(stat);
            text += 'Random stats: HP:' + ranStats[0] + ' Atk:' + ranStats[
                    1] + ' Def:' + ranStats[2] + ' SpA:' + ranStats[3] +
                ' SpD:' + ranStats[4] + ' Spe:' + ranStats[5] + ' BST:' +
                bst + '';
            this.say(con, room, text);
        },
        rollpokemon: 'randpokemon',
        randpoke: 'randpokemon',
        randompoke: 'randpokemon',
        randompokemon: 'randpokemon',
        randpokemon: function(arg, by, room, con) {
            if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            var randompokes = [];
            var Uber = '';
            var legend = '';
            var NFE = '';
            var noUber = '';
            var noNFE = '';
            var noLegend = '';
            var mega = '';
            var noMega = '';
            var noForms = '';
            var shiny = '';
            var noDt = {
                "Unown": 1,
                "Shellos": 1,
                "Gastrodon": 1,
                "Deerling": 1,
                "Sawsbuck": 1,
                "Vivillon": 1,
                "Flabébé": 1,
                "Floette": 1,
                "Florges": 1,
                "Furfrou": 1
            };
            if (!arg) {
                var pokequantity = 1;
            } else {
                var parameters = arg.toLowerCase().split(", ");
                var pokequantity = 1;
                var hasBeenSet = '';
                for (j = 0; j < parameters.length; j++) {
                    if (parameters[j] == parseInt(parameters[j], 10)) {
                        if (hasBeenSet) return this.say(con, room, 'Please only specify number of pokemon once');
                        if (parameters[j] < 1 || parameters[j] > 6) return this.say(con, room, "Quantity of random pokemon must be between 1 and 6.");
                        pokequantity = parameters[j];
                        hasBeenSet = true;
                        continue;
                    }
                    switch (parameters[j]) {
                        case 'uber':
                            Uber = 1;
                            continue;
                        case 'legendary':
                            legend = 1;
                            continue;
                        case 'mega':
                            mega = 1;
                            continue;
                        case 'nfe':
                            NFE = 1;
                            continue;
                        case '!uber':
                            noUber = 1;
                            continue;
                        case '!legendary':
                            noLegend = 1;
                            continue;
                        case '!mega':
                            noMega = 1;
                            continue;
                        case '!nfe':
                            noNFE = 1;
                            continue;
                        case '!forms':
                            noForms = 1;
                            noMega = 1;
                            continue;
                        case 'shiny':
                            shiny = 1;
                            continue;
                        default:
                            return this.say(con, room, 'Parameter \'' + parameters[j] + '\' not recognized.');
                    }
                }
                if (Uber && noUber) return this.say(con, room, 'roll cannot contain both \'uber\' and \'!uber\'.');
                if (NFE && noNFE) return this.say(con, room, 'roll cannot contain both \'nfe\' and \'!nfe\'.');
                if (legend && noLegend) return this.say(con, room, 'roll cannot contain both \'legend\' and \'!legend\'.');
                if (mega && noMega) return this.say(con, room, 'roll cannot contain both \'mega\' and \'!mega\'.');
                if (Uber && noLegend && pokequantity > 3) return this.say(con, room, 'Invalid generation conditions.');
                if (mega && Uber && pokequantity > 1) return this.say(con, room, 'Invalid generation conditions.');
                if ((Uber || legend || mega) && NFE) return this.say(con, room, 'Invalid generation conditions.');
            }
            if (pokequantity == 1 && room.charAt(0) !== ',' && this.hasRank(by, '+%@#~')) text = '!dt ';
            for (i = 0; i < pokequantity; i++) {
                var pokeNum = Math.floor(723 * Math.random());
                if (Uber && !Pokedex[pokeNum].uber) {
                    i--;
                    continue;
                }
                if (legend && !Pokedex[pokeNum].legend) {
                    i--;
                    continue;
                }
                if (NFE && !Pokedex[pokeNum].nfe) {
                    i--;
                    continue;
                }
                if (mega && !Pokedex[pokeNum].mega) {
                    i--;
                    continue;
                }
                if (noUber && Pokedex[pokeNum].uber) {
                    i--;
                    continue;
                }
                if (noLegend && Pokedex[pokeNum].legend) {
                    i--;
                    continue;
                }
                if (noNFE && Pokedex[pokeNum].nfe) {
                    i--;
                    continue;
                }
                if (randompokes.indexOf(Pokedex[pokeNum].species) > -1) {
                    i--;
                    continue;
                }
                if (Pokedex[pokeNum].mega && !noMega) {
                    var buffer = Pokedex[pokeNum].species;
                    var megaNum = (mega ? 0 : -1)
                    megaNum += Math.floor((Pokedex[pokeNum].mega.length + (mega ? 0 : 1)) * Math.random());
                    if (megaNum == -1) {
                        randompokes.push(buffer);
                    } else {
                        randompokes.push(buffer + '-' + Pokedex[pokeNum].mega[megaNum]);
                    }
                    continue;
                }
                if (Pokedex[pokeNum].forms && !noForms) {
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
            if (shiny) {
                for (k = 0; k < randompokes.length; k++) {
                    if (Math.floor(2 * Math.random()) === 0) continue;
                    randompokes[k] = '``shiny`` ' + randompokes[k];
                }
            } else {
                for (k = 0; k < randompokes.length; k++) {
                    if (Math.floor(1364 * Math.random()) !== 0) continue;
                    randompokes[k] = '``shiny`` ' + randompokes[k];
                }
            }
            this.say(con, room, text + randompokes.join(", "));
        },
        rl: 'randomlocation',
        randscene: 'randomlocation',
        randlocation: 'randomlocation',
        randomlocation: function(arg, by, room, con) {
            if (!(room in this.RP) && !room.charAt(0) === ',') return false;
            if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            var adjectives = ["crystal", "floating", "eternal-dusk", "sunset", "snowy", "rainy", "sunny", "chaotic", "peaceful", "colorful", "gooey", "fiery", "jagged", "glass", "vibrant", "rainbow", "foggy",
                "calm", "demonic", "polygonal", "glistening", "sexy", "overgrown", "frozen", "dark", "mechanical", "mystic", "steampunk", "subterranean", "polluted", "bleak", "dank", "smooth", "vast", "pixelated",
                "enigmatic", "illusionary", "sketchy", "spooky", "flying", "legendary", "cubic", "moist", "oriental", "fluffy", "odd", "fancy", "strange", "authentic", "bustling", "barren", "cluttered", "creepy", "dangerous",
                "distant", "massive", "exotic", "tainted", "filthy", "flawless", "forsaken", "frigid", "frosty", "grand", "grandiose", "grotesque", "harmful", "harsh", "hospitable", "hot", "jaded", "meek", "weird", "awkward",
                "silly", "cursed", "blessed", "drought-stricken"
            ];
            var locations = ["river", "island", "desert", "forest", "jungle", "plains", "mountains", "mesa", "cave", "canyon", "marsh", "lake", "plateau", "tundra", "volcano", "valley", "waterfall", "atoll",
                "asteroid", "grove", "treetops", "cavern", "beach", "ocean", "plains", "heavens", "abyss", "city", "crag", "planetoid", "harbor", "evergreen", "cabin", "hill", "field", "ship", "glacier", "estuary",
                "wasteland", "sky", "chamber", "ruin", "tomb", "park", "closet", "terrace", "air balloon", "shrine", "room", "swamp", "road", "path", "gateway", "school", "building", "vault", "pool", "statue", "pit",
                "temple", "lagoon", "prison", "harem", "mine", "catacombs"
            ];
            var adjNum = Math.floor(adjectives.length * Math.random());
            var locNum = Math.floor(locations.length * Math.random());
            this.say(con, room, text + 'Random scenery: __' + adjectives[adjNum] + ' ' + locations[locNum] + '__.');
        },
        rm: 'randommove',
        randmove: 'randommove',
        randommove: function(arg, by, room, con) {
            if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            var types = {
                "normal": 1,
                "fire": 1,
                "water": 1,
                "grass": 1,
                "electric": 1,
                "ice": 1,
                "fighting": 1,
                "poison": 1,
                "ground": 1,
                "flying": 1,
                "psychic": 1,
                "bug": 1,
                "rock": 1,
                "ghost": 1,
                "dragon": 1,
                "dark": 1,
                "steel": 1,
                "fairy": 1
            };
            var classes = {
                "physical": 1,
                "special": 1,
                "status": 1
            };
            var moveQuantity = 1;
            var hasBeenSet = false;
            var singleType = false;
            var singleClass = false;

            var parameters = arg.split(', ');
            if (parameters.length > 10) return this.say(con, room, 'Please use 10 or fewer arguments.');
            for (var i = 0; i < parameters.length; i++) {
                if (parameters[i] == parseInt(parameters[i], 10)) {
                    if (hasBeenSet) return this.say(con, room, 'Please only specify number of pokemon once');
                    if (parameters[i] < 1 || parameters[i] > 6) return this.say(con, room, "Quantity of random moves must be between 1 and 6.");
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
                        return this.say(con, room, 'Cannot include both \'' + parameters[i] + '\' and \'!' + parameters[i] + '\'.');
                    }
                } else if (parameter in classes) {
                    if (classes[parameter] === 1 && !notGate) {
                        classes[parameter] = 2;
                        singleClass = true;
                    } else if (classes.parameter === 1 && notGate) {
                        classes[parameter] = 0;
                    } else {
                        return this.say(con, room, 'Cannot include both \'' + parameters[i] + '\' and \'!' + parameters[i] + '\'.');
                    }
                } else {
                    return this.say(con, room, 'Pleae specify a parameter or check that you are spelling it correctly.');
                }
            }
            if (singleType) {
                if (moveQuantity > 3) return this.say(con, room, 'Invalid generation conditions.');
                for (var set in types) {
                    if (types[set] == 1) types[set] = 0;
                }
            }
            if (singleClass) {
                for (var set in classes) {
                    if (classes[set] == 1) classes[set] = 0;
                }
            }

            var randomMoves = [];
            for (var j = 0; j < moveQuantity; j++) {
                var roll = Math.floor(614 * Math.random()) + 1;
                if (types[Movedex[roll].type] === 0) {
                    j--;
                    continue;
                }
                if (classes[Movedex[roll].class] === 0) {
                    j--;
                    continue;
                }
                if (randomMoves.indexOf(Movedex[roll].name) > -1) {
                    j--;
                    continue;
                }
                randomMoves.push(Movedex[roll].name);
            }
            this.say(con, room, text + randomMoves.join(', '));
        },
        idea: 'randomgenre',
        randomidea: 'randomgenre',
        randidea: 'randomgenre',
        ri: 'randomgenre',
        randstyle: 'randomgenre',
        randomstyle: 'randomgenre',
        rs: 'randomgenre',
        rg: 'randomgenre',
        randgenre: 'randomgenre',
        randomgenre: function(arg, by, room, con) {
            if (!(room in this.RP) && !room.charAt(0) === ',') return false;
            if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            var genres = ["Action", "Adventure", "Comedy", "Crime", "Fantasy", "Historical", "Children's Book", "Horror", "Mystery",
                "Philosophical", "Political", "Realistic", "Romance", "Saga", "Satire", "Science Fiction", "Slice of Life", "Thriller", "Urban"
            ];
            var genNum = Math.floor(genres.length * Math.random());
            var genNum2 = Math.floor(genres.length * Math.random());
            this.say(con, room, text + 'Random genre splice: __' + genres[genNum] + ' ' + genres[genNum2] + '__.');
        },
        //End Random Commands
        setpoll: function(arg, by, room, con) {
            if (!this.canUse('setrp', room, by) || !(room in this.RP))
                return false;
            if (!arg) return this.say(con, room,
                'Please enter a strawpoll link.');
            this.RP[room].poll = arg;
            this.say(con, room, 'The poll was set to ' + arg + '.');
        },
        sw: 'wotd',
        writer: 'wotd',
        wotd: function(arg, by, room, con) {
            if (!this.canUse('setrp', room, by)) {
                var text = '/pm ' + by + ', ';
            } else {
                var text = '';
                var self = this;
                config.wotdCalled = true;
                setTimeout(function() {
                    delete config.wotdCalled;
                }, 60 * 1000);
            }
            if (!config.wotd) return this.say(con, room, text +
                'A Writer of the Day hasn\'t been set! :o');
            this.say(con, room, text + 'Today\'s Spotlighted Writer is [[' +
                config.wotd + ']].');
        },
        setdoc: function(arg, by, room, con) {
            if (!this.canUse('setrp', room, by) || !(room in this.RP))
                return false;
            if (!arg) return this.say(con, room,
                'Please enter a document link.');
            this.RP[room].doc = arg;
            this.say(con, room, 'The document was set to ' + arg + '.');
        },
        doc: function(arg, by, room, con) {
            if (!(room in this.RP) || room.charAt(0) === ',') return false;
            if (this.RP[room].docCalled) {
                var text = '/pm ' + by + ', ';
            } else {
                var text = '';
                var self = this;
                this.RP[room].docCalled = true;
                setTimeout(function() {
                    delete self.RP[room].docCalled;
                }, 60 * 1000);
=======
        }
        this.say(con, room, text);
    },
    /**
     * General commands
     *
     * Add custom commands here.
     */
    seen: function(arg, by, room, con) { // this command is still a bit buggy
        var text = (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ');
        arg = toId(arg);
        if (!arg || arg.length > 18) return this.say(con, room, text +
            'Invalid username.');
        if (arg === toId(by)) {
            text += 'Have you looked in the mirror lately?';
        } else if (arg === toId(config.nick)) {
            text +=
                'You might be either blind or illiterate. Might want to get that checked out.';
        } else if (!this.chatData[arg] || !this.chatData[arg].seenAt) {
            text += 'The user ' + arg + ' has never been seen.';
        } else {
            text += arg + ' was last seen ' + this.getTimeAgo(this.chatData[
                arg].seenAt) + ' ago' + (this.chatData[arg].lastSeen ?
                ', ' + this.chatData[arg].lastSeen : '.');
        }
        this.say(con, room, text);
    },
    //This is a template for all Random Commands; please don't use this as an actual command.
	randomcommands: function(arg, by, room, con) {
		return false; //remove this line when using this template
		if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		var variableone = ["entity1","entity2"];
		var variabletwo = ["entity1","entity2"];
		var varoneNum = Math.floor(variableone.length * Math.random());
		var vartwoNum = Math.floor(variabletwo.length * Math.random());
		this.say(con, room, text + 'Random thing: __' + variableone[varoneNum] + ' ' + variabletwo[vartwoNum] + '__.');
    },
    //Random Commands Section!
    //Place all 'random thing generator' commands in this section!
    rt: 'randtype',
    gentype: 'randtype',
    randomtype: 'randtype',
    randtype: function(arg, by, room, con) {
        if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
			var text = '';
		} else {
			text = '/pm ' + by + ', ';
		}
        var type = [];
        for (i = 0; i < 2; i++) {
            type[i] = Math.floor(17 * Math.random()) + 1;
            switch (type[i]) {
                case 1:
                    type[i] = "Normal";
                    break;
                case 2:
                    type[i] = "Fire";
                    break;
                case 3:
                    type[i] = "Water";
                    break;
                case 4:
                    type[i] = "Electric";
                    break;
                case 5:
                    type[i] = "Grass";
                    break;
                case 6:
                    type[i] = "Ice";
                    break;
                case 7:
                    type[i] = "Fighting";
                    break;
                case 8:
                    type[i] = "Poison";
                    break;
                case 9:
                    type[i] = "Flying";
                    break;
                case 10:
                    type[i] = "Ground";
                    break;
                case 11:
                    type[i] = "Psychic";
                    break;
                case 12:
                    type[i] = "Bug";
                    break;
                case 13:
                    type[i] = "Rock";
                    break;
                case 14:
                    type[i] = "Ghost";
                    break;
                case 15:
                    type[i] = "Dragon";
                    break;
                case 16:
                    type[i] = "Dark";
                    break;
                case 17:
                    type[i] = "Steel";
                    break;
                case 18:
                    type[i] = "Fairy";
                    break;
            }
            if (!this.RP[room].doc) return this.say(con, room, text +
                'There is no document set.');
            this.say(con, room, text +
                'The current document for the RP is available at ' +
                this.RP[room].doc + '.');
        },
        rmdoc: function(arg, by, room, con) {
            if (!this.canUse('setrp', room, by) || !(room in this.RP))
                return false;
            if (!this.RP[room].doc) return this.say(con, room,
                'There isn\'t a document to remove. :/');
            this.say(con, room, 'The document has been removed.');
            delete this.RP[room].doc;
        },
        poll: function(arg, by, room, con) {
            if (!(room in this.RP) || room.charAt(0) === ',') return false;
            if (this.RP[room].pollCalled) {
                var text = '/pm ' + by + ', ';
            } else {
                var text = '';
                var self = this;
                this.RP[room].pollCalled = true;
                setTimeout(function() {
                    delete self.RP[room].pollCalled;
                }, 60 * 1000);
            }
            if (!this.RP[room].poll) return this.say(con, room, text +
                'There is no poll.');
            this.say(con, room, text + 'The current poll is available at ' +
                this.RP[room].poll + '.');
        },
        endpoll: function(arg, by, room, con) {
            if (!this.canUse('setrp', room, by)) return false;
            if (!this.RP[room].poll) return this.say(con, room,
                'There isn\'t a poll to remove.');
            this.say(con, room, '**The poll has ended!** Results at ' +
                this.RP[room].poll + '/r');
            delete this.RP[room].poll;
        },
        rmpoll: function(arg, by, room, con) {
            if (!this.canUse('setrp', room, by) || !(room in this.RP))
                return false;
            if (!this.RP[room].poll) return this.say(con, room,
                'There isn\'t a poll to remove.');
            this.say(con, room, 'The poll has been cleared.');
            delete this.RP[room].poll;
        },
        site: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Writing Room\'s Website: http://pswriting.weebly.com/'
            );
        },
        activities: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Be sure to read through our list of official activities! http://pswriting.weebly.com/activities.html'
            );
        },
        newbie: function(arg, by, room, con) {
            if (config.serverid !== 'showdown' && room !== 'writing' && !this.hasRank(by, '@#~') {
                	var text = '/msg ' + by + ', ';
                } else if (config.serverid == 'showdown' && room == 'writing' && this.hasRank(by, '@#~') {
                	var text = '';
                } else if (!config.serverid == 'showdown' && room !== 'writing' && this.hasRank(by, '@#~')) return false;
                }
            this.say(con, room, text + 'Welcome to the Writing room! In case you missed the big shiny box, please make sure to visit the room website and read the rules listed there: http://pswriting.weebly.com/rules.html'
            );
            this.say(con, room, text + 'Also, feel free to ask the staff any questions you may have. I\'m sure they\'d love to answer them!'
            );
        },
        esupport: function(arg, by, room, con) {
            if ((this.hasRank(by, '%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text + 'I love you, ' + by + '.');
        },
        drive: function(arg, by, room, con) {
            if (!this.hasRank(by, '+%@#~')) {
                var text = '/pm ' + by + ', ';
            } else {
                var text = '';
            }
            this.say(con, room, text + 'Community Drive: http://bit.do/pswritingarchives');
        },
        contests: 'events',
        contest: 'events',
        events: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return true;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/w ' + by + ', ';
            }
            this.say(con, room,
                'The current Contests and Events for the Writing Room can be found here: http://pswriting.weebly.com/contests--events.html'
            );
        },
        plug: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if (this.hasRank(by, '+%@#~')) {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text + 'Come join our Plug.dj~! http://plug.dj/ps-writing-room/');
        },
        faq: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Check out our Frequently Asked Questions page: http://bit.do/PSWritingDriveFAQ'
            );
        },
        poems: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Writing Room Poems: http://bit.do/PSwritingpoems');
        },
        stories: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Writing Room Stories: http://bit.do/PSwritingstories');
        },
        rules: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
                    -1) || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Please read our Rules page: http://pswriting.weebly.com/rules.html ^.^'
            );
        },
        voice: function(arg, by, room, con) {
            if (config.serverid !== 'showdown') return false;
            if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text +
                'Interested in becoming a voice? Check out the guideines for your chance at having a shot! http://bit.do/pswritingvoicerules or http://bit.do/pswritingvoicerap'
            );
        },
        octevent: 'oe',
        octoberevent: 'oe',
        oe: function(arg, by, room, con) {
            if (this.hasRank(by, '+%@#~')) {
                var text = '';
            } else {
                var text = '/pm ' + by + ', ';
            }
            this.say(con, room, text + 'Attention, all writers! We’ve recently begun our new Event: Halloween Contest: Where Nightmares Come To Life! This time around, contestants are tasked with writing a story or poem with a Halloween theme to it, and that takes place within the Pokemon Universe.');
            this.say(con, room, text + 'Be sure to check out our guidelines for the contest, where you’ll get a more in-depth explanation: (http://goo.gl/YblcUj ) Submissions will close on the 8th of November, so don’t forget to submit your entry! You may find our submission board here: (http://goo.gl/vpPmXX )')
        },
        announce: function(arg, by, room, con) {
            if (!this.hasRank(by, '@#~')) return false;
            arg = toId(arg);
            if (arg === 'off') {
=======
        }
        ranStats = this.shuffle(stat);
        text += 'Random stats: HP:' + ranStats[0] + ' Atk:' + ranStats[
                1] + ' Def:' + ranStats[2] + ' SpA:' + ranStats[3] +
            ' SpD:' + ranStats[4] + ' Spe:' + ranStats[5] + ' BST:' +
            bst + '';
        this.say(con, room, text);
    },
	rollpokemon: 'randpokemon',
	randpoke: 'randpokemon',
	randompoke: 'randpokemon',
	randompokemon: 'randpokemon',
	randpokemon: function(arg, by, room, con) {
		if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		var randompokes = [];
		/**	OBJECT KEY
		 *  0 = will reject roll if it has property
		 *  1 = property will not affect roll
		 *  2 = roll will be rejected if it lacks this property
		 */
		var conditions = {"uber":1,"legend":1,"nfe":1,"mega":1,"forms":1,"shiny":1};
		var types = {"normal":1,"fire":1,"water":1,"grass":1,"electric":1,"ice":1,"fighting":1,"poison":1,"ground":1,"flying":1,"psychic":1,"bug":1,"rock":1,"ghost":1,"dragon":1,"dark":1,"steel":1,"fairy":1};
		var singleType = false;
		var noDt = {"Unown":1,"Shellos":1,"Gastrodon":1,"Deerling":1,"Sawsbuck":1,"Vivillon":1,"Flabebe":1,"Floette":1,"Florges":1,"Furfrou":1};
		
		var pokequantity = 1;
		if (arg) {
			var parameters = arg.toLowerCase().split(", ");
			var hasBeenSet = false;
			for (j=0; j<parameters.length; j++) {
				if (parameters[j] == parseInt(parameters[j], 10)) {
					if (hasBeenSet) return this.say(con, room, 'Please only specify number of pokemon once');
					if (parameters[j] < 1 || parameters[j] > 6) return this.say(con, room, "Quantity of random pokemon must be between 1 and 6.");
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
					if (conditions[parameters[j]] !== 1) return this.say(con, room, 'Cannot include both \'' + parameters[j] + '\' and \'!' + parameters[j] + '\'.');
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
					if (types[parameters[j]] !== 1) return this.say(con, room, 'Cannot include both \'' + parameters[j] + '\' and \'!' + parameters[j] + '\'.');
					if (notGate) {
						types[parameters[j]] = 0;
					} else {
						types[parameters[j]] = 2;
						singleType = true;
					}
					continue;
				} else {
					return this.say(con, room, 'Parameter \'' + parameters[j] + '\' not recognized.');
				}
			}
			
			//More complex checks to prevent it getting stuck searching for combinations that don't exist
			if (conditions.forms === 2 && singleType) return this.say(con, room, 'The parameter \'forms\' must be used by itself.');
			if (conditions.uber === 2 && conditions.legend === 0 && pokequantity > 3) return this.say(con, room, 'Invalid generation conditions.');
			if (conditions.mega === 2 && conditions.uber === 2 && pokequantity > 1) return this.say(con, room, 'Invalid generation conditions.');
			if (conditions.nfe === 2 && (conditions.uber === 2 || conditions.legend === 2 || conditions.mega === 2)) return this.say(con, room, 'Invalid generation conditions.');
			
			if (singleType) {
				if (conditions.uber === 2 || conditions.legend === 2 || conditions.mega === 2) return this.say(con, room, 'Invalid generation conditions.');
				for (var set in types) {
					if (types[set] === 1) types[set] = 0;
				}
			}
		}
		if (pokequantity == 1 && room.charAt(0) !== ',' && this.hasRank(by, '+%@#~')) text = '!dt ';
		
		var attempt = -1;
		var dexNumbers = [];
		if (parameters.length > 0) {
			//create an array for all dex numbers and then shuffle it
			for (g=0; g<722; g++) {
				dexNumbers.push(g);
			}
			dexNumbers = this.shuffle(dexNumbers);
		}
		for (i=0; i<pokequantity; i++) {
			attempt++;
			if (attempt > 721) {
				console.log('randpoke fail: ' + parameters);
				text = (room.charAt(0) === ',') ? '' : '/pm ' + by + ', ';
				return this.say(con, room, text + 'could not find ' + pokequantity + ' unique Pokemon with ``' + parameters.join(', ') + '``');
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
			for (h=0; h<Pokedex[pokeNum].type.length; h++) {
				var currentType = Pokedex[pokeNum].type[h].toLowerCase();
				if (types[currentType] !== 0) break;
				skipPoke = true;
			}
			if (skipPoke) {i--; continue;}
			if (Pokedex[pokeNum].mega && conditions.mega !== 0) {
				var buffer = Pokedex[pokeNum].species; 
				var megaNum = (conditions.mega === 2 ? 0 : -1)
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
		for (k=0; k<randompokes.length; k++) {
			if (Math.floor(((conditions.shiny === 2) ? 2 : 1364) * Math.random()) !== 0) continue;
			randompokes[k] = '``shiny`` ' + randompokes[k];
		}
		this.say(con, room, text + randompokes.join(", "));
	},
	rl: 'randomlocation',
	randscene: 'randomlocation',
	randlocation: 'randomlocation',
	randomlocation: function(arg, by, room, con) {
		if (!(room in this.RP) && !room.charAt(0) === ',') return false;
		if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		var adjectives = ["crystal","floating","eternal-dusk","sunset","snowy","rainy","sunny","chaotic","peaceful","colorful","gooey","fiery","jagged","glass","vibrant","rainbow","foggy",
				"calm","demonic","polygonal","glistening","sexy","overgrown","frozen","dark","mechanical","mystic","steampunk","subterranean","polluted","bleak","dank","smooth","vast","pixelated",
				"enigmatic","illusionary","sketchy","spooky","flying","legendary","cubic","moist","oriental","fluffy","odd","fancy","strange","authentic","bustling","barren","cluttered","creepy","dangerous",
        			"distant","massive","exotic","tainted","filthy","flawless","forsaken","frigid","frosty","grand","grandiose","grotesque","harmful","harsh","hospitable","hot","jaded","meek","weird","awkward",
        			"silly","cursed","blessed","drought-stricken"];
		var locations = ["river","island","desert","forest","jungle","plains","mountains","mesa","cave","canyon","marsh","lake","plateau","tundra","volcano","valley","waterfall","atoll",
				"asteroid","grove","treetops","cavern","beach","ocean","plains","heavens","abyss","city","crag","planetoid","harbor","evergreen","cabin","hill","field","ship","glacier","estuary",
				"wasteland","sky","chamber","ruin","tomb","park","closet","terrace","air balloon","shrine","room","swamp","road","path","gateway","school","building","vault","pool","statue","pit",
                		"temple","lagoon","prison","harem","mine","catacombs"];
		var adjNum = Math.floor(adjectives.length * Math.random());
		var locNum = Math.floor(locations.length * Math.random());
		this.say(con, room, text + 'Random scenery: __' + adjectives[adjNum] + ' ' + locations[locNum] + '__.');
	},
	rm: 'randommove',
	randmove: 'randommove',
	randommove: function(arg, by, room, con) {
		if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
			var text = '';
		} else {
			var text = '/pm ' + by + ', ';
		}
		var types = {"normal":1,"fire":1,"water":1,"grass":1,"electric":1,"ice":1,"fighting":1,"poison":1,"ground":1,"flying":1,"psychic":1,"bug":1,"rock":1,"ghost":1,"dragon":1,"dark":1,"steel":1,"fairy":1};
		var classes = {"physical":1,"special":1,"status":1};
		var moveQuantity = 1;
		var hasBeenSet = false;
		var singleType = false; 
		var singleClass = false;
		
		var parameters = arg.split(', ');
		if (parameters.length > 10) return this.say(con, room, 'Please use 10 or fewer arguments.');
		for (var i=0; i<parameters.length; i++) {
			if (parameters[i] == parseInt(parameters[i], 10)) {
				if (hasBeenSet) return this.say(con, room, 'Please only specify number of pokemon once');
				if (parameters[i] < 1 || parameters[i] > 6) return this.say(con, room, "Quantity of random moves must be between 1 and 6.");
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
					return this.say(con, room, 'Cannot include both \'' + parameters[i] + '\' and \'!' + parameters[i] + '\'.');
				}
			} else if (parameter in classes) {
				if (classes[parameter] === 1 && !notGate) {
					classes[parameter] = 2;
					singleClass = true;
				} else if (classes.parameter === 1 && notGate) {
					classes[parameter] = 0;
				} else {
					return this.say(con, room, 'Cannot include both \'' + parameters[i] + '\' and \'!' + parameters[i] + '\'.');
				}
			} else {
				return this.say(con, room, 'Pleae specify a parameter or check that you are spelling it correctly.');
			}
		}
		if (singleType) {
			if (moveQuantity > 3) return this.say(con, room, 'Invalid generation conditions.');
			for (var set in types) {
				if (types[set] == 1) types[set] = 0;
			}
		}
		if (singleClass) {
			for (var set in classes) {
				if (classes[set] == 1) classes[set] = 0;
			}
		}
		
		var randomMoves = [];
		for (var j=0; j<moveQuantity; j++) {
			var roll = Math.floor(614 * Math.random()) + 1;
			if (types[Movedex[roll].type] === 0) {j--; continue;}
			if (classes[Movedex[roll].class] === 0) {j--; continue;}
			if (randomMoves.indexOf(Movedex[roll].name) > -1) {j--; continue;}
			randomMoves.push(Movedex[roll].name);
		}
		this.say(con, room, text + randomMoves.join(', '));
	},
    idea: 'randomgenre',
    randomidea: 'randomgenre',
    randidea: 'randomgenre',
    ri: 'randomgenre',
    randstyle: 'randomgenre',
    randomstyle: 'randomgenre',
    rs: 'randomgenre',
    rg: 'randomgenre',
    randgenre: 'randomgenre',
    randomgenre: function(arg, by, room, con) {
        if (!(room in this.RP) && !room.charAt(0) === ',') return false;
        if (this.canUse('randomcommands', room, by) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        var genres = ["Action","Adventure","Comedy","Crime","Fantasy","Historical","Children's Book","Horror","Mystery",
        "Philosophical","Political","Realistic","Romance","Saga","Satire","Science Fiction","Slice of Life","Thriller","Urban"];
        var genNum = Math.floor(genres.length * Math.random());
        var genNum2 = Math.floor(genres.length * Math.random());
        while(genNum2 !== genNum) { genNum2 = Math.floor(genres.length * Math.random()); }
        this.say(con, room, text + 'Random genre splice: __' + genres[genNum] + ' ' + genres[genNum2] + '__.');
    },
    //End Random Commands
    setpoll: function(arg, by, room, con) {
        if (!this.canUse('setrp', room, by) || !(room in this.RP))
            return false;
        if (!arg) return this.say(con, room,
            'Please enter a strawpoll link.');
        this.RP[room].poll = arg;
        this.say(con, room, 'The poll was set to ' + arg + '.');
    },
    sw: 'wotd',
    writer: 'wotd',
    wotd: function(arg, by, room, con) {
        if (!this.canUse('setrp', room, by)) {
            var text = '/pm ' + by + ', ';
        } else {
            var text = '';
            var self = this;
            config.wotdCalled = true;
            setTimeout(function() {
                delete config.wotdCalled;
            }, 60 * 1000);
        }
        if (!config.wotd) return this.say(con, room, text +
            'A Writer of the Day hasn\'t been set! :o');
        this.say(con, room, text + 'Today\'s Spotlighted Writer is [[' +
            config.wotd + ']].');
    },
    setdoc: function(arg, by, room, con) {
        if (!this.canUse('setrp', room, by) || !(room in this.RP))
            return false;
        if (!arg) return this.say(con, room,
            'Please enter a document link.');
        this.RP[room].doc = arg;
        this.say(con, room, 'The document was set to ' + arg + '.');
    },
    doc: function(arg, by, room, con) {
        if (!(room in this.RP) || room.charAt(0) === ',') return false;
        if (this.RP[room].docCalled) {
            var text = '/pm ' + by + ', ';
        } else {
            var text = '';
            var self = this;
            this.RP[room].docCalled = true;
            setTimeout(function() {
                delete self.RP[room].docCalled;
            }, 60 * 1000);
        }
        if (!this.RP[room].doc) return this.say(con, room, text +
            'There is no document set.');
        this.say(con, room, text +
            'The current document for the RP is available at ' +
            this.RP[room].doc + '.');
    },
    rmdoc: function(arg, by, room, con) {
        if (!this.canUse('setrp', room, by) || !(room in this.RP))
            return false;
        if (!this.RP[room].doc) return this.say(con, room,
            'There isn\'t a document to remove. :/');
        this.say(con, room, 'The document has been removed.');
        delete this.RP[room].doc;
    },
    poll: function(arg, by, room, con) {
        if (!(room in this.RP) || room.charAt(0) === ',') return false;
        if (this.RP[room].pollCalled) {
            var text = '/pm ' + by + ', ';
        } else {
            var text = '';
            var self = this;
            this.RP[room].pollCalled = true;
            setTimeout(function() {
                delete self.RP[room].pollCalled;
            }, 60 * 1000);
        }
        if (!this.RP[room].poll) return this.say(con, room, text +
            'There is no poll.');
        this.say(con, room, text + 'The current poll is available at ' +
            this.RP[room].poll + '.');
    },
    endpoll: function(arg, by, room, con) {
        if (!this.canUse('setrp', room, by)) return false;
        if (!this.RP[room].poll) return this.say(con, room,
            'There isn\'t a poll to remove.');
        this.say(con, room, '**The poll has ended!** Results at ' +
            this.RP[room].poll + '/r');
        delete this.RP[room].poll;
    },
    rmpoll: function(arg, by, room, con) {
        if (!this.canUse('setrp', room, by) || !(room in this.RP))
            return false;
        if (!this.RP[room].poll) return this.say(con, room,
            'There isn\'t a poll to remove.');
        this.say(con, room, 'The poll has been cleared.');
        delete this.RP[room].poll;
    },
    site: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Writing Room\'s Website: http://pswriting.weebly.com/'
        );
    },
    activities: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Be sure to read through our list of official activities! http://pswriting.weebly.com/activities.html'
        );
    },
    esupport: function(arg, by, room, con) {
        if ((this.hasRank(by, '%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text + 'I love you, ' + by + '.');
    },
    drive: function(arg, by, room, con) {
        if (!this.hasRank(by, '+%@#~')){
            var text = '/pm ' + by + ', ';
        } else {
            var text = '';
        }
        this.say(con, room, text + 'Community Drive: http://bit.do/pswritingarchives');
    },
    contests: 'events',
    contest: 'events',
    events: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return true;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/w ' + by + ', ';
        }
        this.say(con, room,
            'The current Contests and Events for the Writing Room can be found here: http://pswriting.weebly.com/contests--events.html'
        );
    },
    plug: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if (this.hasRank(by, '+%@#~')) {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text + 'Come join our Plug.dj~! http://plug.dj/ps-writing-room/');
    },
    faq: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Check out our Frequently Asked Questions page: http://bit.do/PSWritingDriveFAQ'
        );
    },
    poems: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Writing Room Poems: http://bit.do/PSwritingpoems');
    },
    stories: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Writing Room Stories: http://bit.do/PSwritingstories');
    },
    rules: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if ((this.hasRank(by, '+%@#~') && config.rprooms.indexOf(room) !==
            -1) || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Please read our Rules page: http://pswriting.weebly.com/rules.html ^.^'
        );
    },
    voice: function(arg, by, room, con) {
        if (config.serverid !== 'showdown') return false;
        if (this.hasRank(by, '+%@#~') || room.charAt(0) === ',') {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text +
            'Interested in becoming a voice? Check out the guideines for your chance at having a shot! http://bit.do/pswritingvoicerules or http://bit.do/pswritingvoicerap'
        );
    },
    octevent: 'oe',
    octoberevent: 'oe',
    oe: function(arg, by, room, con) {
        if (this.hasRank(by, '+%@#~')) {
            var text = '';
        } else {
            var text = '/pm ' + by + ', ';
        }
        this.say(con, room, text + 'Attention, all writers! We’ve recently begun our new Event: Halloween Contest: Where Nightmares Come To Life! This time around, contestants are tasked with writing a story or poem with a Halloween theme to it, and that takes place within the Pokemon Universe.');
        this.say(con, room, text + 'Be sure to check out our guidelines for the contest, where you’ll get a more in-depth explanation: (http://goo.gl/YblcUj ) Submissions will close on the 8th of November, so don’t forget to submit your entry! You may find our submission board here: (http://goo.gl/vpPmXX )')
   },
    announce: function(arg, by, room, con) {
	if (!this.hasRank(by, '@#~')) return false;
        arg = toId(arg);
        if (arg === 'off') {
                if (this.buzzer) clearInterval(this.buzzer);
                return this.say(con, room, 'Announcements have been disabled.');
            } else if (arg === 'on') {
                var self = this;
                this.buzzer = setInterval(function() {
                    var tips = ["Don't forget to allow people to comment on your work when it's done! Click 'Share' and set permissions accordingly.",
                        "We like to play writing games, too! Click 'Activities' in our room introduction (the fancy box you saw when you joined) to see what games are available!",
                        "Looking for feedback? Ask writers for an R/R, or a 'review for review'. It's a win-win for both parties!",
                        "Questions on the (+) voice rank? Read our Voice Guidelines at http://bit.do/pswritingvoiceguidlines for more information.",
                        "Our Halloween Contest has been launched! Be sure to check out our guidelines for the contest at http://goo.gl/YblcUj to receive a more in-depth explanation!",
                        "Would you like to host your work on our cloud drive? Ask a staff member about getting your own folder!",
                        "Be sure to keep your work's presentation up to par, or AxeBane will hunt you down! Or, you could ask one of our staff to take a look and check it for you, but that's boring."];
                    var num = Math.floor((Math.random() * tips.length));
                    self.say(con, room, "**Writing Room Tip #" + num + ":** " + tips[num]);
                }, 1800000);
            }
        },
        /**
         * Messaging related commands
         *
         */
        mail: 'message',
        msg: 'message',
        message: function(arg, by, room, con) {
            if (!this.settings.poeticlicense[toId(by)] && !this.hasRank(by, '+%@#~') || (toId(by) !== 'axebane')) {
                if (!this.canUse('message', room, by)) return this.say(con, room, '/msg ' + by + ', It seems as if you cannot use this command! Do you have a Poetic License?');
                if (room.charAt(0) === ',' && !this.hasRank(by, '+%@#~')) return this.say(con, room, 'mail cannot be used in PMs.');
            }
            var user = toId(arg.split(', ')[0]);
            if (user.length > 18) return this.say(con, room, 'That\'s not a real username! It\'s too long! >:I');
            if ((by) == '') return this.say(con, room, 'Please use the following format: ";mail user, message"');
            var message = by + ': ' + arg.substr(arg.split(', ')[0].length + 2);
            if (message.length < by.length + 3) return this.say(con, room, 'You forgot to include the message! :o');
            if (!this.messages) this.messages = {};
            if (!this.messages[user]) {
                this.messages[user] = {};
                this.messages[user].timestamp = Date.now();
            }
            if (this.messages[user]["5"]) return this.say(con, room, user + '\'s message inbox is full.');
            var msgNumber = -1;
            for (var i in this.messages[user]) {
                msgNumber++;
            }
            msgNumber = "" + msgNumber;
            this.messages[user][msgNumber] = message;
            this.writeMessages();
            this.say(con, room, (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ') + 'Message has been sent to ' + user + '.');
        },
        checkmail: 'readmessages',
        readmail: 'readmessages',
        readmessages: function(arg, by, room, con) {
            var text = (room.charAt(0) === ',' ? '' : '/pm ' + by + ', ');
            if (!this.messages[toId(by)]) return this.say(con, room, text + 'Your inbox is empty.');
            for (var msgNumber in this.messages[toId(by)]) {
                if (msgNumber === 'timestamp') continue;
                this.say(con, room, text + this.messages[toId(by)][msgNumber]);
            }
            delete this.messages[toId(by)];
            this.writeMessages();
        },
        clearmail: 'clearmessages',
        clearmessages: function(arg, by, room, con) {
            if (!this.hasRank(by, '#~')) return false;
            if (!arg) return this.say(con, room, 'Specify whose mail to clear or \'all\' to clear all mail.');
            if (!this.messages) return this.say(con, room, 'The message file is empty.');
            if (arg === 'all') {
                this.messages = {};
                this.writeMessages();
                this.say(con, room, 'All messages have been erased.');
            } else if (arg === 'time') {
                for (var user in this.messages) {
                    if (this.messages[user]["timestamp"] < (Date.now() - MESSAGES_TIME_OUT)) delete this.messages[user];
                }
                this.writeMessages();
                this.say(con, room, 'Messages older than one week have been erased.');
            } else {
                var user = toId(arg);
                if (!this.messages[user]) return this.say(con, room, user + ' does not have any pending messages.');
                delete this.messages[user];
                this.writeMessages();
                this.say(con, room, 'Messages for ' + user + ' have been erased.');
            }
        },
        countmessages: 'countmail',
        countmail: function(arg, by, room, con) {
            if (!this.hasRank(by, '#~')) return false;
            if (!this.messages) this.say(con, room, 'Messages.JSON is empty');
            var messageCount = 0;
            var oldestMessage = Date.now();
            for (var user in this.messages) {
                for (var message in this.messages[user]) {
                    if (message === 'timestamp') {
                        if (this.messages[user]['timestamp'] < oldestMessage) oldestMessage = this.messages[user]['timestamp'];
                        continue;
                    }
                    messageCount++;
                }
            }
            //convert oldestMessage to days
            var day = Math.floor((Date.now() - oldestMessage) / (24 * 60 * 60 * 1000));
            this.say(con, room, 'There are currently **' + messageCount + '** pending messages. The oldest message ' + (!day ? 'was left today.' : 'is __' + day + '__ days old.'));
        },
        pl: 'poeticlicense',
        poeticlicense: function(arg, by, room, con) {
                if (!this.hasRank(by, '@#~') || room.charAt(0) === ',') return false;
                if (!arg) return this.say(con, room, 'To whom should I grant a Poetic License?');
                var users = arg.split(', ');
                var errors = [];
                if (!this.settings.poeticlicense) this.settings.poeticlicense = {};
                for (var i = 0; i < users.length; i++) {
                        var user = toId(users[i]);
                        if (this.settings.poeticlicense[user]) {
                            errors.push(users[i]);
                            users.splice(i, 1);
                            continue;
                }
                this.settings.poeticlicense[user] = 1;
        }
        this.writeSettings();
        if (errors.length != 0) this.say(con, room, errors.join(', ') + ' already has a Poetic License');
        if (users.length != 0) this.say(con, room, '/modnote ' + users.join(', ') + ' has been given a Poetic License by ' + toId(by));
        },
        upl: 'unpoeticlicense',
        unpoeticlicense: function(arg, by, room, con) {
                if (!this.hasRank(by, '@#~') || room.charAt(0) === ',') return false;
                if (!arg) return this.say(con, room, 'Whose Poetic License should be revoked?');
                var user = toId(arg);
                if (!this.settings.poeticlicense) this.settings.poeticlicense = {};
                if (!this.settings.poeticlicense[user]) return this.say(con, room, arg + ' does not have Poetic License.');
                delete this.settings.poeticlicense[user];
                this.writeSettings();
                this.say(con, room, '/modnote ' + user + ' had their Poetic License removed by ' + toId(by));
        },
        vpl: 'viewpoeticlicense',
        viewpoeticlicense: function(arg, by, room, con) {
                if (!this.hasRank(by, '@#~') || room.charAt(0) === ',') return false;
                if (!this.settings.poeticlicense) return this.say(con, room, 'No users are poeticlicense\'d.');
                var poeticlicenseList = Object.keys(this.settings.poeticlicense);
                this.uploadToHastebin(con, room, by, "The following users possess a Poetic License:\n\n" + poeticlicenseList.join('\n'));
                return;
                }
        }
