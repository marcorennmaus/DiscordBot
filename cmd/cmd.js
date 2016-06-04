// JavaScript source code

var ping = require("C:/Users/User/DiscordBot/cmd/ping.js")
var pong = require("C:/Users/User/DiscordBot/cmd/pong.js")
var righten = require("C:/Users/User/DiscordBot/cmd/righten.js")
var msgcount = require("C:/Users/User/DiscordBot/cmd/msgcount.js")
var info = require("C:/Users/User/DiscordBot/cmd/info.js")
var commands = require("C:/Users/User/DiscordBot/cmd/commands.js")
var givemesucc = require("C:/Users/User/DiscordBot/cmd/givemesucc.js")
var changelog = require("C:/Users/User/DiscordBot/cmd/changelog.js")
var dice = require("C:/Users/User/DiscordBot/cmd/dice.js")
var b1nzy = require("C:/Users/User/DiscordBot/cmd/b1nzy.js")
var savedata = require("C:/Users/User/DiscordBot/cmd/dbwrite.js")
var readdata = require("C:/Users/User/DiscordBot/cmd/dbread.js")
var comparedata = require("C:/Users/User/DiscordBot/cmd/dbcompare.js")
var joinlink = require("C:/Users/User/DiscordBot/cmd/joinlink.js")
var test = require("C:/Users/User/DiscordBot/cmd/test.js")
var playing = require("C:/Users/User/DiscordBot/cmd/playing.js")
var contact = require("C:/Users/User/DiscordBot/cmd/contact.js")
var stats = require("C:/Users/User/DiscordBot/cmd/stats.js")
var servers = require("C:/Users/User/DiscordBot/cmd/servers.js")
var error = require("C:/Users/User/DiscordBot/cmd/error.js")

module.exports = {
    cmd: function (message, mybot, logger, messageCount, fs, db, error) {
        if (message.content === "!!ping") { ping.cmd(message, mybot, logger) }
        else if (message.content === "!!pong") { pong.cmd(message, mybot, logger) }
        /*else if (message.content === "!!fusion") { fusion.cmd(message, mybot, logger) }*/
        else if (message.content === "!!righten") { righten.cmd(message, mybot, logger, error) }
        else if (message.content === "!!msgcount") { msgcount.cmd(message, mybot, logger, messageCount) }
        else if (message.content === "!!info") { info.cmd(message, mybot, logger) }
        else if (message.content === "!!commands") { commands.cmd(message, mybot, logger) }
        else if (message.content === "!!givemesucc") { givemesucc.cmd(message, mybot, logger) }
        else if (message.content.startsWith("!!changelog")) { changelog.cmd(message, mybot, logger) }
        else if (message.content === "!!dice") { dice.cmd(message, mybot, logger) }
        /*else if (message.content === "!!outages") { outages.cmd(message, mybot, logger) }*/
        else if (message.content === "!!b1nzy") { b1nzy.cmd(message, mybot, logger, error) }
        else if (message.content === "!!savedata") { savedata.cmd(message, mybot, logger, fs, db, messageCount) }
        else if (message.content === "!!readdata") { readdata.cmd(message, mybot, logger, fs, db, messageCount) }
        else if (message.content === "!!comparedata") { comparedata.cmd(message, mybot, logger, fs, db, messageCount) }
        else if (message.content === "!!joinlink") { joinlink.cmd(message, mybot, logger) }
        else if (message.content.startsWith("!!test ")) { test.cmd(message, mybot, logger) }
        else if (message.content.startsWith("!!playing ")) { playing.cmd(message, mybot, logger, error) }
        else if (message.content.startsWith("!!contact")) { contact.cmd(message, mybot, logger) }
        else if (message.content === "!!stats") { stats.cmd(message, mybot, logger) }
        else if (message.content === "!!servers") { servers.cmd(message, mybot, logger) }
    },
}
