// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {

  const id = (message.author.id);
  var list = [
  `Ola <@${id}>`,
  `Ola <@${id}>`,
  `Ola <@${id}>`,
  `Blz <@${id}>`,
  `Blz <@${id}>`,
  `Opa <@${id}>`,
  `Opa <@${id}>`,
  `Como vai <@${id}>`,
  `Como vai <@${id}>`,
  `Oi <@${id}>`,
  `Oi <@${id}>`,
  `Oi <@${id}>`,
  `Oi <@${id}>`,
  `Hy <@${id}>`,
  `Hy <@${id}>`,
  `Hy <@${id}>`,
  `Então vc é o <@${id}> já ouvi falar de vc`,
  `<@${id}> vc parece sem graça`,
  `<@${id}>, olha só! eu sou o melhor Bot do Mundo`
  ];
  var oiRandom = list[Math.floor(Math.random() * list.length)];

  message.channel.send(oiRandom)   

}