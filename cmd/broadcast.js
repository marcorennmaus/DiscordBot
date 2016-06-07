// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        if (message.content.startsWith("!!broadcast")) {
            if (message.author.id != "131285184451444736") {
                mybot.sendMessage(message, "This command is only available for the bot owner.")
                return false;
            }
            //Temporary thing, fix soon pls
            var para1 = message.content.split(".")[1];
            var para2 = message.content.split(".")[2];
            var serverIDs = mybot.servers.map(server => { return server.id });
            mybot.sendMessage(serverIDs[para1], para2)
            logger("Command: !!broadcast")
            logger("Parameter: " + para1 + ";" + para2)
        }
    }
}