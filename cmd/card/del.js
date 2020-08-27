// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
var tc;

module.exports.run = async (client, message, args, database) => {
  var sayMessage = args[1];
  if (sayMessage == null) return;

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
      } else {
        tc = b.cards.length;
      }
      var ctl = 0;
      var list = [];
      var bol = false;
      var bl = false;
      var n;
      while (ctl < tc) {
        if (sayMessage == b.cards[ctl]) {
          bol = true;
          n = ctl;
          list = b.cards;
        };        
        ctl++;
      };
      
      if (bol) {
        if ( tc == 1 ) {
          dbrefCarteira.update({
          cards: null
          });

          let embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}.`)
            .setDescription(`carta removida`);
          await message.channel.send(embed);
          return;
        }
        //console.log(n);
        //console.log(list);
        var ctl = 0;
        var tc1 = tc - 1;
        while (ctl < tc) {
          if (ctl == n) {
            list[ctl] = list[tc1];
            //console.log(list[ctl]);
            ctl++
          } else {
            //console.log(list[ctl]);
            ctl++;
          }
          if (ctl == tc1) {
            list[ctl] = null;
          };
        };
        dbrefCarteira.update({
          cards: list
        });
        
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag}.`)
          .setDescription(`carta removida`);
        await message.channel.send(embed);
        return;
      };
    };
  });
};