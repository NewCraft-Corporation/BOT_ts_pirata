const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
const dir3 = "Servidores/Card/Cards";
var tc;

module.exports.run = async (client, message, args, database) => {
  if (message.author.id !== "390674797908197386") return;
  var sayMessage = args[1];
  if (sayMessage == null) return;

  var dbref = await database.ref(`${dir3}/${sayMessage}`).once('value');
      
  if (dbref.val() == null) {
    console.error('Erro:' + err);
    message.reply(` não existe esse comando, use **${config.pr}card help**`);
  return;
  };
  var list;
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
      tc1 = tc + 1;
      if (tc == 0) {
        var list = [''];
        list[0] = `${sayMessage}`;
        var dbre2 = database.ref(`${dir2}/${message.author.id}`);
        dbre2.once('value').then(async function(db) {
            dbre2.set({
              sleeve: list
            });
        });

      } else {
        var dbref = await database.ref(`${dir2}/${message.author.id}/sleeve`).once('value');
        var dbrefs = dbref.val();
        list = dbrefs;
        list[tc] = `${sayMessage}`;
      
        var dbre2 = database.ref(`${dir2}/${message.author.id}`);
        dbre2.once('value').then(async function(db) {
          if (db.val()) {
            dbre2.update({
              sleeve: list
            });
          }
        });
          
      };
      dbrefCarteira.update({
        totaldecartas: tc1
      });
    }
  });
};

