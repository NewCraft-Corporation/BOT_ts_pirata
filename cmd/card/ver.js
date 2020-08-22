const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
var tc;

module.exports.run = async (client, message, args, database) => {
  let dbrefCarteira = database.ref(`${dir}/${message.author.id}`);
  dbrefCarteira.once('value').then(async function(db) {    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
      await message.channel.send(embed);
    } else { 
      const b = db.val();
      tc = b.totaldecartas;
      var dbref = await database.ref(`${dir2}/${message.author.id}/sleeve`).once('value');
      let embed = new Discord.MessageEmbed()
        .setTitle("Lista de Cartas")
        .setDescription(`Você tem ${tc} de card\n\n**${dbref.val()}**`)
        .setThumbnail(b.avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      await message.channel.send(embed);
    };
  });
};
