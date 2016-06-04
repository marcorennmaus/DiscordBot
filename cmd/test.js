// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
        logger("Command: !!test")
        if (message.content.startsWith("!!test")) {
            var parameter = message.content.split("!!test ")[1];
            logger("Parameter: " + parameter)
            if (parameter === "1") { mybot.sendMessage(message, "Test 1 has been run") }
            else if (parameter === "2") { mybot.sendMessage(message, "Test 2 has been run") }
            else { return false }

        }
    }
}