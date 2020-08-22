exports.run = (client, message, args, database, ops) => {
    if(!message.member.roles.cache.find(r => r.name === "DJ")) {
      message.channel.send(`<@!${message.author.id}> vc ñ é DJ`) 
      return;
    };

    if (ops.active.get(message.guild.id)) ops.active.delete(message.guild.id);
    
    if (!message.member.voice.channel) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:NÃO POSSO ENTRAR:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`entre em um canal de voz.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
    return;
    };
    if (!message.guild.me.voice.channel) {
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
    if (message.member.voice.channel !== message.guild.me.voice.channel) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:NÃO POSSO ENTRAR:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`entre em um canal de voz.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
    return;
    };

    message.guild.me.voice.channel.leave();
    let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":octagonal_sign: STOP :octagonal_sign:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`estou me retirando do canal de voz.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
};
