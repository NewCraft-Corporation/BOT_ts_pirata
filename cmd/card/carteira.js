// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
var totalcards;

module.exports.run = async (client, message, args, database) => {

  let dbref = database.ref(`${dir}/${message.author.id}`);

  dbref.once('value').then(async function(db) {
    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
      await message.channel.send(embed);
    } else {   
      const b = db.val();
      var vip = "";
      let iduser = message.author.id;
      var premium = await database.ref(`Servidores/config/vip`).once('value');
      var premiums = premium.val();
      var ctl = 0;

      while (ctl < premiums.length) {
        if (iduser == premiums[ctl]) {
          vip = "💎";
        }
        ctl++;
      };
      //if (iduser == '390674797908197386' || iduser == '501527466335141898' || iduser == '477628013236846592' || iduser == '674969745598185472') {
      //  vip = "💎";
      //};


      if (!b.cards) {
        totalcards = 0;
      } else {
        totalcards = b.cards.length;
      }
      const title = `CARTEIRA ${vip}`;
      let embed = new Discord.MessageEmbed()
        .setTitle(title)
        .setDescription(`**Nome: ${b.nick}**\n  ${b.status} \n\n**:moneybag:Coins: 緑${b.coins}\n:shopping_bags:Boosters: ${b.boosters}\n:white_small_square:Fragmentos: ${b.fragmentos}\n\n:tickets:Total de cartas: ${totalcards}**`)
        .setThumbnail(b.avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      await message.channel.send(embed);

    }
  });

};