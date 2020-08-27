// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const superagent = require('superagent');

exports.run = async (client, message, args) => {

const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/hug`);

let user = message.mentions.users.first();

if (!user) {
return message.reply('esqueceu de citar quem quer abraçar!!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('ABRAÇO')
        .setColor('#00ff00')
        .setDescription(`:green_heart: ${message.author} **abraçou** ${user}`)
        .setImage(body.url)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
