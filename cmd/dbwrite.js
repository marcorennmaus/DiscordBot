// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger, fs, db, messageCount) {
        logger("Command: !!savedata")
        fs.writeFile(db, messageCount)
        mybot.sendMessage(message, "Following Data has been written to the Database:\nmessageCount = " + messageCount)
        logger("Attempted to write to database.")
    }
}