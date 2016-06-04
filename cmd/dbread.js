// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger, fs, db, messageCount) {
        logger("Command: !!readdata")
        var array = fs.readFileSync(db).toString().split("\n");
        for (i in array) { console.log(array[i]); }
        messageCount = parseInt(array[0], 10);
        logger("Attempted to read from database.")
        mybot.sendMessage(message, "Following Data has been read from the Database:\nmessageCount = " + messageCount)
    }
}