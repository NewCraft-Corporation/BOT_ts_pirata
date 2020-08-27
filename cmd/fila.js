// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
exports.run = (client, message, args, database, ops) => {
  if(!message.member.roles.cache.find(r => r.name === "DJ")) {
    message.channel.send(`<@!${message.author.id}> vc ñ é DJ`) 
    return;
  };
     let fetched = ops.active.get(message.guild.id);
    if (!fetched) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:NÃO ENTENDI:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`eu não estou tocando nada.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
    return;
    }; 

    let fila = fetched.fila;
    let tocandoAgora = fila[0];

    let resp = `**1**.Tocando agora: ${tocandoAgora.titulo}`

    for (i = 1; i < fila.length; i++) {
        resp += `\n**${i+1}**. ${fila[i].titulo} \`[${fila[i].tempo}]\``
    }
    let avatar = message.author.displayAvatarURL({format: 'png'});
    let embed = new Discord.MessageEmbed()
      .setTitle(":musical_note: FILA :musical_note:")
      .setAuthor(`${message.author.tag}`, message.author.avatarURL())
      .setDescription(`${resp}`)
      .setColor("#2f3136")
      .setThumbnail(avatar);
     
    message.channel.send(embed);
    
    /*
    let embed = new Discord.MessageEmbed()
    .setAuthor(`Informações da fila.`, client.user.avatarURL())
    .setDescription(`${resp}`)
    .setColor("#36393F");
    message.channel.send(embed)
    */
}