const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

    let {body} = await superagent
    .get(`https://random.dog/woof.json`);

    let dogembed = new Discord.RichEmbed()
    .setTitle("**DOGGO! :dog:**")
    .setColor("#7f00e0")
    .setImage(body.url);

    return message.channel.send(dogembed);
}

module.exports.help = {
    name: "dog"
}