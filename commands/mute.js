const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async(bot, message, args) => {

    let muser = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!muser) return message.author.sendMessage("Couldn't find that specified user.");
    if(muser.hasPermission("MANAGE_MESSAGES")) return message.author.sendMessage("That user is a staff member, and you can not mute them.");
    let muterole = message.guild.roles.find(`name`, "Muted");
    if(!muterole) return message.author.sendMessage("The role I am trying to set does not exist.");

    let mutetime = args[1];
    if(!mutetime) return message.author.sendMessage("Please specify a proper time.");

    let reason = args.join(" ").slice(22);
    let muteEmbed = new Discord.RichEmbed()
    .setTitle("**Muted User**")
    .setColor("#ff0000")
    .addField("Muted User", muser)
    .addField("Muted By", message.author)
    .addField("Duration of Mute", mutetime)
    .addField("Reason", reason)
    .setTimestamp();

    let muteDM = new Discord.RichEmbed()
    .setTitle("**YOU HAVE RECIEVED A MUTE!**")
    .setColor(red)
    .addField("Reason", reason)
    .addField("Muted by", message.author)
    .addField("Duration of Mute", mutetime)
    .setTimestamp();

    let unmuteEmbed = new Discord.RichEmbed()
    .setTitle("**User Unmuted**")
    .setColor("#ff0000")
    .addField("Unmuted User", muser)
    .setTimestamp();

    let mutechannel = message.guild.channels.find(`name`, "logs");
    message.delete().catch(O_o=> {});

    console.log(`${message.author.tag} ran the \"MUTE\" command.`)
    await(muser.addRole(muterole.id));
    await mutechannel.send(muteEmbed);
    await muser.sendMessage(muteDM);

    setTimeout(function(){
        muser.removeRole(muterole.id);
        muser.sendMessage("You have been unmuted.")
    }, ms(mutetime));

    await mutechannel.send(unmuteEmbed);
    
}

module.exports.help = {
    name: "mute"
}