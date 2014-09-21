Writing Room Bot
====================

A chat bot for [Pokémon Showdown][1]. This bot has a number of commands, some helpful and some less so, as well as the capability to mod. It only reacts to basic offences such as flooding/caps/stretching.

  [1]: http://www.pokemonshowdown.com/

Commands
========
Below is a list of commands for the bot. Note that this can occasionally become out of date as new commands are created or removed. () = Text not actually directly related to the actual command's use. ' ' = User input. You don't actually need to type the ' ', just what's inside of them. Commas in a command's name indicate alternate names for the commands, which do exactly the same thing.

Room Owners and up
------------------
*settings, set*: Toggles which commands can be used or not.

*js*: Manipulates basic JavaScript functions.

*do 'text'*: Forces the bot to type whatever text is entered after *do*.

*reload*: Reloads the bot's commands, adding any updates without having to reboot it entirely.

*goodnight*: Forces the bot to leave all rooms, going to 'sleep'.

Moderators and up
-----------------

A bunch of autoban/unban commands. Pretty much self-explanatory. They ban users on sight. This command isn't active, but is present.

*newbie*: Gives a newcomer to the room a nice friendly greeting~

Voices and up
-------------
*about*: Explains the bot in a nutshell and links here.

*help, guide*: Links to this page.

*idea, randomidea, randidea, ri, randstyle, randomstyle, rs, rg, randgenre, randomgenre*: Randomly generates either a single genre or a splicing of two genres. This is your best friend for when you're stuck on things to write~! (Voices and up)

*rt, gentype, randtype*: The same as above, except it randomly generates Pokémon types instead of genres.

*rs, randstats, randomstats 'optional BST'*: Randomly generates a stat build using the Pokémon format. If you didn't specify a BST to use, it'll pick a random one.

*setpoll '[Strawpoll][4] link'*: This command will set the specified [Strawpoll][4] poll as the current poll in the
*setpoll* so that *poll* can list the poll that's been set in the *setpoll*. Geez! That's a lot of polls!

*endpoll*: Ends the poll that was listed in the *setpoll*, preventing it from being accessed by the *poll* command. It'll also link back to the respective results page for that poll. This is why the *poll* needs to be a [Strawpoll][4] link.

*rmpoll*: Removes the poll from the *poll* command without actually 'ending' it, sparing people the confusion and the bold abuse. .w.'

*setwotd 'writer's name'*: Sets the specified writer as the "Writer of the Day", which can be viewed at any time using the *wotd* command.

*wotdremove, wotdclear, removewotd, clearwotd*: Erases the Writer of the Day from the face of the earth! :o

*voice*: Explains to the room how they can become a voice. 

Commands any user can use~!
---------------------------

*seen 'user'*: The bot returns the last time that user was seen online (while the bot was online).

*poll*: Lists the poll that was set in the *setpoll*. . . Let's not start that again.

*wotd*: PMs the user, assuming they're not ranked, the Writer of the Day.

*site*: PMs the user, assuming they're not ranked, the Writing Room's website.

*ping 'optional reason'*: Sends the creater of the bot a Private Message, assuming they're online, to get their ass into the room.

*esupport*: For when you need a little love. ^.^

*drive*: Gives you a nice friendly link to the Writing Room's Google Drive.

*contests, events*: Links the user to the page containing updates on any contests and/or events going on in the room at the moment.

*plug*: Links the user to the Writing Room's Official Plug.dj, a music sharing website. 

*faq*: Links the user to the Writing Room's FAQ page.

*rules*: A nice alternative to the /rules command. Useful if you want to tell multiple people at the same time and you're too much of a rebel to use the !rules command.

*randpoke 'optional number between one and six'*: Generates a random Pokemon from the Pokedex. 

Installation
============

**This is not recommended for beginners!**
Why? Because I'm too lazy to explain everything in detail.

Pokémon Showdown Bot requires [node.js][2] to run.
This bot has not been tested on every `node.js` version possible, but has the same version requirements as [Pokémon Showdown][3]: either v0.6.3 through v0.8.22, or v0.10.2 and up.
Install `node.js` if you don't have it yet, try the last stable version.

Next up is cloning this bot. This can be done in two ways: cloning it via `git` or downloading as ZIP.
Downloading it as ZIP is the easy and lazy way, but is a lot less handy to update than cloning this repository.

To install dependencies, run:

    npm install

Copy `config-example.js` to `config.js` and edit the needed variables.
To change the commands that the bot responds to, edit `commands.js`.

Now, to start the bot, use:

    node main.js

Some information will be shown, and will automatically join the room(s) you specified if no error occurs.

  [2]: http://nodejs.org/
  [3]: https://github.com/Zarel/Pokemon-Showdown
  [4]: http://www.strawpoll.me/

Development
===========

Everyone is more than welcome to contribute to the bot.
However, please refrain from adding more example commands.

Credits:
 - TalkTakesTime (Original Bot and a bit of troubleshooting)
 - Quinella (Original Bot)
 - Morfent (Modified Original Bot)
 - AxeBane (Development)
 - Solarisfox (Development)

License
=======

Pokémon Showdown Bot is distributed under the terms of the [MIT License][5].

  [5]: https://github.com/Quinella/Pokemon-Showdown-Bot/blob/master/LICENSE
