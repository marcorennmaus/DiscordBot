// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        logger("Command: !!changelog")
        if (message.content.startsWith("!!changelog")) {
            var parameter = message.content.split("!!changelog ")[1];
            logger("Parameter: " + parameter)
            if (parameter === "1") { mybot.sendMessage(message, "M_R Bot Changelog [Page 1]\n\nVersion 1.0.3.2:\n - Bugfix: Bot dies for no reason after inactivity\n\nVersion 1.0.3.1:\n - Modified !!info-Output\n\nVersion 1.0.3:\n + Added !!dice\n\nVersion 1.0.2:\n +Added message logging to a file\n\nVersion 1.0.1:\n+ Added !!commands\n+ Added !!info\n+ Added !!givemesucc\n+ Added !!changelog\n+ Added some logging to the Console\n\nVersion 1.0.0:\n- First Release") }
            else if (parameter === "2") { mybot.sendMessage(message, "M_R Bot Changelog [Page 2]\n\nVersion 1.2.1:\n + Added !!contact\n\nVersion 1.2:\n + Data can now be saved with !!savedata\n + Data can be read from the savefile with !!readdata\n + Data from Savefile will be read on startup.\n - Changelog now being split in pages.\n\nVersion 1.1.5:\n - Redesigned logging of events\n - Bugfix: Users were able to change playing status.\n\nVersion 1.1.4:\n + Added !!playing (Only useable for the Owner)\n\nVersion 1.1.3.1:\n - !!righten will now send the file itself.\n\nVersion 1.1.3:\n - If !!b1nzy fails, it will now respond with a error.\n - Restricted Bot Usage in #general on the Discord Bots-Server\n\nVersion 1.1.2:\n + Added !!b1nzy\n\nVersion 1.1.1:\n + Added !!outages\n\nVersion 1.1.0.1:\n - Restricted Bot Usage in #general on the MonsterLyrics server.\n\nVersion 1.1:\n + Rewrote Bot, Filesize significantly decreased.") }
            else if (parameter === "3") { mybot.sendMessage(message, "M_R Bot Changelog [Page 3]\n\nVersion 1.3:\n + Internal changes\n\nVersion 1.2.2:\n + Added !!stats\n + Added !!servers\n - Removed !!fusion\n - Removed !!outages\n\nVersion 1.2.1:\n + Added !!contact\n\nVersion 1.2:\n + Data can now be saved with !!savedata\n + Data can be read from the savefile with !!readdata\n + Data from Savefile will be read on startup.\n - Changelog now being split in pages.\n\n") }
            else { mybot.sendMessage(message, "Usage:\n\n!!changelog [Page]") }

        }
    }
}