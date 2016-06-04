// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        mybot.sendMessage(message, "Here is the OAuth-Link:\n\nhttps://discordapp.com/oauth2/authorize?&client_id=184376055400759296&scope=bot\nSadly the bot isn't 24/7 online (yet).")
        logger("Command: !!joinlink")
    }
}