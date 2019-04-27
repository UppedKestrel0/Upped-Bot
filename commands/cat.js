const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://aws.random.cat/meow`);

    let catembed = new Discord.RichEmbed()
    .setTitle("**CAT! :cat:**")
    .setColor("#7f00e0")
    .setImage(body.file);

    return message.channel.send(catembed);
}

module.exports.help = {
    name: "cat"
}