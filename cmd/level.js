// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");

exports.run = (client, message, args, database) => {
    let membro = message.mentions.users.first() || client.users.cache.get(args[0]);
    if (!membro) membro = client.users.cache.get(message.author.id);
    
    let dbref = database.ref(`Servidores/Levels/${message.guild.id}/${membro.id}`);
    
    dbref.once('value').then(async function(db) {
        if (db.val() == null) return message.reply("esse usuários não se encontra no meu banco de dados.");
        let avatar = membro.displayAvatarURL({format: 'png'});
        let embed = new Discord.MessageEmbed()
        .setTitle("LEVEL DE BURRICE")
        .setAuthor(`${membro.tag}`, membro.avatarURL())
        .setDescription(`**SEU BURRICE ESTA NO LEVEL ${db.val().level}!\nXP PARA PRÓXIMO LEVEL: (${db.val().xp}/${db.val().level*100})**`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
        message.channel.send(embed);
    })
};
