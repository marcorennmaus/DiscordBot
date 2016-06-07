// JavaScript source code

var ping = require("../cmd/ping.js")
var pong = require("../cmd/pong.js")
var righten = require("../cmd/righten.js")
var msgcount = require("../cmd/msgcount.js")
var info = require("../cmd/info.js")
var commands = require("../cmd/commands.js")
var givemesucc = require("../cmd/givemesucc.js")
var changelog = require("../cmd/changelog.js")
var dice = require("../cmd/dice.js")
var b1nzy = require("../cmd/b1nzy.js")
var savedata = require("../cmd/dbwrite.js")
var readdata = require("../cmd/dbread.js")
var comparedata = require("../cmd/dbcompare.js")
var joinlink = require("../cmd/joinlink.js")
var test = require("../cmd/test.js")
var playing = require("../cmd/playing.js")
var contact = require("../cmd/contact.js")
var stats = require("../cmd/stats.js")
var servers = require("../cmd/servers.js")
var error = require("../cmd/error.js")
var righten2 = require("../cmd/righten2.js")
var users = require("../cmd/users.js")
var broadcast = require("../cmd/broadcast.js")


module.exports = {
    cmd: function (message, mybot, logger, messageCount, fs, db, error) {
        if (message.content === "!!ping") { ping.cmd(message, mybot, logger) }
        else if (message.content === "!!pong") { pong.cmd(message, mybot, logger) }
        else if (message.content === "!!righten") { righten.cmd(message, mybot, logger, error) }
        else if (message.content === "!!msgcount") { msgcount.cmd(message, mybot, logger, messageCount) }
        else if (message.content === "!!info") { info.cmd(message, mybot, logger) }
        else if (message.content === "!!commands") { commands.cmd(message, mybot, logger) }
        else if (message.content === "!!givemesucc") { givemesucc.cmd(message, mybot, logger) }
        else if (message.content.startsWith("!!changelog")) { changelog.cmd(message, mybot, logger) }
        else if (message.content === "!!dice") { dice.cmd(message, mybot, logger) }
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
        else if (message.content === "!!righten2") { righten2.cmd(message, mybot, logger, error) }
        else if (message.content === "!!users") { users.cmd(message, mybot, logger) }
        else if (message.content.startsWith("!!broadcast.")) { broadcast.cmd(message, mybot, logger) }
    },
}
