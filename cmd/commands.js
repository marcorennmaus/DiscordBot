// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        mybot.sendMessage(message, "```Following Commands are available:\n!!b1nzy       Cat.\n!!changelog   Displays the latest changelog.\n!!commands    Displays all Commands.\n!!comparedata Compares data from the savefile and the running bot.\n!!contact     Contacts the developer via PM.\n!!dice        Gives random number between 1 and 6.\n!!givemesucc  s u c c   s u c c\n!!info        Gives Info about the Bot.\n!!msgcount    Gives count of all messages.\n!!ping        Pong.\n!!pong        Ping.\n!!playing     Changes the playing status. (Only useable for the Bot-Owner)\n!!readdata    Reads data from the savefile.\n!!righten     XEN feels cucked.\n!!righten2    XEN is gay.\n!!savedata    Saves data to the save file.\n!!servers     Displays all the Servers where the Bot participates in.\n!!stats       Shows stats about the bot.!!users       Displays some stats about the usercount.\n\nRemoved commands:\n!!fusion      XEN - Fusion (Removed in 1.2.2)\n!!outages     Displays recent outages. (Removed in 1.2.2)```")
        logger("Command: !!commands")
    }
}