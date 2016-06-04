var Discord = require("discord.js");
var f = 'C:/Users/User/DiscordBot/Logs/log.txt',
    fs = require('fs'),
    db = "C:/Users/User/DiscordBot/Data.txt";
var cmd = require("C:/Users/User/DiscordBot/cmd/cmd.js")
var ping = require("C:/Users/User/DiscordBot/cmd/ping.js")
var mybot = new Discord.Client();
var messageCount = 0
var usrtrk = "C:/Users/User/DiscordBot/Users.csv"

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

    //logger(d[2])
    messageCount = messageCount + 1
    logger("[" + d[2] + "." + d[1] + "." + d[0] + " " + d[3] + ":" + d[4] + ":" + d[5] + "]" /*+ "[" + messageCount + "]" */ + "[" + message.channel.name + "@" + message.channel.server + "]" + "<" + message.author.name + "#" + message.author.discriminator + "> " + message.cleanContent)
    /*if (message.channel.server.id === "153368849100701696") {
        mybot.sendMessage(message, ".screenshot")
    }*/
    if (message.author.id === "158124575706578944" && message.content.startsWith("Welcome")) { mybot.sendMessage(message, "hi fishy") }
    if (message.channel.id === "152379357862690816" && message.author.id != "131285184451444736") { return false }
    if (message.channel.id === "110373943822540800" && message.author.id != "131285184451444736") { return false }
    //if (message.content === "!!ping") { ping.cmd(message) }
    cmd.cmd(message, mybot, logger, messageCount, fs, db, error)
    /*else if (message.content === "!!pong") { pong(message) }
    /*else if (message.content === "!!fusion") { fusion(message) }
    else if (message.content === "!!righten") { righten(message) }
    else if (message.content === "!!msgcount") { msgcount(message) }
    else if (message.content === "!!info") { info(message) }
    else if (message.content === "!!commands") { commands(message) }
    else if (message.content === "!!givemesucc") { givemesucc(message) }
    else if (message.content.startsWith("!!changelog")) { changelog(message) }
    else if (message.content === "!!dice") { dice(message) }
   /*else if (message.content === "!!outages") { outages(message) }
    else if (message.content === "!!b1nzy") { b1nzy(message) }
    else if (message.content === "!!savedata") { dbwrite(message) }
    else if (message.content === "!!readdata") { dbread(message) }
    else if (message.content === "!!comparedata") { dbcompare(message) }
    else if (message.content === "!!joinlink") { joinlink(message) }
    else if (message.content.startsWith("!!test ")) { test(message) }
    else if (message.content.startsWith("!!playing ")) { playing(message) }
    else if (message.content.startsWith("!!contact")) { contact(message) }
    else if (message.content === "!!stats") { stats(message) }
    else if (message.content === "!!servers") { servers(message) }*/
});

mybot.on("disconnected", function (reconnect) {
    logger("It appears that the Connection to Discord died. Reconnecting...")
    logger("Attempted Login with Token")
}
)

dbread()

logger("Logged on.")