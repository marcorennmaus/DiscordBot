/*
DiscordBot by marco_rennmaus
Build: 30
Version 1.1.1
*/

var Discord = require("discord.js");
var f = 'log.txt',
    fs = require('fs');

var mybot = new Discord.Client();

var messageCount = 0

var logger = function (input) {
    console.log(input)
    fs.appendFile(f, input + "\n", function (err) { if (err) console.error(err); });
}

logger("Discord Bot booting up...")

var ping = function (message) {
    mybot.sendMessage(message, "Pong.");
    logger("Command: !!ping")
    //setTimeout(() => { console.log('5 seconds') }, 5000)
}

var pong = function (message) {
    mybot.sendMessage(message, "Ping.");
    logger("Command: !!pong")
}

var fusion = function (message) {
    mybot.sendMessage(message, "https://www.youtube.com/watch?v=6ucgC9tmyaY");
    logger("Command: !!fusion")
}

var righten = function (message) {
    mybot.sendMessage(message, "http://84.168.96.93/memes/dan_cucked_righten.png");
    logger("Command: !!righten")
}

var msgcount = function (message) {
    mybot.sendMessage(message, "Total Message-Count since Boot: " + messageCount);
    logger("Command: !!msgcount")
}

var info = function (message) {
    mybot.sendMessage(message, "M_R Bot - Version 1.1.1 (Build 30) \nBuilddate: 26th May 2016\nBot created by: marco_rennmaus | RMP#8575\n\nCommands are available under !!commands\nLatest changelog available under !!changelog");
    logger("Command: !!info")
}

var commands = function (message) {
    mybot.sendMessage(message, "```Following Commands are available:\n!!changelog   Displays the latest changelog.\n!!commands    Displays all Commands.\n!!dice        Gives random number between 1 and 6.\n!!fusion      XEN - Fusion\n!!givemesucc  s u c c   s u c c\n!!info        Gives Info about the Bot.\n!!msgcount    Gives count of all messages.\n!!outages     Displays recent outages.\n!!ping        Pong.\n!!pong        Ping.\n!!righten     XEN feels cucked.```")
    logger("Command: !!commands")
}

var givemesucc = function (message) {
    mybot.sendMessage(message, "Gonna give you the **s u c c** ( ͡° ͜ʖ ͡°)")
    logger("Command: !!givemesucc")
}

var changelog = function (message) {
    mybot.sendMessage(message, "M_R Bot Changelog:\n\nVersion 1.1.1:\n + Added !!outages\n\nVersion 1.1.0.1:\n - Restricted Bot Usage in #general on the MonsterLyrics server.\n\nVersion 1.1:\n + Rewrote Bot, Filesize significantly decreased.\n\nVersion 1.0.3.2:\n - Bugfix: Bot dies for no reason after inactivity\n\nVersion 1.0.3.1:\n - Modified !!info-Output\n\nVersion 1.0.3:\n + Added !!dice\n\nVersion 1.0.2:\n +Added message logging to a file\n\nVersion 1.0.1:\n+ Added !!commands\n+ Added !!info\n+ Added !!givemesucc\n+ Added !!changelog\n+ Added some logging to the Console\n\nVersion 1.0.0:\n- First Release")
    logger("Command: !!changelog")
}

var outages = function (message) {
    mybot.sendMessage(message, "Latest Outages:\nKeep in mind, that this Bot is actually not 24/7 online since it's hosted from the Owner's Computer.\n\n26th May 2016 - 21:00 CEST\nOutage for 2 Minutes due to a DDoS-Attack")
    logger("Command: !!outages")
}
var dice = function (message) {
    var dice = Math.random()
    dice = dice * 6
    logger("Command: !!dice/ndice = " + dice)
    if (dice < 1) {
        mybot.sendMessage(message, ":one:")
    }
    else {
        if (dice < 2) {
            mybot.sendMessage(message, ":two:")
        }
        else
            if (dice < 3) {
                mybot.sendMessage(message, ":three:")
            }
            else
                if (dice < 4) {
                    mybot.sendMessage(message, ":four:")
                }
                else {
                    if (dice < 5) {
                        mybot.sendMessage(message, ":five:")
                    }
                    else
                    {
                        if (dice < 6) {
                            mybot.sendMessage(message, ":six:")
                        }
                        else
                        {
                            mybot.sendMessage(message, "A error occured while processing the command.\nAdditional Information:\ndice = " + dice)
                            logger("ERROR: !!dice command failed\nA error occured while processing the command.\nAdditional Information:\ndice = " + dice)
                        }
                    }
                }
            }
        }

mybot.on("message", function (message) {
    messageCount = messageCount + 1
    logger("                    New message - Number: " + messageCount + "\n" + message.author + message.cleanContent)
    if (message.channel.id === "152379357862690816" && message.author.id != "131285184451444736") {
        return false
    }
        if (message.content === "!!ping") { ping(message) }
        else if (message.content === "!!pong") { pong(message) }
        else if (message.content === "!!fusion") { fusion(message) }
        else if (message.content === "!!righten") { righten(message) }
        else if (message.content === "!!msgcount") { msgcount(message) }
        else if (message.content === "!!info") { info(message) }
        else if (message.content === "!!commands") { commands(message) }
        else if (message.content === "!!givemesucc") { givemesucc(message) }
        else if (message.content === "!!changelog") { changelog(message) }
        else if (message.content === "!!dice") { dice(message) }
        else if (message.content === "!!outages") { outages(message) }
});

mybot.on("disconnected", function (reconnect) {
    logger("It appears that the Connection to Discord died. Reconnecting...")
    mybot.loginWithToken("Your Token");
    logger("Attempted Login with Token")
}
)

mybot.loginWithToken("Your Token");
logger("Logged on.")
// If you still need to login with email and password, use mybot.login("email", "password");