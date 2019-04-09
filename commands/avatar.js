const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let icon = message.author.displayAvatarURL
    let avatarembed = new Discord.RichEmbed()
    .setColor("#7d00ff")
    .setThumbnail(icon)
    .addField("Avatar of:", `<@${message.author.id}>`);

    return message.channel.send(avatarembed);
}

module.exports.help = {
    name: "avatar"
}