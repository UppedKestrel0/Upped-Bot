const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send("You do not have access to that command.").then(msg => msg.delete(5000));

  if(!args[0])
    return message.channel.send("Not enough arguments.").then(msg => msg.delete(5000));

    message.delete().catch(O_o=> {});
  message.channel.bulkDelete(args[0])
  message.channel.send(`Completed! Cleared ${args[0]} messages.`).then(msg => msg.delete(5000));  
}

module.exports.help = {
  name: "purge"
}