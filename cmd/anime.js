const Discord = require('discord.js');
const config = require("./c.json");

module.exports.run = async (client, message, args) => {
   message.reply(`voce já tentou usar o cmd: **${config.pr}nctv**`);
};
