// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const superagent = require('superagent');

exports.run = async (client, message, args, database) => {

var bol = false;
var dbref = await database.ref(`Servidores/config/vip`).once('value');
var dbrefs = dbref.val();
var ctl = 0;

while (ctl < dbrefs.length) {
  if (message.author.id == dbrefs[ctl]) {
    bol = true;
  }
  ctl++;
};

if (bol == false) {
  message.reply("você tem que ser premium");
  return;
};

const {
        body
    } = await superagent
        .get(`https://nekos.life/api/v2/img/cuddle`);

let user = message.mentions.users.first();

if (!user) {
return message.reply('esqueceu de citar quem quer abraçar!!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('ABRAÇO :gem:')
        .setColor('#00ff00')
        .setDescription(`:green_heart: ${message.author} **ABRAÇOU** ${user} **E NÃO QUER SOLTAR**`)
        .setImage(body.url)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
