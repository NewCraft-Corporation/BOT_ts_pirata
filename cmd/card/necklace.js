// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
};

module.exports.run = async (client, message, args, database) => {
  
  if (message.guild.id != '742487757988954213') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription("vc não pode fazer isso nesse Servidor!\n vá para o Servidor: do **TS PIRATA**");
    await message.channel.send(embed);
    return;
  };

  if (message.channel.id != '748957755406286889') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription("vc não pode fazer isso nesse canal!\n vá para o canal: <#748957755406286889>");
    await message.channel.send(embed);
    return;
  };
};