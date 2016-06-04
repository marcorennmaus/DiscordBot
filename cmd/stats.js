// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        mybot.sendMessage(message, "The bot is currently in " + mybot.servers.length + " servers with " + mybot.users.length + " users.")
        var serverNames = mybot.servers.map(server => { return server.name });
        logger("Command: !!stats")
    }
}