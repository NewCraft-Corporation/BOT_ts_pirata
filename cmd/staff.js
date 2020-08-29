// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');
const mergeImg = require('merge-img');
let global_count = 0;
exports.run = async (client, message, args) => {

  let user1 = message.guild.member('390674797908197386');  
  let user2 = message.guild.member('501527466335141898');  
  let user3 = message.guild.member('477628013236846592');

  await mergeImg([`https://cdn.discordapp.com/avatars/${user1.user.id}/${user1.user.avatar}.png`, `https://cdn.discordapp.com/avatars/${user2.user.id}/${user2.user.avatar}.png`, `https://cdn.discordapp.com/avatars/${user3.user.id}/${user3.user.avatar}.png`]).then((img) => {
    img.write(`./cmd/img/staff_${global_count}.png`, () => {
      console.log(`A foto do casal [staff_${global_count}.png] foi criada.`);
      let q = new Discord.MessageAttachment(`./cmd/img/staff_${global_count}.png`);
      message.channel.send(q).then(msg1 => {
        const embed = new Discord.MessageEmbed()
          .setTitle("STAFF DO TS")
          .setDescription(" <@!390674797908197386> : DEVELOPER CHIEF\n <@!501527466335141898> : CODE DESIGNER\n <@!477628013236846592> : CODE TESTER")
          .setTimestamp()
          .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
        msg1.edit(embed)
      });
    });
  });
};