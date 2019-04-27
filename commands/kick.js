const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let kuser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!kuser) return message.channel.send("Couldn't Find Specified User.");
    let kreason = args.join(" ").slice(22);
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You are lacking the required permissions to run this command.");
    if(kuser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("The Specified User is a Staff Member and I can not kick them.");

    let kickEmbed = new Discord.RichEmbed()
    .setTitle("**KICKED USER**")
    .setColor(red)
    .addField("Kicked User", `${kuser}`)
    .addField("Kicked By", `<@${message.author.id}>`)
    .addField("Reason", kreason);

    let kickchannel = message.guild.channels.find(`name`, "logs");
    if(!kickchannel) return message.author.sendMessage("Couldn't find logs channel.");

    message.guild.member(kuser).kick(kreason);
    kickchannel.send(kickEmbed);
    
    message.delete().catch(O_o=> {});

}

module.exports.help = {
    name: "kick"
}