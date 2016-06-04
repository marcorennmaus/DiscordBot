// JavaScript source code

module.exports = {
    cmd: function (message, mybot, logger, messageCount) {
        mybot.sendMessage(message, "Total count of messages being tracked: " + messageCount);
        logger("Command: !!msgcount")
    }
}