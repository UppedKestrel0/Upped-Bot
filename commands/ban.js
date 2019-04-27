const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let buser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!buser) return message.channel.send("Couldn't Find Specified User.");
    let breason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are lacking the required permissions to run this command.");
    if(buser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("The Specified User is a Staff Member and I can not ban them.");

    let banEmbed = new Discord.RichEmbed()
    .setTitle("**BANNED USER**")
    .setColor(red)
    .addField("Banned User", `${buser}`)
    .addField("Banned By", `<@${message.author.id}>`)
    .addField("Reason", breason);

    let banchannel = message.guild.channels.find(`name`, "logs");
    if(!banchannel) return message.author.sendMessage("Couldn't find logs channel.");

    message.guild.member(buser).ban(breason);
    banchannel.send(banEmbed);
    
    message.delete().catch(O_o=> {});

}

module.exports.help = {
    name: "ban"
}