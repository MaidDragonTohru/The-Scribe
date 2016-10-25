Writing Room Bot
====================

A chat bot for [Pokémon Showdown][1]. This bot has a number of commands, some helpful and some less so, as well as the capability to moderate the chatroom; It only reacts to basic offences such as flooding, caps, and stretching.

  [1]: http://www.pokemonshowdown.com/

Commands
========
Below is a list of commands for the bot. Note that this can occasionally become out of date as new commands are created or removed. Text within angled brackets `< >` are things that need to be written in by the user. 
Semicolons `;` in a command's name indicate alternate names or aliases for the command, which do exactly the same thing as the other names and do not need to be added to the command for it to work; please don't actually type a semicolon in the command, as that is what the Command Character is.

Room Owners and Above
---------------------
`settings; set`: Toggles which commands can be used or not.

`js`: Manipulates basic JavaScript functions.

`do <text>`: Forces the bot to type whatever text is entered after `do`.

`reload`: Reloads the bot's commands, adding any updates without having to reboot it entirely.

`clearmail <optional user> (or) all`: Used to delete all stored messages from either a certain user or everybody's respectively.

Moderators and Above
--------------------

`blacklist; ban; ab`: Used to add a user to the bot's autoban list.

`unblacklist; unban; unab`: Used to remove a user from the bot's autoban list.

`rab regexab; regexautoban`: Used to ban any user with a particular string of letters in their name; use [Regular Expressions.][6]

`unrab; unregexab; regexautoban`: Used to remove the string set with the `rab` command.

`vab; viewbans; viewautobans; viewblacklist`: Used to get the bot to Private Message you with a list of every autobanned user.

`banphrase; banword`: Used to set a particular word as "banned", meaning that the bot will mute on the sight of it.

`unbanphrase; unbanword`: Used to undo the above.

`viewbannedphrases; viewbannedwords ;vab`: Used to get the bot to Private Message the sender a list of every banned phrase or word.

`announce <on/off>`: Used to toggle the state of the announcements for the room. Useful. ^.^

Drivers and Above
-----------------

Drivers can use any of the voice commands, however they will be broardcasted to the whole chat, as opposed to the bot PMing the user.

Voices and Above
----------------
`about`: Explains the bot in a nutshell and links here.

`help; guide`: Links to this page.

`git`: Links to this repository.

`idea`: Merges the `randscene`, `randgenre`, and `randchar` commands.

`rt; gentype; randtype`: Randomly generates a Pokémon type combination.

`rs; randstats; randomstats <optional BST>`: Randomly generates a stat build using the Pokémon format. If you didn't specify a BST to use, it'll pick a random one.

`randgenre; randstyle`: Randomly generates a genre or genre splice to base your story on.

`rl; randscene; randlocation; randomlocation`: Generates a random location description, using one adjective and one location type.

`rm; randmove; randommove <"physical"> (or) <"special"> (or) <"status"> (or/and) <Pokémon type>`: Generates a random move based on the parameters used. For instance: ";rm grass, physical" can return the move "Needle Arm".

`randchar; genchar; randomcharacter`: Randomly generates a character build, including flaws and 'buffs'.

`voice`: Explains to the room how they can become a voice. 

`mail <user>, <message>`: This command sends a "mail" to another user on PS. They will see the message once they join the room or use the `readmail` command.

`checkmail; readmail; readmessages`: This command, as stated above, is used to view all the unread messages you have in your Inbox. The messages are deleted afterwards, so don't lose them.

`biography; autobiography; bio set <autobiography>`: This command sets the biography of the person that used the command to whatever they typed. This can then be accessed by the `bio` command by any user.

Commands any user can use!
---------------------------

`bio <optional user>`: This command returns the autobiography set by an authed user. If no user is specified, it will return the autobiography of the user that tried the command, if they had one.

`seen <user>`: The bot returns the last time that user was seen online by the bot.

`word; wotd`: PMs the user, assuming they're not ranked, the Word of the Day

`site`: PMs the user, assuming they're not ranked, the Writing Room's website.

`esupport`: For when you need a little love. ^.^

`drive`: Gives you a nice friendly link to the Writing Room's Google Drive.

`contests; events`: Links the user to the page containing updates on any contests and/or events going on in the room at the moment.

`faq`: Links the user to the Writing Room's FAQ page.

`rules`: A nice alternative to the /rules command. Useful if you want to tell multiple people at the same time and you're too much of a rebel to use the !rules command.

`randpoke <optional number between one and six>`: Generates a random Pokemon from the Pokedex. If the number is left blank, then it will simply generate one.

`newbie`: Gives a newcomer to the room a nice friendly greeting~

`time`: Returns the current time (for the bot) to the room.

`randRP <person 1>, <person 2>`: Generates a random interaction between character X and character Y.

Scribe Shop Commands
====================

Commands only an RO can use
---------------------------

