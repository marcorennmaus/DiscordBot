// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger, fs, db, messageCount) {
        logger("Command: !!comparedata")
        var array = fs.readFileSync(db).toString().split("\n");
        for (i in array) { console.log(array[i]); }
        messageCountComp = parseInt(array[0], 10)
        mybot.sendMessage(message, "Compare Data:\nSavefile | Current\n" + messageCountComp + " | " + messageCount)
    }
}