const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";

module.exports.run = async (client, message, args, database) => {

  let dbref = database.ref(`${dir}/${message.author.id}`);

  dbref.once('value').then(async function(db) {
    
    if (db.val() == null) {
      message.reply("Vc não se encontra ainda no meu banco de dados vou colocar você nele.")
      const name = message.author.username;
      const linkAvatar = message.author.displayAvatarURL();
      dbref.set({
        coins: 30,
        nick: `${name}`,
        avatar: `${linkAvatar}`,
        status: ' Nada',
        boosters: 0
      });
      dbref.once('value').then(async function(db) {
        let embed = new Discord.MessageEmbed()
          .setTitle(db.val().nick)
          .setImage(db.val().avatar)
          .setDescription(`Parabéns Você criou seu Carteira`);
        await message.channel.send(embed);
      });

    } else {   
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`Você já tem uma Carteira!`);
      await message.channel.send(embed);
    }
  });

};