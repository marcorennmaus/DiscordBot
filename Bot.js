/*
DiscordBot by marco_rennmaus
Build: 47
Version 1.2
Library used: discord.js
*/

var Discord = require("discord.js");
var f = 'C:/Users/User/DiscordBot/Logs/log.txt',
    fs = require('fs'),
    db = "C:/Users/User/DiscordBot/Data.txt";

var mybot = new Discord.Client();

var messageCount = 0

var logger = function (input) {
    console.log(input)
    fs.appendFile(f, input + "\n", function (err) { if (err) console.error(err); });
}

var dbread = function (message) {
    logger("Command: !!readdata")
    var array = fs.readFileSync(db).toString().split("\n");
    for (i in array) { console.log(array[i]); }
    messageCount = parseInt(array[0], 10);
    logger("Attempted to read from database.")
    mybot.sendMessage(message, "Following Data has been read from the Database:\nmessageCount = " + messageCount)
}

var dbcompare = function (message) {
    logger("Command: !!comparedata")
    var array = fs.readFileSync(db).toString().split("\n");
    for (i in array) { console.log(array[i]); }
    messageCountComp = parseInt(array[0], 10)
    mybot.sendMessage(message, "Compare Data:\nSavefile | Current\n" + messageCountComp + " | " + messageCount)
}

var dbwrite = function (message) {
    logger("Command: !!savedata")
    fs.writeFile(db, messageCount)
    mybot.sendMessage(message, "Following Data has been written to the Database:\nmessageCount = " + messageCount)
    logger("Attempted to write to database.")
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
    mybot.sendFile(message.channel, "C:/Users/User/DiscordBot/righten.png", error)
    logger("Command: !!righten")
}

var msgcount = function (message) {
    mybot.sendMessage(message, "Total Message-Count since Boot: " + messageCount);
    logger("Command: !!msgcount")
}

var info = function (message) {
    mybot.sendMessage(message, "M_R Bot - Version 1.2 (Build 47) \nBuilddate: 28th May 2016\nBot created by: marco_rennmaus | RMP#8575\n\nCommands are available under !!commands\nLatest changelog available under !!changelog");
    logger("Command: !!info")
}

var commands = function (message) {
    mybot.sendMessage(message, "```Following Commands are available:\n!!b1nzy       Cat.\n!!changelog   Displays the latest changelog.\n!!commands    Displays all Commands.\n!!comparedata Compares data from the savefile and the running bot.\n!!dice        Gives random number between 1 and 6.\n!!fusion      XEN - Fusion\n!!givemesucc  s u c c   s u c c\n!!info        Gives Info about the Bot.\n!!msgcount    Gives count of all messages.\n!!outages     Displays recent outages.\n!!ping        Pong.\n!!pong        Ping.\n!!playing     Changes the playing status. (Only useable for the Bot-Owner)\n!!readdata     Reads data from the savefile.\n!!righten     XEN feels cucked.\n!!savedata    Saves data to the save file.```")
    logger("Command: !!commands")
}

var givemesucc = function (message) {
    mybot.sendMessage(message, "Gonna give you the **s u c c** ( ͡° ͜ʖ ͡°)")
    logger("Command: !!givemesucc")
}

var changelog = function (message) {
    logger("Command: !!changelog")
    if (message.content.startsWith("!!changelog")) {
        var parameter = message.content.split("!!changelog ")[1];
        logger("Parameter: " + parameter)
        if (parameter === "1") { mybot.sendMessage(message, "M_R Bot Changelog [Page 1]\n\nVersion 1.0.3.2:\n - Bugfix: Bot dies for no reason after inactivity\n\nVersion 1.0.3.1:\n - Modified !!info-Output\n\nVersion 1.0.3:\n + Added !!dice\n\nVersion 1.0.2:\n +Added message logging to a file\n\nVersion 1.0.1:\n+ Added !!commands\n+ Added !!info\n+ Added !!givemesucc\n+ Added !!changelog\n+ Added some logging to the Console\n\nVersion 1.0.0:\n- First Release") }
        else if (parameter === "2") { mybot.sendMessage(message, "M_R Bot Changelog [Page 2]\n\nVersion 1.2:\n + Data can now be saved with !!savedata\n + Data can be read from the savefile with !!readdata\n + Data from Savefile will be read on startup.\n - Changelog now being split in pages.\n\nVersion 1.1.5:\n - Redesigned logging of events\n - Bugfix: Users were able to change playing status.\n\nVersion 1.1.4:\n + Added !!playing (Only useable for the Owner)\n\nVersion 1.1.3.1:\n - !!righten will now send the file itself.\n\nVersion 1.1.3:\n - If !!b1nzy fails, it will now respond with a error.\n - Restricted Bot Usage in #general on the Discord Bots-Server\n\nVersion 1.1.2:\n + Added !!b1nzy\n\nVersion 1.1.1:\n + Added !!outages\n\nVersion 1.1.0.1:\n - Restricted Bot Usage in #general on the MonsterLyrics server.\n\nVersion 1.1:\n + Rewrote Bot, Filesize significantly decreased.") }
        else { mybot.sendMessage(message, "Usage:\n\n!!changelog [Page]") }

    }
}

