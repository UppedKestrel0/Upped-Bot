const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let priority = args[1];
    let change = message.slice(priority).join(" ");

    let changelogEmbed = new Discord.RichEmbed()
    .setTitle("**NEW LOG**")
    .setColor("#f1f433")
    .addField("Change", change)
    .addField("Priority", priority);

    let changelogChannel = message.guild.channels.find(`name`, "changelog");
    message.delete().catch(O_o=> {});

    changelogChannel.send(changelogEmbed);
};

module.exports.help = {
    name: "changelog"
}