const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let priority = message.args[1];
    let change = args.slice(1).join(" ");

    let changelogEmbed = new Discord.RichEmbed()
    .setTitle("**NEW LOG**")
    .setColor("#f1f433")
    .addField("Change", change)
    .addField("Priority", priority);

    let changelogChannel = message.guild.channels.find(`name`, "changelog");
    changelogChannel.send(changelogEmbed);
};

module.exports.help = {
    name: "changelog"
}