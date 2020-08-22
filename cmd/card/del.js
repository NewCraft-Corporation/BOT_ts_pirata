const Discord = require("discord.js");
const dir = "Servidores/Card/Carteiras";
const dir2 = "Servidores/Card/Deck";
var tc;

module.exports.run = async (client, message, args, database) => {
  var sayMessage = args[1];
  if (sayMessage == null) return;

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
      var list = [];
      var bol = false;
      var bl = false;
      var n;
      while (ctl < tc) {
        var dbref = await database.ref(`${dir2}/${message.author.id}/sleeve`).once('value');
        var dbrefs = dbref.val();
        if (sayMessage == dbrefs[ctl]) {
          bol = true;
          n = ctl;
          list = dbrefs;
        };        
        ctl++;
      };
      if ( tc == 1 ) {
        var tc1 = tc - 1;
        let dbre2 = database.ref(`${dir2}/${message.author.id}`);
        dbre2.once('value').then(async function(db) {
          if (db.val()) {
            dbre2.remove();
          }
        });
        dbrefCarteira.update({
          totaldecartas: tc1
        });
        return;
      }
      if (bol) {

        //console.log(n);
        //console.log(list);
        var ctl = 0;
        var tc1 = tc - 1;
        while (ctl < tc) {
          var x, y;
          if (ctl == n) {
            list[ctl] = list[tc1];
            //console.log(list[ctl]);
            ctl++
          } else {
            //console.log(list[ctl]);
            ctl++;
          }
          if (ctl == tc1) {
            list[ctl] = null;
          };
        };
        var dbre2 = database.ref(`${dir2}/${message.author.id}`);
        dbre2.once('value').then(async function(db) {
          if (db.val()) {
            dbre2.update({
              sleeve: list
            });
          }
        });
        
        
        dbrefCarteira.update({
          totaldecartas: tc1
        });
      };
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}.`)
        .setDescription(`carta removida`);
      await message.channel.send(embed);
    };
  });
};
