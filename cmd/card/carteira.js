const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";

module.exports.run = async (client, message, args, database) => {

  let dbref = database.ref(`${dir}/${message.author.id}`);

  dbref.once('value').then(async function(db) {
    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
      await message.channel.send(embed);
    } else {   
      const b = db.val();
      let embed = new Discord.MessageEmbed()
        .setTitle("CARTEIRA")
        .setDescription(`**Nome: ${b.nick}**\n  ${b.status} \n\n**Coins: 緑${b.coins}\nBoosters: ${b.boosters}\nTotal de cartas: ${b.totaldecartas}**`)
        .setThumbnail(b.avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      await message.channel.send(embed);

    }
  });

};
