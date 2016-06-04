// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger, error) {
        b1nzychannel = message.channel.id
        mybot.sendFile(message.channel, "C:/Users/User/DiscordBot/b1nzy.jpg", "b1nzy.jpg", "" , error)
        logger("Command: !!binzy")
    }
}