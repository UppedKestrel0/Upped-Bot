const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("MANAGE_ROLES")) return message.reply("You are lacking the required permissions to perform this command.");
    let rmember = message.guild.member(message.mentions.users.first() || message.guild.member.get(args[0]));
    if(!rmember) return message.reply("Couldn't find specified user.");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("Specify a role please.");
    let grole = message.guild.roles.find(`name`, role);
    if(!grole) return message.reply("That role does not exist.");

    if(!rmember.roles.has(grole.id)) return message.reply("That user does not have that role.");
    await(rmember.removeRole(grole.id));

    return rmember.sendMessage(`You have been removed from the role ${grole.name}`);

}

module.exports.help = {
    name: "removerole"
}