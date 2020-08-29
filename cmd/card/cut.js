// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const config = require("./config.json");
const cmd = `${config.pr}.length` ;
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Cards";

var tc, n, b, d, tp;

let tp3 = [
  "", "#", "##", "###", "####", "#####", "######", "#######", "########", "#########", "##########", "###########", "############", "#############", "##############", "###############", "################", "#################", "##################", "###################", "####################"
];

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
};

module.exports.run = async (client, message, args, database) => {

  if (message.guild.id != '742487757988954213') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription("vc não pode fazer isso nesse Servidor!\n vá para o Servidor: do **TS PIRATA**");
    await message.channel.send(embed);
    return;
  };
  if (message.channel.id != '748957755406286889') {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription("vc não pode fazer isso nesse canal!\n vá para o canal: <#748957755406286889>");
    await message.channel.send(embed);
    return;
  };
  const sayM = message.content.trim().slice(cmd).split(/ +/g);

  if (!sayM[2]) {
    let embed = new Discord.MessageEmbed()
      .setTitle(`${message.author.tag}.`)
      .setDescription(`use \`${config.pr}card cut <CARD_ID>\``);
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
      tc = b.cards.length;
      var ctl = 0;
      var list = [];
      var bol = false;
      while (ctl < tc) {
        if (sayM[2] == b.cards[ctl]) {
          bol = true;
          n = ctl;
          list = b.cards;
        }
        ctl++;
      };
      if (bol) {
         var dbcard2 = database.ref(`${dir2}/${sayM[2]}`);
          dbcard2.once('value').then(async function(dbc) {
            d = dbc.val();
            const embed = new Discord.MessageEmbed()
              .setAuthor(`${b.nick}`, b.avatar)
              .setTitle(`${d.name} Rank:${d.raridade}`)
              .setDescription(`Você tem certeza que quer rasgar esse CARD?\nEscreva: **1** para confimar ou qualquer outra coisa para cancelar`)
              .setColor('#2f3136')
              .setImage(d.gif)
              .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
            await message.channel.send(embed);
          })
          .then(msg1 => {
            let simnao = message.channel.createMessageCollector(sn => sn.author.id === message.author.id, {
              max: 1
            })
            .on('collect', sn => {
              var ctl = sn.toString();
              if (ctl == "1") {
                if ( tc == 1 ) {
                  dbrefCarteira.update({
                    cards: null
                  });
                } else {
                  var ctl = 0;
                  var tc1 = tc - 1;
                  while (ctl < tc) {
                    if (ctl == n) {
                      list[ctl] = list[tc1];
                      ctl++
                    } else {
                      ctl++;
                    }
                    if (ctl == tc1) {
                      list[ctl] = null;
                    };
                  };
                  dbrefCarteira.update({
                    cards: list
                  });
                };
                tp = d.fragmento / 10;
                var ctl = 0;
                const embed = new Discord.MessageEmbed()
                  .setAuthor(`${b.nick}`, b.avatar)
                  .setTitle(`${d.name} Rank:${d.raridade}\n{${tp3[tp]}}\n\nRASGANDO...`)
                  .setColor('#2f3136')
                  .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/748974699718901921/9262f8006f1222632fb0ac203e57f8bb4ac223ba_hq.gif")
                  .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                message.channel.send(embed)
                .then(async msg => {
                  var ctl = 0
                  while (ctl < d.raridade) {
                    sleep(8000);
                    ctl++
                  }
                  let frag, fragR;
                  if (d.raridade == 7) {
                    frag = Math.floor(Math.random() * (200 - 40 + 1)) + 40;
                    fragR = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
                  } else  if (d.raridade == 6) {
                    frag = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
                    fragR = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
                  } else  if (d.raridade == 5) {
                    frag = Math.floor(Math.random() * (30 - 20 + 1)) + 20;
                    fragR = Math.floor(Math.random() * (8 - 1 + 1)) + 1;
                  } else  if (d.raridade == 4) {
                    frag = Math.floor(Math.random() * (25 - 10 + 1)) + 10;
                    fragR = Math.floor(Math.random() * (16 - 1 + 1)) + 1;
                  } else  if (d.raridade == 3) {
                    frag = Math.floor(Math.random() * (9 - 8 + 1)) + 8;
                    fragR = Math.floor(Math.random() * (32 - 1 + 1)) + 1;
                  } else  if (d.raridade == 2) {
                    frag = Math.floor(Math.random() * (7 - 6 + 1)) + 6;
                    fragR = Math.floor(Math.random() * (64 - 1 + 1)) + 1;
                  } else {
                    frag = Math.floor(Math.random() * (5 - 4 + 1)) + 4;
                    fragR = Math.floor(Math.random() * (128 - 1 + 1)) + 1;
                  }

                  const embed = new Discord.MessageEmbed()
                    .setAuthor(`${b.nick}`, b.avatar)
                    .setTitle(`${d.name} Rank:${d.raridade}`)
                    .setDescription(`\n${message.author} conseguiu: **${frag}** fragmentos`)
                    .setColor('#2f3136')
                    .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                  msg.edit(embed)

                  var fragt = b.fragmentos + frag;
                  dbrefCarteira.update({
                    fragmentos: fragt
                  });

                  if (fragR == 1) {
                    let embedDM = new Discord.MessageEmbed()
                      .setTitle(`${message.author.tag}.`)
                      .setDescription("vc rasgou seu Card e deu sorte e ganhou 緑100 coins");
                    message.author.send(embedDM);

                    var coinst = b.coins + 100;
                    dbrefCarteira.update({
                      coins: coinst
                    });
                  };
                });
                return;
              } else {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.author.tag}.`)
                  .setDescription(`cancelou`);
                message.channel.send(embed);
                return;
              }
            });
          });

      } else {
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag}.`)
          .setDescription("VC não tem esse CARD");
        await message.channel.send(embed);
        return;
      }
    }
  });
};