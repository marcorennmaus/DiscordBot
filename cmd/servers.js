// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        var serverNames = mybot.servers.map(server => { return server.name });
        names = "Servers where the Bot participates in:\n"
        for (var i = 0; i < mybot.servers.length; i++) {
            names = names + i + ") " + serverNames[i] + "\n"
            logger(names)
        }
        mybot.sendMessage(message, names)
        logger(names)
    }
}