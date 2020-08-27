// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');
const config = require("../config.json");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Cards";
const cmd = `${config.pr}.length` 
var tc, tc2, trocar, n, n2, card1, card2;
var list = [];
var list2 = [];
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
};

module.exports.run = async (client, message, args, database) => {

  //if (message.author.id !== "390674797908197386") return message.reply("Estamos em manuntenção no Banco de Dandos do ACG");
  const sayMessag = message.content.trim().slice(cmd).split(/ +/g);
  const sayM = args.join(' ');
  
  const sayMessage = sayMessag.shift().toLowerCase();

  if ( sayMessage == "" ) {
    message.reply(` não existe esse comando, use **${config.pr}card help**`);
    return;
  };


  try {
    const commandFile = require(`./card/${sayMessag[0]}.js`)
    commandFile.run(client, message, args, database);
  } catch (err) {

    var dbref = await database.ref(`${dir2}/${sayMessag[0]}`).once('value');
    var dbref2 = await database.ref(`${dir2}/${sayMessag[2]}`).once('value');
    trocar = false;
    if (dbref2.val() == null) {
      trocar = true;
    };

    if (dbref.val() == null) {
      console.error('Erro:' + err);
      message.reply(`não existe esse comando, use **${config.pr}card help**`);
      return;
    };

    let dbrefCarteira = database.ref(`${dir}/${message.author.id}`);
    dbrefCarteira.once('value').then(async function(db) {    
      if (db.val() == null) {
        let embed = new Discord.MessageEmbed()
          .setTitle(`${message.author.tag}.`)
          .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
        await message.channel.send(embed);
      } else { 
        const b = db.val();
        tc = b.cards.length;
        var ctl = 0;
        var bol = false;
        while (ctl < tc) {
          if (sayMessag[0] == b.cards[ctl]) {
            bol = true;
            n = ctl;
            list = b.cards;
          }
          ctl++;
        };
        if (bol) {
          if (sayMessag[1]) {
          let user2 = sayMessag[1];
          if (trocar) {
          let valor = parseInt(sayMessag[2]);
          let user2id = user2.slice(0, -1).replace(/[\\<>@#&!]/g, "");
          if (user2id == message.author.id ) {
            let embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}.`)
              .setDescription(`Porque você quer manda um card para você mesmo!?!?\nNão faz sentido`);
            message.channel.send(embed);
            return;
          };
          //message.channel.send(`${user2}, Você aceita um **CARD** de <@!${message.author.id}> por 緑**${valor}**?\nEscreva: **1** para confimar ou qualquer outra coisa para cancelar`)
          
          var dbcard2 = database.ref(`${dir2}/${sayMessag[0]}`);
          dbcard2.once('value').then(async function(dbc) {
            var d = dbc.val();
            const embed = new Discord.MessageEmbed()
              .setAuthor(`${b.nick}`, b.avatar)
              .setTitle(`${d.name} Rank:${d.raridade}`)
              .setDescription(`${user2}, Você aceita este **CARD** de <@!${message.author.id}> por 緑**${valor}**?\nEscreva: **1** para confimar ou qualquer outra coisa para cancelar`)
              .setColor('#2f3136')
              .setImage(d.gif)
              .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
            await message.channel.send(embed);
          })
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
                    };

                    if (!b2.cards) {
                      tc2 = 0;
                    } else {
                      tc2 = b2.cards.length;
                    }
                    var tc12 = tc2 + 1;
                    if (tc2 == 0) {
                      list2[0] = `${sayMessag[0]}`;
                      dbrefCarteira2.update({
                        cards: list2
                      });

                    } else {
                      list2 = b2.cards;
                      list2[tc2] = `${sayMessag[0]}`;
                    
                      dbrefCarteira2.update({
                        cards: list2
                      });                        
                    };
                    const embed = new Discord.MessageEmbed()
                      .setColor('#2f3136')
                      .setImage('https://cdn.discordapp.com/attachments/742046290833178725/747600204613681242/6ea09eb51b46a9e36c9bade5788f4a3a597a615br1-500-269_hq.gif')
                      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                    message.channel.send(embed)
                    .then(async msg => {
                      sleep(3000);
                      var dbcard2 = database.ref(`${dir2}/${sayMessag[0]}`);
                      dbcard2.once('value').then(async function(dbc) {
                        var d2 = dbc.val();
                        const embed = new Discord.MessageEmbed()
                          .setAuthor(`${b2.nick}`, b2.avatar)
                          .setTitle(`${d2.name} Rank:${d2.raridade}`)
                          .setColor('#2f3136')
                          .setImage(d2.gif)
                          .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                        await msg.edit(embed);
                      });
                    });
                  };
                });
              } else {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.author.tag}.`)
                  .setDescription(`${user2} cancelou`);
                message.channel.send(embed);
              }
            });
          });
          return;
          } else {
          let user2id = user2.slice(0, -1).replace(/[\\<>@#&!]/g, "");
          if (user2id == message.author.id ) {
            let embed = new Discord.MessageEmbed()
              .setTitle(`${message.author.tag}.`)
              .setDescription(`Porque você quer trocar um card para você mesmo!?!?\nNão faz sentido`);
            message.channel.send(embed);
            return;
          };
          let dbrefCarteira2 = database.ref(`${dir}/${user2id}`);
          dbrefCarteira2.once('value').then(async function(db) {    
            if (db.val() == null) {
              let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.tag}.`)
                .setDescription(`${user2} não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
              await message.channel.send(embed);
            } else { 
              const b2 = db.val();
              tc2 = b2.cards.length;
              var ctl = 0;
              var bol2 = false;
              while (ctl < tc2) {
                if (sayMessag[2] == b2.cards[ctl]) {
                  bol2 = true;
                  n2 = ctl;
                  list2 = b2.cards;
                }
                ctl++;
              };
              if (bol2) {
                var dbcard2 = database.ref(`${dir2}/${sayMessag[0]}`);
                dbcard2.once('value').then(async function(dbc) {
                  var d = dbc.val();
                  var dbcard22 = database.ref(`${dir2}/${sayMessag[2]}`);
                  dbcard22.once('value').then(async function(dbc) {
                    var d2 = dbc.val();
                    card1 = sayMessag[0];
                    card2 = sayMessag[2];
                    const embed = new Discord.MessageEmbed()
                      .setAuthor(`${b.nick}`, b.avatar)
                      .setTitle(`${d.name} Rank:${d.raridade}`)
                      .setDescription(`${user2}, Você aceita trocar: **${d2.name}** por **${d.name}** de <@!${message.author.id}>?\nEscreva: **1** para confimar ou qualquer outra coisa para cancelar`)
                      .setColor('#2f3136')
                      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                    await message.channel.send(embed)
                    .then(msg1 => {
                      let simnao = message.channel.createMessageCollector(sn => sn.author.id === user2id, {
                        max: 1
                      })
                      .on('collect', sn => {
                        var ctl = sn.toString();
                        if (ctl == "1") {
                          var tc1
                          var tc12
                          if ( tc == 1 ) {
                              dbrefCarteira.update({
                              cards: null
                              });
                          } else {
                            var ctl = 0;
                            tc1 = tc - 1;
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
                          };

                          if ( tc2 == 1 ) {
                              dbrefCarteira2.update({
                              cards: null
                              });
                          } else {
                            var ctl = 0;
                            tc12 = tc2 - 1;
                            while (ctl < tc2) {
                              if (ctl == n2) {
                                list2[ctl] = list2[tc12];
                                //console.log(list[ctl]);
                                ctl++
                              } else {
                                //console.log(list[ctl]);
                                ctl++;
                              }
                              if (ctl == tc12) {
                                list2[ctl] = null;
                              };
                            };
                            dbrefCarteira2.update({
                              cards: list2
                            });
                          };

                          if (tc1 == 0) {
                            list[0] = `${card2}`;
                            dbrefCarteira.update({
                              cards: list
                            });

                          } else {
                            list = b.cards;
                            list[tc1] = `${card2}`;
                          
                            dbrefCarteira.update({
                              cards: list
                            });
                              
                          };
                          if (tc12 == 0) {
                            list2[0] = `${card1}`;
                            dbrefCarteira2.update({
                              cards: list
                            });

                          } else {
                            list2 = b2.cards;
                            list2[tc12] = `${card1}`;
                          
                            dbrefCarteira2.update({
                              cards: list2
                            });
                          };
                          var dbcard2 = database.ref(`${dir2}/${sayMessag[0]}`);
                          dbcard2.once('value').then(async function(dbc) {
                          var d2 = dbc.val();
                          const embed = new Discord.MessageEmbed()
                            .setAuthor(`${b.nick}`, b.avatar)
                            .setTitle(`${d2.name} Rank:${d2.raridade}`)
                            .setColor('#2f3136')
                            .setImage(d2.gif)
                            .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                          message.channel.send(embed)
                          .then(async msg => {
                            sleep(3000);
                            const embed = new Discord.MessageEmbed()
                              .setColor('#2f3136')
                              .setImage('https://cdn.discordapp.com/attachments/742046290833178725/747942423329767514/71872b5486902be30e86b4d1b34e8bb4d294eba1_hq.gif')
                              .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                            msg.edit(embed)
                          .then(async msg => {
                            sleep(6000);
                            var dbcard2 = database.ref(`${dir2}/${sayMessag[2]}`);
                            dbcard2.once('value').then(async function(dbc) {
                              var d2 = dbc.val();
                              const embed = new Discord.MessageEmbed()
                                .setAuthor(`${b2.nick}`, b2.avatar)
                                .setTitle(`${d2.name} Rank:${d2.raridade}`)
                                .setColor('#2f3136')
                                .setImage(d2.gif)
                                .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                              msg.edit(embed);
                              return;
                            });
                          });
                          });
                          });

                        } else {
                          let embed = new Discord.MessageEmbed()
                            .setTitle(`${message.author.tag}.`)
                            .setDescription(`${user2} cancelou`);
                          message.channel.send(embed);
                          return;
                        };
                      });
                    });
                  });
                });

              } else {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.author.tag}.`)
                  .setDescription(`${user2} não tem este Card!`);
                await message.channel.send(embed);
              }
            }
          });
          return;
          }
        } else {
           var dbcard2 = database.ref(`${dir2}/${sayMessag[0]}`);
          dbcard2.once('value').then(async function(dbc) {
            var d = dbc.val();
            const embed = new Discord.MessageEmbed()
              .setAuthor(`${b.nick}`, b.avatar)
              .setTitle(`${d.name} Rank:${d.raridade}`)
              .setColor('#2f3136')
              .setImage(d.gif)
              .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
            await message.channel.send(embed);
          });
          return;
        };
      };
      message.reply(` não existe esse comando, use **${config.pr}card help**`);
      };
    });
  };
};