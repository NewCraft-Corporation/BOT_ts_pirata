// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const config = require("../config.json"); 
const pr = config.pr;

module.exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  message.reply(` usou o cmd ${pr}help`);
  var list = ['https://i.pinimg.com/originals/50/12/88/501288f32ce07bacb12ad3ff377051f3.gif', 'https://giffiles.alphacoders.com/203/203467.gif', 'https://3.bp.blogspot.com/-2A6taGpTGaM/XOWdQG3yumI/AAAAAAAAcSA/sjjd94oZBjko5GDqrC6keqXSGejPu4n5wCLcBGAs/s1600/kawaii-cute-fofo-anime-gif%2B%25281%2529.gif', 'https://64.media.tumblr.com/94802807184ecfdbb66e2a4413ad1e61/tumblr_odefhaRkLR1tvwiiwo1_500.gif'
  ];
  var imgRand = list[Math.floor(Math.random() * list.length)];

  const embed = new Discord.MessageEmbed()
    .setTitle(`HELP`)

    .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")

    .setColor("#00ff00")

    .setURL("http://newcraft.6te.net/tspirata")

    .addField("**CMD NO SERVER**", "===========", false)

    .addField(`${pr}avatar`, "retorna o link do seu atual avatar", true)

    .addField(`${pr}myid`, "retorna o seu id de usuario", true)

    .addField(`${pr}oi`, "só para dar um oi >_<", true)

    .addField(`${pr}time`, "tempo de atividade", true)

    .addField(`${pr}nctv`, "site de animes", true)

    .addField(`${pr}level`, "nivel de burrice", true)

    .addField(`${pr}ranking`, "rank de burrice", true)

    .addField("**CMD NO SERVER DE DIVERSÃO**", "===========", false)

    .addField(`${pr}hug {nick}`, "para dar um abraço", true)

    .addField(`${pr}kiss {nick}`, "para dar um beijo", true)

    .addField(`${pr}slap {nick}`, "para dar um tapa", true)

    .addField(`${pr}attack {nick}`, "para dar um ataque", true)

    .addField(`${pr}coinflip`, "cara ou coroa", true)

    .addField(`${pr}ppt`, "pedra, papel ou tesoura", true)

    .addField(`${pr}dado`, "dado de 6 lados", true)

    .addField(`${pr}card help`, "ajuda do AGC", true) /*

    .addField("**CMD DE MUSICA**", "===========", false)

    .addField(`${pr}play`, "coloca uma musica {somente para DJ}", true)

    .addField(`${pr}skip`, "pula a musica", true)

    .addField(`${pr}stop`, "para a musica {somente para DJ}", true)

    .addField(`${pr}fila`, "lista de musicas em reprodução", true)*/

    .setImage(imgRand)

    .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif")
    
    message.channel.send(embed);  

};
