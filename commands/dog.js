const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setTitle("**DOGGO! :dog:**")
    .setColor("#7d00ff")
    .setImage(body.url);

    return message.channel.send(dogembed);
}

module.exports.help = {
    name: "dog"
}