// JavaScript source code

module.exports = {
    cmd: function (message, mybot, logger) {
        mybot.sendMessage(message, "Pong.");
        logger("Command: !!ping")
    },
}
