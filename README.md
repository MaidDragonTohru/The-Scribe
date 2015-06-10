Writing Room Bot
====================

A chat bot for [Pokémon Showdown][1]. This bot has a number of commands, some helpful and some less so, as well as the capability to mod. It only reacts to basic offences such as flooding/caps/stretching.

  [1]: http://www.pokemonshowdown.com/

Commands
========
Below is a list of commands for the bot. Note that this can occasionally become out of date as new commands are created or removed. Text within brackets (or paranthesies, if you're one of "those" people) is text not actually needed to be literally written, but more something that shows you what you should generally write in the space. Semicolons in a command's name indicate alternate names or aliases for the command, which do exactly the same thing as the other names and do not need to be added to the command for it to work; please don't actually type a semicolon in the command, as that is what the Command Character is.

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

`announce on/off`: Used to toggle the state of the announcements for the room. Useful. ^.^

Drivers and Above
-----------------

Drivers can use any of the voice commands, however they will be broardcasted to the whole chat, as opposed to the bot PMing the user.

Voices and Above
----------------
`about`: Explains the bot in a nutshell and links here.

`help; guide`: Links to this page.

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

`bio set <autobiography>`: This command sets the biography of the person that used the command to whatever they typed. This can then be accessed by the `bio` command by any user.

Commands any user can use~!
---------------------------

`bio <optional user>`: This command returns the autobiography set by an authed user. If no user is specified, it will return the autobiography of the user that tried the command, if they had one.

`seen <user>`: The bot returns the last time that user was seen online by the bot.

`word; wotd`: PMs the user, assuming they're not ranked, the Word of the Day

`site`: PMs the user, assuming they're not ranked, the Writing Room's website.

`esupport`: For when you need a little love. ^.^

`drive`: Gives you a nice friendly link to the Writing Room's Google Drive.

`contests; events`: Links the user to the page containing updates on any contests and/or events going on in the room at the moment.

`plug`: Links the user to the Writing Room's Official Plug.dj, a music sharing website. 

`faq`: Links the user to the Writing Room's FAQ page.

`rules`: A nice alternative to the /rules command. Useful if you want to tell multiple people at the same time and you're too much of a rebel to use the !rules command.

`randpoke <optional number between one and six>`: Generates a random Pokemon from the Pokedex. If the number is left blank, then it will simply generate one.

`newbie`: Gives a newcomer to the room a nice friendly greeting~

`time`: Returns the current time (for the bot) to the room.

Installation
============

**This is not recommended for beginners!**
Why? Because I'm too lazy to explain everything in detail.

Pokémon Showdown Writing Bot requires [node.js][2] to run.
This bot has not been tested on every `node.js` version possible, but has the same version requirements as [Pokémon Showdown][3]: either v0.6.3 through v0.8.22, or v0.10.2 and up.
Install `node.js` if you don't have it yet, try the last stable version.

Next up is cloning this bot. This can be done in two ways: cloning it via `git` or downloading as ZIP.
Downloading it as ZIP is the easy and lazy way, but is a lot less handy to update than cloning this repository.

To install dependencies, run:

    npm install

Make sure you run the above command from within the folder that you would like to run your bot in. Repeat this step for any extra bots you would like to use.
Copy `config-example.js` and rename it to `config.js`, then edit the needed variables.
To change the commands that the bot responds to, edit `commands.js`.

Now, to start the bot, use:

    node main.js
    
    or run the file named `run.bat` if you are on a Windows computer. This will not work on Macintosh.

Some information will be shown, and will automatically join the room(s) you specified if no error occurs.

  [2]: http://nodejs.org/
  [3]: https://github.com/Zarel/Pokemon-Showdown
  [6]: http://en.wikipedia.org/wiki/Regular_expression

Development
===========

Everyone is more than welcome to contribute to the bot.
However, please refrain from adding more example commands.

Credits:
 - TalkTakesTime (Original Bot and a bit of troubleshooting)
 - Quinella (Original Bot)
 - Morfent (Modified Original Bot)
 - AxeBane (Owner)
 - sirDonovan (Our wonderful VPN Host~ <3) Love ya, Dono.
 - Solarisfox (Development)

License
=======

Pokémon Showdown Bot is distributed under the terms of the [MIT License][5].

  [5]: https://github.com/Quinella/Pokemon-Showdown-Bot/blob/master/LICENSE
