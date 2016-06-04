// JavaScript source code
module.exports = {
    cmd: function (message, mybot, logger) {
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
}