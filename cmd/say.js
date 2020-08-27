// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  message.delete().catch(O_o => {});
  
  if(!message.member.roles.cache.find(r => r.name === "TS_MANAGE")) {
    message.channel.send(`<@!${message.author.id}> vc ñ é TS MANAGE`) 
    return;
  };

  message.channel.send(sayMessage);
};
