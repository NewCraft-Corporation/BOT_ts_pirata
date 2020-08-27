const Discord = require('discord.js');
const config = require("../config.json"); 

module.exports.run = async (client, message, args) => {
   message.reply(`voce já tentou usar o cmd: **${config.pr}nctv**`);
};