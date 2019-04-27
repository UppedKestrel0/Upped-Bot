const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["Yes.", "No.", "Maybe", "I don't know.", "Please ask again later."];

    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(0).join(" ");

    let ballEmbed = new Discord.RichEmbed()
    .setColor(purple)
    .addField("Question", question)
    .addField("Answer", replies[result]);

    return message.channel.send(ballEmbed);
}

module.exports.help = {
    name: "8ball"
}