var outages = function (message) {
    mybot.sendMessage(message, "Latest Outages:\nKeep in mind, that this Bot is actually not 24/7 online since it's hosted from the Owner's Computer.\n\n26th May 2016 - 21:00 CEST\nOutage for 2 Minutes due to a DDoS-Attack")
    logger("Command: !!outages")
}

var b1nzy = function (message) {
    b1nzychannel = message.channel.id
    mybot.sendFile(message.channel, "C:/Users/User/DiscordBot/b1nzy.jpg", error)
    //mybot.sendMessage(message, "http://i.imgur.com/wzDzYlp.jpg")
    logger("Command: !!binzy")
}

var error = function (err) {
    logger("Something fucked up.")
    logger("Error: " + err)
    if (err === null) {
        return false;
    }
    mybot.sendMessage(b1nzychannel, "I'm sorry, but there was a error while executing this command.\n" + err)
}

var test = function (message) {
    logger("Command: !!test")
    if (message.content.startsWith("!!test")) {
        var parameter = message.content.split("!!test ")[1];
        logger("Parameter: " + parameter)
        if (parameter === "1") { mybot.sendMessage(message, "Test 1 has been run") }
        else if (parameter === "2") { mybot.sendMessage(message, "Test 2 has been run") }
        else { return false }

    }
}


var playing = function (message) {
    if (message.author.id != "131285184451444736") {
        mybot.sendMessage(message, "How about no?")
        return false;
    }
    logger("Command: !!playing")
    if (message.content.startsWith("!!playing ")) {
        var para = message.content.split("!!playing ")[1];
        logger("Parameter: " + para)
        mybot.setPlayingGame(para, error)
    }
}

var dice = function (message) {
    var dice = Math.random()
    dice = dice * 6
    logger("Command: !!dice\ndice = " + dice)
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
                    else {
                        if (dice < 6) {
                            mybot.sendMessage(message, ":six:")
                        }
                        else {
                            mybot.sendMessage(message, "A error occured while processing the command.\nAdditional Information:\ndice = " + dice)
                            logger("ERROR: !!dice command failed\nA error occured while processing the command.\nAdditional Information:\ndice = " + dice)
                        }
                    }
                }
    }
}

mybot.on("message", function (message) {
    messageCount = messageCount + 1
    logger("[" + messageCount + "]" + "[" + message.channel.name + "@" + message.channel.server + "]" + "<" + message.author.name + "#" + message.author.discriminator + "> " + message.cleanContent)
    if (message.channel.id === "152379357862690816" && message.author.id != "131285184451444736") { return false }
    if (message.channel.id === "110373943822540800" && message.author.id != "131285184451444736") { return false }
    if (message.content === "!!ping") { ping(message) }
    else if (message.content === "!!pong") { pong(message) }
    else if (message.content === "!!fusion") { fusion(message) }
    else if (message.content === "!!righten") { righten(message) }
    else if (message.content === "!!msgcount") { msgcount(message) }
    else if (message.content === "!!info") { info(message) }
    else if (message.content === "!!commands") { commands(message) }
    else if (message.content === "!!givemesucc") { givemesucc(message) }
    else if (message.content.startsWith("!!changelog")) { changelog(message) }
    else if (message.content === "!!dice") { dice(message) }
    else if (message.content === "!!outages") { outages(message) }
    else if (message.content === "!!b1nzy") { b1nzy(message) }
    else if (message.content === "!!savedata") { dbwrite(message) }
    else if (message.content === "!!readdata") { dbread(message) }
    else if (message.content === "!!comparedata") { dbcompare(message) }
    else if (message.content.startsWith("!!test ")) { test(message) }
    else if (message.content.startsWith("!!playing ")) { playing(message) }
});

mybot.on("disconnected", function (reconnect) {
    logger("It appears that the Connection to Discord died. Reconnecting...")
    mybot.loginWithToken("Your Token");
    logger("Attempted Login with Token")
}
)

dbread()

mybot.loginWithToken("Your Token");
logger("Logged on.")