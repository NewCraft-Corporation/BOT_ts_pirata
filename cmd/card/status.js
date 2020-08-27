// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const config = require("./config.json"); 

module.exports.run = async (client, message, args, database) => {

var bol = false;
var vip = await database.ref(`Servidores/config/vip`).once('value');
var vips = vip.val();
var ctl = 0;

while (ctl < vips.length) {
  if (message.author.id == vips[ctl]) {
    bol = true;
  }
  ctl++;
};

if (bol == false) {
  message.reply("você tem que ser premium");
  return;
};

  let dbref = database.ref(`${dir}/${message.author.id}`);

  dbref.once('value').then(async function(db) {
    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
      await message.channel.send(embed);
    } else {
      let cmd = `${config.pr}card status`;
      
      const arg = message.content.trim().slice(cmd.length).split(/ +/g);
      var sayMessage = arg.join(' ');
      
      if(!args[1]) {
        sayMessage = "Nada";
      };
      
      dbref.update({
        status: sayMessage
      });
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag} NOVO STATUS:gem:`)
        .setDescription(`${sayMessage}`);
      message.channel.send(embed);
    }
  });

};