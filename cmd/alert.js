// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.find(r => r.name === "TS_MANAGE")) {
    message.channel.send(`<@!${message.author.id}> vc ñ é TS MANAGE`) 
    return;
  };
    message.channel.send("Onde vocé quer enviar a Alert?")
    .then(msg1 => { 
        let canal = message.channel.createMessageCollector(c => c.author.id === message.author.id,{
            max: 1
        })
        .on('collect', c => { 
            let channel = c.mentions.channels.first(); 
            if (!channel) {
                message.channel.send("Mencione um canal!")
            } else {
                message.channel.send("Qual o titulo do Alert?")
                .then(msg2 => {
                    let titulo = message.channel.createMessageCollector(t => t.author.id === message.author.id,{
                        max: 1
                    }).on('collect', t => { 
                        let title = t.content; message.channel.send("Qual o descrição do Alert?")
                        .then(msg3 => { 
                            let descrição = message.channel.createMessageCollector(d => d.author.id === message.author.id,{
                                max: 1
                            }).on('collect', d => { 
                                let desc = d.content; 
                                let avatar = message.author.displayAvatarURL({format: 'png'});
                                let anunciar = new Discord.MessageEmbed()
                                .setColor('RED')
                                .setTitle(title)
                                .setDescription(desc)
                                .setThumbnail(avatar)
                                .setAuthor(message.author.tag, avatar)
                                .setImage("https://cdn.discordapp.com/attachments/742046290833178725/745843878791348305/unnamed.gif")
                                .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
                                client.channels.cache.get(channel.id).send(anunciar)
                                message.reply(`alert enviado no chat: <#${channel.id}>`);
                            });
                        });
                    });
                });
            };
        });
    });
};
