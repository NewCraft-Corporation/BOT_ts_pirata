const Discord = require("discord.js");
const config = require("./config.json"); 
const prs = config.pr;
const pr = prs + "card";

module.exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  message.reply(` usou o cmd ${pr} help`);
  var list = ['https://cdn.discordapp.com/attachments/742046290833178725/745772496577495050/12-Animes-Para-Quem-Gosta-De-Sakura-Card-Captors-Com-Trailers.jpg', 'https://cdn.discordapp.com/attachments/742046290833178725/745772815222964324/1453393774-c84a53a89c17666b3602714392caac48.jpeg', 'https://cdn.discordapp.com/attachments/742046290833178725/745773013609480222/SakuraCardCaptors-CantinaNews1.jpg', 'https://cdn.discordapp.com/attachments/742046290833178725/745773141174779996/asdsad.jpg'
  ];
  var imgRand = list[Math.floor(Math.random() * list.length)];

  const embed = new Discord.MessageEmbed()
    .setTitle(`HELP DO ANIME CARD GAME`)

    .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")

    .setColor("#00ff00")

    .setURL("http://newcraft.6te.net/tspirata")

    .addField("**CMD DO ACG**", "===========", false)

    .addField(`${pr} criarcarteira`, "criar a seu carteira", true)

    .addField(`${pr} status {novo}`, "edita seus status da sua carteira", true)

    .addField(`${pr} carteira`, "ver a seu carteira", true)

    .addField(`${pr} deletarcarteira`, "deleta seu carteira e seus coleção", true)

    .addField(`${pr} ver`, "ver todos suas cartas da sua coleção", true)

    .addField(`${pr} del {id}`, "deleta sua carta", true)

    .addField(`${pr} dar {d} {nick}`, "dar uma carta para outro usuario", true)

    .addField(`${pr} buster abrir`, "abre um buster com 3 cards", true)

    .addField(`${pr} buster give {nick}`, "dar de presente um buster para um usuario", true)

    .setImage(imgRand)

    .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif")
    
  message.channel.send(embed);  

};