`inspire; masses; checkmasses`: Used to check or redeem a user's copy of Inspire The Masses

Commands only staff can use
---------------------------

`addquills; pay; addfunds <user>, <amount>`: Adds the designated amount of money to the user's balance.

`takequills; take; takefunds <user>, <amount>`: The opposite of the above.

`addsponsor <user>`: Adds the specified user to the list of sponsors.

`removesponsor <user>`: Removes the specified user from the list of sponsors.

Commands only sponsors can use
---------------------------

`sponsor <user>, <protagonist/antagonist>`: Used to sponsor a user that has bought an applicable Scribe Shop item.

`submit <username of recipient>, <document URL>, <antagonist/protagonist>`: Used for a sponsor to hand in the document that they're making for their sponsorship.

Commands any user can use!
---------------------------

`bal; balance <optional user>``: Returns current balance for a particular user. Or yourself, if nobody is specified.

`ss; scribeshop; shop`: Automatically generates the 'UI' for the shop, uploads it to Hastebin, and pastes it into the chat. (does not work if Hastebin is down)

`buy <item>, <optional quantity; defaults to 1>`: Used in conjunction with `shop`.

`cookie; cookies`: Displays the amount of cookies you have bought.

`editgreeting <public/private>, (new greeting)`: Used to edit what your public or private greeting says.

`spotlight`: Used to redeem your copy of Take the Stage. Activates modchat for 1-2 minutes.

`sponsors`: Returns a list of all the room's sponsors through Hastebin. (doesn't work if Hastebin is down)

`enablegreeting; disablegreeting <public/private>` Enables or disables the specified greeting, depending on its current state, and if the user owns the greetings at all.

Database Commands
=================

Myths & Magic has its own built-in database system in The Scribe. Below are a list of all commands for the database.
Accepted aliases for the `database` command: `db` and `myth`.

Drivers and Above
-----------------

`database delete, <Entry ID>`: Requests to purge the entry from the database.

`database confirm, <'add'/'delete'>`: Confirms an addition or deletion from the database.

Voices and Above
-----------------

`database add, <Name>, <Pantheon>, <Description>`: Requests an entry to be added to the database.

`database addimage, <Entry ID>, <URL>`: Sets the thumbnail for the entry to whatever URL you specify. Recommended dimensions are 84x84.

Commands any user can use!
---------------------------

`database search, <Entry Name>`: Returns a list of the IDs for every entry that matches the name you ask for.

`database view, <Entry ID>`: Returns the information on the entry your requested! Autocorrects to `database search` if you don't put an ID in.

`database list`: Returns a full list of every single entry in the database, sorted by Pantheon.

`database help`: Probably the reason why you're reading this in the first place.

Installation
============

Pokémon Showdown Writing Bot requires [node.js][2] to run.
This bot has not been tested on every `node.js` version possible, but has the same version requirements as [Pokémon Showdown][3]: either v0.6.3 through v0.8.22, or v0.10.2 and up.
Install `node.js` if you don't have it yet, try the last stable version.

Next up is cloning this bot. This can be done in two ways: cloning it via `git`, or downloading as ZIP.
Downloading it as ZIP is the easy and lazy way, but is a lot less handy to update than cloning this repository in the long run.

To install dependencies, run:

    npm install

Make sure you run the above command from within the folder that you would like to run your bot in. Repeat this step for any extra bots you would like to use.
Copy `config-example.js` and rename it to `config.js`, then edit the needed variables.
To change the commands that the bot responds to, edit `commands.js`.

Now, to start the bot, use:

    node main.js
  
  ...Or, alternatively, run the file named `run.bat` if you are on a Windows computer. This will only work on operating systems that can run `.bat` files. For example, this will not work on a Macintosh system. *Please note that run.bat will not work if you do not have NPM installed. Run* `npm install` *first!*
  
Some information will be shown, and will automatically join the room(s) you specified if no error occurs.

  [2]: http://nodejs.org/
  [3]: https://github.com/Zarel/Pokemon-Showdown
  [6]: http://en.wikipedia.org/wiki/Regular_expression

If any of your commands rely on information normally sent to the Pokémon Showdown Client (i.e. functions that execute based on PM that aren't directly related to normal commands), you will need to make changes to the message method in `parser.js` under the appropriate case.

Development
===========

Everyone is more than welcome to contribute to the bot.

Credits:
 - TalkTakesTime (Original Bot and a bit of troubleshooting)
 - Quinella (Original Bot)
 - Morfent (Modified Original Bot)
 - AxeBane (Creator & Owner)
 - sirDonovan (Development & VPN Hosting)
 - Solarisfox (Development)

License
=======

Pokémon Showdown Bot is distributed under the terms of the [MIT License][5].

  [5]: https://github.com/Quinella/Pokemon-Showdown-Bot/blob/master/LICENSE
