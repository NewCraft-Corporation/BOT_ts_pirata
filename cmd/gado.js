// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js");
const config = require("../config.json"); 

exports.run = async (client, message, args, database) => {

var bol = false;
var dbref = await database.ref(`Servidores/config/vip`).once('value');
var dbrefs = dbref.val();
var ctl = 0;

while (ctl < dbrefs.length) {
  if (message.author.id == dbrefs[ctl]) {
    bol = true;
  }
  ctl++;
};

if (bol == false) {
  message.reply("você tem que ser premium");
  return;
};

var list = [ 'https://www.comprerural.com/wp-content/uploads/2018/08/37508024_242044276456245_1079161999713107968_n.jpg', 'https://nutricaoesaudeanimal.com.br/wp-content/uploads/2018/09/242471-como-fazer-uma-gestao-eficiente-em-gado-de-corte.jpg', 'https://beefpoint-wpengine.netdna-ssl.com/wp-content/uploads/2020/05/Food-Tank-28-Livestock-Farmers-360x216.jpeg', 'https://dicas.boisaude.com.br/wp-content/uploads/2020/04/gado-a-pasto.jpg', 'https://amazonia.org.br/wp-content/uploads/2019/02/gado-com-brinco-rastreamento-1024x683.jpg', 'https://www.agromogiana.com.br/wp-content/uploads/2020/05/lucro-com-gado-de-corte-1-768x492-1.jpg', 'https://emc.acidadeon.com/dbimagens/gado__790x505_14092018110432.jpg', 'https://www.sindicatoruraldebelavista.com.br/v2/wp-content/uploads/2018/06/gado20140122_0005-1.jpg', 'https://s2.glbimg.com/V4XsshzNU57Brn3e127b80Rbk24=/e.glbimg.com/og/ed/f/original/2016/05/30/gado.jpg', 'https://www.portaldasmissoes.com.br/uploads/empreendimentos/1548/0091809_regular_gado-xucro-gado-orelhano-gado-franqueiro-gado-orelhano-gado-gaucho-regiao-das-missoes-origem-fone-restaurante-(3).jpg', 'https://news.un.org/pt/sites/news.un.org.pt/files/styles/un_news_full_width/public/thumbnails/image/2015/10/Gado.jpg?itok=r6i_ucJX' ];

var rand = list[Math.floor(Math.random() * list.length)];

  const embed = new Discord.MessageEmbed()
        .setTitle('OLHA O GADO')
        .setColor('#00ff00')
        .setThumbnail(message.guild.iconURL())
        .setImage(rand)
        .setTimestamp()
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
