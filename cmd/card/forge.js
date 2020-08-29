// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const config = require("./config.json");
const cmd = `${config.pr}.length` ;
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Cards";

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
};

var frags, cofra;

module.exports.run = async (client, message, args, database) => {

  if (message.guild.id != '742487757988954213') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription("vc não pode fazer isso nesse Servidor!\n vá para o Servidor: do **TS PIRATA**");
    await message.channel.send(embed);
    return;
  };
  if (message.channel.id != '749294100100022294') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription("vc não pode fazer isso nesse canal!\n vá para o canal: <#749294100100022294>");
    await message.channel.send(embed);
    return;
  };

  let dbrefCarteira = database.ref(`${dir}/${message.author.id}`);
  dbrefCarteira.once('value').then(async function(db) {    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
      await message.channel.send(embed);
      return;
    } else {
      b = db.val();
      coin = b.coins;
      frag = b.fragmentos;
      if (frag < 2) {
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag}.`)
          .setDescription(`Você não mais fragmentos!\nvocê precisa ter pelo menos **2** fragmentos\n\nvocê tem: **${frag}** fragmentos`);
        await message.channel.send(embed);
        return;
      };
      

      ctl = true;
      frags = frag;
      cofra = 0;

      while (ctl) {
        frags = frags - 2;
        cofra++;
        if (frags < 2) {
          ctl = false;
        };
      };

      coin = coin + cofra;

      const embed = new Discord.MessageEmbed()
        .setAuthor(`${b.nick}`, b.avatar)
        .setTitle("FORJANDO...")
        .setColor('#2f3136')
        .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/749303309533315517/02e795e95dae1b082419ed4a596f0c47.gif")
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      message.channel.send(embed)
      .then(async msg => {
        var ctl = 0
        while (ctl < cofra) {
          sleep(2000);
          ctl++
        }
        const embed = new Discord.MessageEmbed()
          .setAuthor(`${b.nick}`, b.avatar)
          .setDescription(`${message.author} conseguiu: 緑**${cofra}** coins`)
          .setColor('#2f3136')
          .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
        msg.edit(embed)
      });



      dbrefCarteira.update({
        coins: coin,
        fragmentos: frags
      });

    };
  });

};