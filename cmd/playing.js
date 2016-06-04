// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger, error) {
        if (message.author.id != "131285184451444736") {
            mybot.sendMessage(message, "How about no?")
            return false;
        }
        logger("Command: !!playing")
        if (message.content.startsWith("!!playing ")) {
            var para = message.content.split("!!playing ")[1];
            logger("Parameter: " + para)
            mybot.setPlayingGame(para, error)
        }
    }
}