const Discord = require('discord.js');
const config = require("../config.json");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
const dir3 = "Servidores/Card/Cards";
const cmd = `${config.pr}.length` 
var tc;

module.exports.run = async (client, message, args, database) => {

  if (message.author.id !== "390674797908197386") return;
  const sayMessag = message.content.trim().slice(cmd).split(/ +/g);
  const sayM = args.join(' ');
  
  const sayMessage = sayMessag.shift().toLowerCase();

  if ( sayMessage == "" ) {
    message.reply(` não existe esse comando, use **${config.pr}card help**`);
    return;
  };


  try {
    const commandFile = require(`./card/${sayMessag[0]}.js`)
    commandFile.run(client, message, args, database);
  } catch (err) {

    var dbref = await database.ref(`${dir3}/${sayMessag[0]}`).once('value');
    
    if (dbref.val() == null) {
      console.error('Erro:' + err);
      message.reply(` não existe esse comando, use **${config.pr}card help**`);
      return;
    };
      
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
        var ctl = 0;
        var bol = false;
        while (ctl < tc) {
          var dbref = await database.ref(`${dir2}/${message.author.id}/sleeve`).once('value');
          var dbrefs = dbref.val();
          if (sayMessag[0] == dbrefs[ctl]) {
            bol = true;
          }
          ctl++;
        };
        if (bol) {
          let dbcard2 = database.ref(`${dir3}/${sayMessag[0]}`);
          dbcard2.once('value').then(async function(dbc) {
            var d = dbc.val();
            const embed = new Discord.MessageEmbed()
              .setTitle(`${d.name} Rank:${d.raridade}`)
              .setColor('#2f3136')
              .setImage(d.gif)
              .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
            await message.channel.send(embed);
          });
        } else {
          message.reply(` não existe esse comando, use **${config.pr}card help**`);
        };
      };
    });
  };
};
