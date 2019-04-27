const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

    let helpembed = new Discord.RichEmbed()
    .setTitle("**List of Commands**")
    .setColor("#008906")
    .addField("Command 1", "!serverinfo | DM's you some information about the Server.")
    .addField("Command 2", "!botinfo | DMs you some information about the bot.")
    .addField("Command 3", "!roll | Picks a random number between 1 and 6.")
    .addField("Command 4", "!8ball <Question> | Answers the question with a random response of: Yes, No, Maybe, I don't know, Please ask again Later")
    .addField("Command 5", "!avatar | Sends your discord avatar in the channel")
    .addField("Command 6", "!cat | Sends an image of a cat")
    .addField("Command 7", "!dog | Sends an image of a dog")
    .addField("Command 8", "!report <user> {reason} | Reports a user for the specified reason")
    .addField("Command 9", "!suggest <suggestion> | Adds a suggestion to the Suggestion Channel");

    message.delete().catch(O_o=> {});

    return message.author.sendMessage(helpembed);

};

module.exports.help = {
    name: "help"
}