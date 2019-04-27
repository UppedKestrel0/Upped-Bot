const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["1", "2", "3", "4", "5", "6"];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");

    let rollEmbed = new Discord.RichEmbed()
    .setColor("#7f00e0")
    .addField("The Chosen Number!", replies[result]);

    return message.channel.send(rollEmbed);
}

module.exports.help = {
    name: "roll"
}