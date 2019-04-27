const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let change = args.slice(0).join(" ");

    let changelogEmbed = new Discord.RichEmbed()
    .setTitle("**NEW LOG**")
    .setColor("#ffff00")
    .addField("Change", change);

    let changelogChannel = message.guild.channels.find(`name`, "changelog");
    if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You are lacking the required permissions to run this command.");
    message.delete().catch(O_o=> {});

    changelogChannel.send(changelogEmbed);
};

module.exports.help = {
    name: "changelog"
}