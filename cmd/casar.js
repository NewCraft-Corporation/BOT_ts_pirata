const Discord = require("discord.js");
const c = require('../config.json');
const mergeImg = require('merge-img');
let dir6 = "Servidores/Rp/cartorio/certidaodecasamento";
var list = ['https://i0.wp.com/haruhichan.com/wpblog/wp-content/uploads/Tomoya-Okazaki-x-Nagisa-Furukawa-Clannad-anime-series-haruhichan.com-2.gif', 'https://2.bp.blogspot.com/-D9IPMvPbI_s/V4pp1KdeCbI/AAAAAAAAMlM/aX8mRtIVxQoO3NQwv8UMhcYRLaxEqf9igCLcB/s640/gif_03.gif', 'https://3.bp.blogspot.com/-aIudQs8QDi0/VSv1CrZhXlI/AAAAAAAAA14/dwthdzNydyM/s1600/Saito_x_louise3.gif', 'https://i.pinimg.com/originals/36/c7/21/36c72113d8fa9052e01b34736ff25cbf.gif'];

var rand = list[Math.floor(Math.random() * list.length)];
let global_count = 0;
var ctd;

module.exports.run = async (client, message, args, database) => {
    
    let user1 = message.guild.member(message.mentions.users.firstKey());
    let user2 = message.guild.member(message.author);
    
    if (message.author.id == user1.user.id) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Porque você quer casar com você mesmo!?!?\nNão faz sentido`);
      message.channel.send(embed);      
    } else {
      let dbref1 = database.ref(`${dir6}/${message.author.id}`);
      dbref1.once('value').then(async function(db) {
        if (db.val() == null) {
          let dbref2 = database.ref(`${dir6}/${user1.user.id}`);
          dbref2.once('value').then(async function(db2) {
            if (db2.val() == null) {
              await mergeImg([ `https://cdn.discordapp.com/avatars/${user2.user.id}/${user2.user.avatar}.png`, 'https://cdn.discordapp.com/attachments/742046290833178725/748027940729782272/png-transparent-heart-green-graphy-hearts-love-blue-white.png', `https://cdn.discordapp.com/avatars/${user1.user.id}/${user1.user.avatar}.png` ]).then((img) => {
              img.write(`./cmd/img/couple_${message.guild.id}_${global_count}.png`, () => {
                console.log(`A foto do casal [couple_${message.guild.id}_${global_count}.png] foi criada.`);
                message.channel.send(`${user1.user}, Você recebeu um pedido de casamento de ${user2.user}, Você aceita?\nEscreva: **1** para confimar ou qualquer outra coisa para cancelar`)
                .then(msg1 => {
                  let simnao = message.channel.createMessageCollector(sn => sn.author.id === user1.user.id, {
                      max: 1
                  })
                  .on('collect', sn => {
                    var ctl = sn.toString();
                    if (ctl == "1") {
                      ctd = `Certificamos que ${user2.user} casou-se com ${user1.user}\nno servidor: **${message.guild.name}**\n\n\nZeus o deus do Olimpo\nAssinatura de um deus`;
                      var dbref = database.ref(`${dir6}/${message.author.id}`);
                      dbref.set({
                        conjuge: user1.user.id,
                        conteudo: ctd
                      })
                      var dbref = database.ref(`${dir6}/${user1.user.id}`);
                      dbref.set({
                        conjuge: user1.user.id,
                        conteudo: ctd
                      })
                      var embedd = new Discord.MessageEmbed()
                        .setTitle('Certidão de Casamento')
                        .setColor('#00ff00')
                        .setDescription(ctd)
                        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                      user1.user.send(embedd);
                      var embedd = new Discord.MessageEmbed()
                        .setTitle('Certidão de Casamento')
                        .setColor('#00ff00')
                        .setDescription(ctd)
                        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                      message.author.send(embedd);
                      const embed = new Discord.MessageEmbed()
                        .setTitle('CASAMENTO')
                        .setColor('#00ff00')
                        .setDescription(`:ring:${user2.user} **CASOU COM** ${user1.user}:ring:`)
                        .setImage(rand)
                        .setTimestamp()
                        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                      message.channel.send(embed);
                      message.channel.send(new Discord.MessageAttachment(`./cmd/img/couple_${message.guild.id}_${global_count}.png`));
                    } else {
                      let embed = new Discord.MessageEmbed()
                        .setTitle(`${message.author.tag}.`)
                        .setDescription(`${user1.user} recusou`);
                      message.channel.send(embed);
                      return;
                    }
                  })
                })          
              })
            });
            } else {
              let embed = new Discord.MessageEmbed()
                .setTitle(`${message.author.tag}.`)
                .setDescription(`${user1.user} já tem um cônjuge`);
              message.channel.send(embed);
              return;
            }
          });
        } else {
          let embed = new Discord.MessageEmbed()
            .setTitle(`${message.author.tag}.`)
            .setDescription(`você já tem um cônjuge`);
          message.channel.send(embed);
          return;
        }
      });
      
      
    }
}