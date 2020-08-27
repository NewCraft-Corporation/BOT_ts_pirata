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
      dbref.remove();
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você excluiu usa Carteira e cartas!`);
      await message.channel.send(embed);
    }
  });

};