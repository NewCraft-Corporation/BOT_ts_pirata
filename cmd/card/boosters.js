// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
const dir3 = "Servidores/Card/Cards";
const dirB = "Servidores/Card/config/booster";
const dir4 = `${dirB}/pkm`;
const dir5 = `${dirB}/nrt`;
var tc, tb, tc1, cash;

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
};

module.exports.run = async (client, message, args, database) => {
  var sayMessage = args[1];
  if (sayMessage == null) return;

  //message.reply(sayMessage);
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
      tc1 = tc + 1;
      tb = b.boosters;
      cash = b.coins;
      if (tb == 0) {
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag}.`)
          .setDescription(`Você não tem mais boosters`);
        await message.channel.send(embed);
      } else {
        if (sayMessage == "abrir") {
          tb1 = tb - 1
          dbrefCarteira.update({
            boosters: tb1
          });
          var rank = await database.ref(`${dir4}/rank6`).once('value');
          var rankv = rank.val();
          rank6pkm = rankv;
          //console.log(rank6pkm);

          var rank = await database.ref(`${dir4}/rank5`).once('value');
          var rankv = rank.val();
          rank5pkm = rankv;
          //console.log(rank5pkm);

          var rank = await database.ref(`${dir4}/rank4`).once('value');
          var rankv = rank.val();
          rank4pkm = rankv;
          //console.log(rank4pkm);

          var rank = await database.ref(`${dir4}/rank3`).once('value');
          var rankv = rank.val();
          rank3pkm = rankv;
          //console.log(rank3pkm);

          var rank = await database.ref(`${dir4}/rank2`).once('value');
          var rankv = rank.val();
          rank2pkm = rankv;
          //console.log(rank2pkm);

          var rank = await database.ref(`${dir4}/rank1`).once('value');
          var rankv = rank.val();
          rank1pkm = rankv;
          //console.log(rank1pkm); 

          var rank = await database.ref(`${dir5}/rank6`).once('value');
          var rankv = rank.val();
          rank6nrt = rankv;
          //console.log(rank6nrt);

          var rank = await database.ref(`${dir5}/rank5`).once('value');
          var rankv = rank.val();
          rank5nrt = rankv;
          //console.log(rank5nrt);

          var rank = await database.ref(`${dir5}/rank4`).once('value');
          var rankv = rank.val();
          rank4nrt = rankv;
          //console.log(rank4nrt);

          var rank = await database.ref(`${dir5}/rank3`).once('value');
          var rankv = rank.val();
          rank3nrt = rankv;
          //console.log(rank3nrt);

          var rank = await database.ref(`${dir5}/rank2`).once('value');
          var rankv = rank.val();
          rank2nrt = rankv;
          //console.log(rank2nrt);

          var rank = await database.ref(`${dir5}/rank1`).once('value');
          var rankv = rank.val();
          rank1nrt = rankv;
          //console.log(rank1nrt);

          //message.reply(`\n${rank1pkm},${rank2pkm},${rank3pkm},${rank4pkm},${rank5pkm},${rank6pkm}`);

          var randrank1pkm = [rank1pkm[Math.floor(Math.random() * rank1pkm.length)], rank1pkm[Math.floor(Math.random() * rank1pkm.length)], rank1pkm[Math.floor(Math.random() * rank1pkm.length)], rank2pkm[Math.floor(Math.random() * rank2pkm.length)], rank2pkm[Math.floor(Math.random() * rank2pkm.length)], rank3pkm[Math.floor(Math.random() * rank3pkm.length)]];

          //message.reply(`${randrank1pkm}`);

          var randrank2pkm = [rank1pkm[Math.floor(Math.random() * rank1pkm.length)], rank1pkm[Math.floor(Math.random() * rank1pkm.length)], rank1pkm[Math.floor(Math.random() * rank1pkm.length)], rank2pkm[Math.floor(Math.random() * rank2pkm.length)], rank3pkm[Math.floor(Math.random() * rank3pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank5pkm[Math.floor(Math.random() * rank5pkm.length)]];

          //message.reply(`${randrank2pkm}`);

          var randrank3pkm = [rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank4pkm[Math.floor(Math.random() * rank4pkm.length)], rank5pkm[Math.floor(Math.random() * rank5pkm.length)], rank6pkm[Math.floor(Math.random() * rank6pkm.length)]];

          //message.reply(`${randrank3pkm}`);

          //message.reply(`\n${rank1nrt},${rank2nrt},${rank3nrt},${rank4nrt},${rank5nrt},${rank6nrt}`);

          var randrank1nrt = [rank1nrt[Math.floor(Math.random() * rank1nrt.length)], rank1nrt[Math.floor(Math.random() * rank1nrt.length)], rank1nrt[Math.floor(Math.random() * rank1nrt.length)], rank2nrt[Math.floor(Math.random() * rank2nrt.length)], rank2nrt[Math.floor(Math.random() * rank2nrt.length)], rank3nrt[Math.floor(Math.random() * rank3nrt.length)]];

          //message.reply(`${randrank1nrt}`);

          var randrank2nrt = [rank1nrt[Math.floor(Math.random() * rank1nrt.length)], rank1nrt[Math.floor(Math.random() * rank1nrt.length)], rank1nrt[Math.floor(Math.random() * rank1nrt.length)], rank2nrt[Math.floor(Math.random() * rank2nrt.length)], rank3nrt[Math.floor(Math.random() * rank3nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank5nrt[Math.floor(Math.random() * rank5nrt.length)]];

          //message.reply(`${randrank2nrt}`);

          var randrank3nrt = [rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank4nrt[Math.floor(Math.random() * rank4nrt.length)], rank5nrt[Math.floor(Math.random() * rank5nrt.length)], rank6nrt[Math.floor(Math.random() * rank6nrt.length)]];

          //message.reply(`${randrank3nrt}`);

          var randrank = [randrank1pkm[Math.floor(Math.random() * randrank1pkm.length)], randrank2pkm[Math.floor(Math.random() * randrank2pkm.length)], randrank3pkm[Math.floor(Math.random() * randrank3pkm.length)], randrank1pkm[Math.floor(Math.random() * randrank1pkm.length)], randrank2nrt[Math.floor(Math.random() * randrank2nrt.length)], randrank3nrt[Math.floor(Math.random() * randrank3nrt.length)]];

          //message.reply(`\n\n\n${randrank}`);
          var rcard = randrank[Math.floor(Math.random() * randrank.length)];
          //message.reply(`\n\n\n${rcard}`);

          if (tc == 0) {
            var list = [''];
            list[0] = `${rcard}`;
            dbrefCarteira.update({
              cards: list
            });

          } else {
            list = b.cards;
            list[tc] = `${rcard}`;

            dbrefCarteira.update({
              cards: list
            });
          };
          const embed = new Discord.MessageEmbed()
            .setColor('#2f3136')
            .setImage('https://cdn.discordapp.com/attachments/742046290833178725/747556766790975658/lacos-alem-do-sangue-12286028-150820182106.gif')
            .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
          message.channel.send(embed)
            .then(async msg => {
              sleep(11000);
              let dbcard2 = database.ref(`${dir3}/${rcard}`);
              dbcard2.once('value').then(async function(dbc) {
                var d = dbc.val();
                const embedd = new Discord.MessageEmbed()
                  .setTitle(`${d.name} Rank:${d.raridade}`)
                  .setColor('#2f3136')
                  .setImage(d.gif)
                  .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                msg.edit(embedd);
              });
            });
        } else if (sayMessage == "give") {
          let user2 = args[2];
          let valor = parseInt(args[3]);
          //message.reply(`CMD:${sayMessage}`);
          //message.reply(`USER:${args[2]}`);
          let user2id = user2.slice(0, -1).replace(/[\\<>@#&!]/g, "");
          if (user2id == message.author.id ) {
            let embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}.`)
              .setDescription(`Porque você quer manda um booster para você mesmo!?!?\nNão faz sentido`);
            message.channel.send(embed);
            return;
          };
          message.channel.send(`${user2}, Você aceita um **booster** de <@!${message.author.id}> por 緑**${valor}**?\nEscreva: **1** para confimar ou qualquer outra coisa para cancelar`)
            .then(msg1 => {
              let simnao = message.channel.createMessageCollector(sn => sn.author.id === user2id, {
                max: 1
              })
                .on('collect', sn => {
                  var ctl = sn.toString();
                  if (ctl == "1") {
                    let dbrefCarteira2 = database.ref(`${dir}/${user2id}`);
                    dbrefCarteira2.once('value').then(async function(db2) {
                      if (db.val() == null) {
                        let embed = new Discord.MessageEmbed()
                          .setTitle(`${message.author.tag}.`)
                          .setDescription(`${user2} não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
                        await message.channel.send(embed);
                      } else {
                        const b2 = db2.val();

                          coins1 = b.coins + valor;
                          coins2 = b2.coins - valor;
                          if (b2.coins < valor) {
                            let embed = new Discord.MessageEmbed()
                              .setTitle(`${message.author.tag}.`)
                              .setDescription(`${user2} não tem 緑 o suficiente`);
                            message.channel.send(embed);
                            return;
                          }
                          dbrefCarteira2.update({
                            coins: coins2
                          });
                          dbrefCarteira.update({
                            coins: coins1
                          });

                        tb2 = b2.boosters;
                        tb1 = tb - 1
                        tb2 = tb2 + 1
                        dbrefCarteira.update({
                          boosters: tb1
                        });
                        dbrefCarteira2.update({
                          boosters: tb2
                        });
                        const embed = new Discord.MessageEmbed()
                          .setTitle("BOOSTER")
                          .setDescription(`${message.author.tag} enviou um **booster** para ${user2} por 緑**${valor}**`)
                          .setColor('#2f3136')
                          .setImage('https://cdn.discordapp.com/attachments/742046290833178725/747600204613681242/6ea09eb51b46a9e36c9bade5788f4a3a597a615br1-500-269_hq.gif')
                          .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                        message.channel.send(embed);                        
                      };
                    });
                  } else {
                    let embed = new Discord.MessageEmbed()
                      .setTitle(`${message.author.tag}.`)
                      .setDescription(`${user2} cancelou`);
                    message.channel.send(embed);
                  }
                })
            })

        } else if (sayMessage == "get") {
          var vips = false;
          var premium = await database.ref(`Servidores/config/vip`).once('value');
          var premiums = premium.val();
          var ctl = 0;

          while (ctl < premiums.length) {
            if (message.author.id == premiums[ctl]) {
              vips = true;
            }
            ctl++;
          };

          if (vips == false) {
            message.reply("você tem que ser premium");
            return;
          };

          if (message.guild.id == "742487757988954213") {
            tb1 = tb + 1
            var btsv = 6
            var cash2 = cash - btsv
            dbrefCarteira.update({
              boosters: tb1,
              coins: cash2
            });
            let embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}.`)
              .setDescription(`você comprou um boosters por 緑${btsv}`);
            message.channel.send(embed);
          } else {
            let embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}.`)
              .setDescription(`só pode comprar boosters no servidor\ndo **TS PIRATA**: https://discord.gg/7FkJbCy`);
            message.channel.send(embed);
          }
        };
      };
    };
  });
};