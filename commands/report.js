const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let ruser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!ruser) return message.channel.send("Couldn't find specified user.");
    let reason = args.join(" ").slice(22);

    let reportembed = new Discord.RichEmbed()
    .setTitle("**NEW REPORT**")
    .setColor("#00ff23")
    .addField("Reported User", `${ruser}`)
    .addField("Reported By", `${message.author}`)
    .addField("Time of Report", message.createdAt)
    .addField("Reason", reason);

    let reportchannel = message.guild.channels.find(`name`, "logs");
    if(!reportchannel) return message.author.sendMessage("Couldn't find logs channel");
    message.delete().catch(O_o=> {});

    
    return reportchannel.send(reportembed);
};

module.exports.help = {
    name: "report"
}