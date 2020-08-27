// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
var tc, dbref;

module.exports.run = async (client, message, args, database) => {
  let dbrefCarteira = database.ref(`${dir}/${message.author.id}`);
  dbrefCarteira.once('value').then(async function(db) {    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
      await message.channel.send(embed);
    } else { 
      const b = db.val();
      if (!b.cards) {
        tc = 0;
        dbref = "Nada meu amigo ZZzz..";
      } else {
        dbref = b.cards;
        tc = b.cards.length;
      }
      let embed = new Discord.MessageEmbed()
        .setTitle("Lista de Cartas")
        .setDescription(`Você tem ${tc} de card\n\n**${dbref}**`)
        .setThumbnail(b.avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      await message.channel.send(embed);
    };
  });
};