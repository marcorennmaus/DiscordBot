//Directory where the bot is placed in, change if needed
var Discord = require("discord.js");
var f = "./Logs/log.txt",
    fs = require('fs'),
    db = "./Data.txt";
var cmd = require("./cmd/cmd.js")
var mybot = new Discord.Client();
var messageCount = 0
var usrtrk = "./Users.csv"

var logger = function (input) {
    console.log(input)
    fs.appendFile(f, input + "\n", function (err) { if (err) console.error(err); });
}

var usertrack = function (input) {
    console.log("Usertrack: " + input)
    fs.appendFile(usrtrk, input + "\n", function (err) { if (err) console.error(err); });
}

var dbread = function (message) {
    logger("Command: !!readdata")
    var array = fs.readFileSync(db).toString().split("\n");
    for (i in array) { console.log(array[i]); }
    messageCount = parseInt(array[0], 10);
    logger("Attempted to read from database.")
    mybot.sendMessage(message, "Following Data has been read from the Database:\nmessageCount = " + messageCount)
}

logger("Discord Bot booting up...")

var error = function (err) {
    logger("Something fucked up.")
    logger("Error: " + err)
    if (err === null)
    {
        return false;
    }
    mybot.sendMessage(b1nzychannel, "I'm sorry, but there was a error while executing this command.\n" + err)
}

logger("uh oh")

setInterval(() => {
        var date = new Date();
        var d = [
           date.getFullYear(),
           date.getMonth() + 1,
           date.getDate(),
           date.getHours(),
           date.getMinutes(),
           date.getSeconds(),
        ];
        if (d[2] < 10) { d[2] = "0" + d[2] }
        if (d[1] < 10) { d[1] = "0" + d[1] }
        if (d[3] < 10) { d[3] = "0" + d[3] }
        if (d[4] < 10) { d[4] = "0" + d[4] }
        if (d[5] < 10) { d[5] = "0" + d[5] }

        var usercount = mybot.users.filter(o => { return o.status !== "offline" });
       
        usertrack(d[2] + "." + d[1] + "." + d[0] + " " + d[3] + ":" + d[4] + ":" + d[5] + ";" + usercount.length)
    }, 2000)

mybot.on("message", function (message) {
    var date = new Date();
    var d = [
       date.getFullYear(),
       date.getMonth() + 1,
       date.getDate(),
       date.getHours(),
       date.getMinutes(),
       date.getSeconds(),
    ];
    if (d[2] < 10) { d[2] = "0" + d[2] }
    if (d[1] < 10) { d[1] = "0" + d[1] }
    if (d[3] < 10) { d[3] = "0" + d[3] }
    if (d[4] < 10) { d[4] = "0" + d[4] }
    if (d[5] < 10) { d[5] = "0" + d[5] }

    messageCount = messageCount + 1
    logger("[" + d[2] + "." + d[1] + "." + d[0] + " " + d[3] + ":" + d[4] + ":" + d[5] + "]" /*+ "[" + messageCount + "]" */ + "[" + message.channel.name + "@" + message.channel.server + "]" + "<" + message.author.name + "#" + message.author.discriminator + "> " + message.cleanContent)
    if (message.channel.id === "110373943822540800" && message.author.id != "131285184451444736") { return false }
    cmd.cmd(message, mybot, logger, messageCount, fs, db, error)
});

mybot.on("disconnected", function (reconnect) {
    logger("It appears that the Connection to Discord died. Reconnecting...")
    mybot.loginWithToken("token");
    logger("Attempted Login with Token")
}
)

dbread()

mybot.loginWithToken("token");
logger("Logged on.")