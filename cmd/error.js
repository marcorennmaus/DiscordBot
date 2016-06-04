// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        logger("Something fucked up.")
        logger("Error: " + err)
        if (err === null) {
            return false;
        }
        mybot.sendMessage(b1nzychannel, "I'm sorry, but there was a error while executing this command.\n" + err)
    }
}