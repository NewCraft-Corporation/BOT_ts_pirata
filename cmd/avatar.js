// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
    const avatar = message.author.displayAvatarURL();
    const embed = new Discord.MessageEmbed()
        .setTitle('SEU AVATAR')
        .setColor('#00ff00')
        .setTimestamp()
        .setImage(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
