const Discord = require("discord.js");
let dir6 = "Servidores/Rp/cartorio/certidaodecasamento";

module.exports.run = async (client, message, args, database) => {

  let dbref = database.ref(`${dir6}/${message.author.id}`);

  dbref.once('value').then(async function(db) {
    
    if (db.val() == null) {
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você não tem uma Certidão de Casamento!`);
      await message.channel.send(embed);
    } else {   
      const b = db.val();
      let embed = new Discord.MessageEmbed()
        .setTitle("Certidão de Casamento")
        .setDescription(`${b.conteudo}`)
        .setColor('#00ff00')
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      await message.channel.send(embed);
    }
  });

};