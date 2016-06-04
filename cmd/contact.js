// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        logger("Command: !!contact")
        if (message.content.startsWith("!!contact ")) {
            var para = message.content.split("!!contact ")[1];
            logger("Parameter: " + para)
            mybot.sendMessage("131285184451444736", "Hi there,\n" + message.author.name + "#" + message.author.discriminator + " is messaging you: " + para)
            mybot.sendMessage(message.author.id, "Hi there, I sent a message to my owner. Message: " + para)
            return false;
        }
        mybot.sendMessage(message, "Usage:\n\n!!contact [message]")
    }
}