// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = ['https://loritta.website/assets/img/actions/attack/generic/gif_87.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_49.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_6.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_79.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_86.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_65.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_35.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_70.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_1.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_2.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_3.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_4.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_5.gif', 'https://loritta.website/assets/img/actions/attack/generic/gif_7.gif'];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first();

if (!user) {
message.reply('esqueceu de citar quem quer atacar!!');
return;
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('ATAQUE')
        .setColor('#00ff00')
        .setDescription(`:boxing_glove: ${message.author} **atacou** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
