const Discord = require("discord.js");
const yts = require('youtube-search');
const ytdl = require('ytdl-core');
const moment = require("moment");

var opts = yts.YouTubeSearchOptions = {
    maxResults: 10,
    key: "AIzaSyCPRM3J_O8QB8-YLtV3ZiS9xjIKDbbXsK4"
};

exports.run = (client, message, args, database, ops) => {
  if(!message.member.roles.cache.find(r => r.name === "DJ")) {
    message.channel.send(`<@!${message.author.id}> vc ñ é DJ`) 
    return;
  };

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

    let pesq = args.join(" ");
    if (!pesq) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":warning:NÃO POSSO ENTRAR:warning:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`digite um vídeo válido.`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      
      message.channel.send(embed);
      return;
    };

    yts(pesq, opts, async function(err, res) {
        if (err) console.log(err);
        let a = res[0];

        ytdl.getInfo(a.id,
        async function(err, rVideo) {

            let data = ops.active.get(message.guild.id) || [];

            if (!data.connection) data.connection = await message.member.voice.channel.join();
            if (!data.fila) data.fila = new Array();
            data.guildID = message.guild.id;

            let rTempo = moment.utc(rVideo.length_seconds*1000).format("HH:mm:ss");

            data.fila.push({
                titulo: rVideo.title,
                url: rVideo.url,
                views: rVideo.short_view_count_text,
                tempo: rTempo,
                author: message.author.tag
            });

            if (!data.dispatcher) tocar(client, ops, data);
            else {
                let avatar = message.author.displayAvatarURL({format: 'png'});
                let embed = new Discord.MessageEmbed()
                  .setTitle(":musical_note:ADICIONADO:musical_note:")
                  .setAuthor(`${message.author.tag}`, message.author.avatarURL())
                  .setDescription(`Adicionado a fila: ${rVideo.title}\nPedido por: ${message.author.tag}.`)
                  .setColor("#2f3136")
                  .setThumbnail(avatar);
                message.channel.send(embed);
            }

            ops.active.set(message.guild.id, data)
        });
    });

    async function tocar(client, ops, data) {
      let avatar = message.author.displayAvatarURL({format: 'png'});
      let embed = new Discord.MessageEmbed()
        .setTitle(":musical_note: DJ/TS :musical_note:")
        .setAuthor(`${message.author.tag}`, message.author.avatarURL())
        .setDescription(`Tocando agora: ${data.fila[0].titulo}\nDuração: ${data.fila[0].tempo}\nAuthor: ${data.fila[0].author}`)
        .setColor("#2f3136")
        .setThumbnail(avatar);
      message.channel.send(embed);

      data.dispatcher = await data.connection.play(ytdl(data.fila[0].url, {filter: 'audioonly'}));
      data.dispatcher.guildID = data.guildID;

      data.dispatcher.once('finish', function() {
        finalizar(client, ops, this);
      });
    };

    function finalizar(client, ops, dispatcher) {
        let fetched = ops.active.get(dispatcher.guildID);
        fetched.fila.shift();
        
        if (fetched.fila.length > 0) {
            ops.active.set(dispatcher.guildID, fetched);
            tocar(client, ops, fetched);

        } else { 
            ops.active.delete(dispatcher.guildID);
            let vc = client.guilds.cache.get(dispatcher.guildID).me.voice.channel;
            if (vc) vc.leave();
        }   
    };
};
