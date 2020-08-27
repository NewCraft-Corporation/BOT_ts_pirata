// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
exports.run = (client, message, args, database, ops) => {
    
    
    let fetched = ops.active.get(message.guild.id);
    if (!fetched) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:CMD NÃO FEITO:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`não existe nada em minha fila.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
      return;
    };

    if (message.member.voiceChannel !== message.guild.me.voiceChannel) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:CMD NÃO FEITO:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`entre no meu canal de voz.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
      return;
    };

    let userCount = message.member.voice.channel.members.size;
    let required = Math.ceil(userCount/2);

    if (!fetched.fila[0].voteSkips) fetched.fila[0].voteSkips = [];
    if (fetched.fila[0].voteSkips.includes(message.member.id)) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:CMD NÃO FEITO:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`você já votou para pular. ${fetched.fila[0].voteSkips.length}/${required} votos necessários.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
      return;
    };
    fetched.fila[0].voteSkips.push(message.member.id);

    ops.active.get(message.guild.id, fetched);

    if (fetched.fila[0].voteSkips.length >= required) {
       let embed = new Discord.MessageEmbed()
        .setTitle(":track_next: SKIP :track_next:")
        .setDescription(`A música atual foi pulada com sucesso`)
        .setColor("#2f3136")
        .setThumbnail(message.guild.iconURL());
      
      message.channel.send(embed);
      return fetched.dispatcher.emit('finish');
    }

    let avatar = message.author.displayAvatarURL({format: 'png'});
    let embed = new Discord.MessageEmbed()
      .setTitle(":tickets: SKIP :tickets:")
      .setAuthor(`${message.author.tag}`, message.author.avatarURL())
      .setDescription(`você votou para pular a música. ${fetched.fila[0].voteSkips}/${required} votos necessários.`)
      .setColor("#2f3136")
      .setThumbnail(avatar);
      
    message.channel.send(embed);
};