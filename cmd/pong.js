// JavaScript source code

module.exports = {
    cmd: function (message, mybot, logger) {
        mybot.sendMessage(message, "Ping.");
        logger("Command: !!pong")
    }
}