const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let image = ("https://cdn.discordapp.com/attachments/565294026987929615/567578563923017728/Pug_Power.jpg")

    let pugpowerEmbed = new Discord.RichEmbed()
    .setTitle("**PUG POWER!**")
    .setColor("#7d00ff")
    .setImage(image);

    message.channel.send(pugpowerEmbed);
};

module.exports.help = {
    name: "pugpower"
}