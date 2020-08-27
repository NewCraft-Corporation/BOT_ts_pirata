// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const sayMessage = args.join(' ');
  if (message.author.id == '477628013236846592' || message.author.id == '390674797908197386') {
    message.channel.send(sayMessage);
  };
};