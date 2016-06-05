// JavaScript source code

module.exports = {
    cmd: function (message, mybot, logger) {
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

        mybot.sendMessage(message, "Please wait 15 seconds...")
        var usercountc = mybot.users.filter(o => { return o.status !== "offline" });
        logger("Command: !!users")
        setTimeout(function () {
            var usercount2c = mybot.users.filter(o => { return o.status !== "offline" });
            var percent = (usercount2c.length / usercountc.length) * 100 - 100
            var percent = Math.round(percent * 100) / 100
            var difference = usercount2c.length - usercountc.length
            output = "Users 15 seconds ago: " + usercountc.length + "\nUsers now: " + usercount2c.length + "\n\nChange:\n" + difference + "\n" + percent + "%"
            mybot.sendMessage(message, output)
        }, 15000);
    }
}