// JavaScript source code

module.exports = {
    cmd: function (message, mybot, logger, error) {
        mybot.sendFile(message.channel, "C:/Users/User/DiscordBot/righten2.png", error)
        logger("Command: !!righten2")
    }
}