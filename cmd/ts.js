// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');
var dir = "Servidores/ts/Ousers";
var dir2 = "Servidores/ts";
var dir3 = "Servidores/ts/database";
var totalargs, ctl, resposta, pvez, tt, todas2, pergunta, começon;

exports.run = async (client, message, args, database) => {
pvez = true;
tt = false;
começon = 0;
pergunta = false;
var bol = false;
var dbrefvip = await database.ref(`Servidores/config/vip`).once('value');
var dbrefsvip = dbrefvip.val();
ctl = 0;

while (ctl < dbrefsvip.length) {
  if (message.author.id == dbrefsvip[ctl]) {
    bol = true;
  }
  ctl++;
};

if (bol == false) {
  message.reply("você tem que ser premium");
  return;
};

var dbref = database.ref(`${dir}/${message.author.id}`);

dbref.once('value').then(async function(db) {
if (db.val() == null) {
  dbref.set({
    name: message.author.username,
    status: 0,
    pgt: false
  });
  pvez = false;
};
const b = db.val();
totalargs = args.length;
ctl = 0;

//console.log(totalargs);

if (totalargs == '0') {
  var ctlstt, pgts;
  if (pvez) {
    ctlstt = b.status;
    pgts = b.pgt
  } else {
    ctlstt = 0;
  };
  var stt = await database.ref(`${dir2}/começo/${ctlstt}`).once('value');
  var sttss = stt.val();
  var stts = sttss;
  var resposta = stts[Math.floor(Math.random() * stts.length)];
  if (pvez) {
    ctl = Math.floor(Math.random() * (2 - 1)) + 1;
    if (ctl == 1) {
      var stat = b.status;
      if (b.status == 2) { stat = stat - 1};
      var status1 = stat + 1;
      dbref.update({
        status: status1
      });
    };
  };
} else if (totalargs == ":pizza:") {
  var ctlstt, pgts;
  if (pvez) {
    ctlstt = b.status;
    pgts = b.pgt
  } else {
    ctlstt = 0;
  };
  var stt = await database.ref(`${dir2}/comida/${ctlstt}`).once('value');
  var sttss = stt.val();
  var stts = sttss;
  var resposta = stts[Math.floor(Math.random() * stts.length)];
} else {
if (pvez) {
  ctlstt = b.status;
  pgts = b.pgt
} else {
  ctlstt = 0;
  pgts = false;
};
ctl = 0
todas2 = 0
//total de pesso
var ttdepeso = 0;
while (ctl < totalargs) {
  var dbpalavras = await database.ref(`${dir3}/${args[ctl]}/peso`).once('value');
  var dbpeso = dbpalavras.val();
  if (dbpeso == null) {
    dbpeso = 1;
  }

  //message.channel.send(`leu: \`${args[ctl]}\` e atribuiu o peso de: ${dbpeso}`)
  if (dbpeso == 2) {
    todas2 = todas2 + 1
  }
  ttdepeso = ttdepeso + dbpeso;
  ctl++
}

if (ttdepeso > totalargs) {
  tt = true;
  var stat = ctlstt;
  if (ctlstt == 2) { stat = stat - 1};
  var status1 = stat + 1;
  dbref.update({
    status: status1,
  });
} else if (ttdepeso == 0 || ttdepeso == 1) {
  var stat = ctlstt;
  if (ctlstt == 0) { stat = stat + 1};
  var status1 = stat - 1;
  dbref.update({
    status: status1,
  });
} else if (todas2 == 1 && (ttdepeso <= totalargs) ) {
  tt = true;
  var stat = ctlstt;
  if (ctlstt == 0) { stat = stat + 1};
  var status1 = stat - 1;
  dbref.update({
    status: status1,
  });
}

if (tt) {
  ctlstt = 2;
};

ctl = 0
while (ctl < totalargs) {
var tat = 1;
var dbcomeço = await database.ref(`${dir2}/começo/${tat[ctl]}`).once('value');
  var dbpeso2 = dbcomeço.val();
  if (dbpeso2) {
    começon = 1;
  }
  if (args[ctl] == "?") {
    dbref.update({
      pgt: true
    });
    pergunta = true;
  }
  ctl++
}
var assusto;
if (começon > 0) {
  assusto = "começo";
} else if (pergunta) {
  assusto = "pergunta";
} else if (pgts) {
  assusto = "aleatorio";
} else {
  assusto = "error";
}

var stt = await database.ref(`${dir2}/${assusto}/${ctlstt}`).once('value');
var sttss = stt.val();
var stts = sttss;
var resposta = stts[Math.floor(Math.random() * stts.length)];

}

const embed = new Discord.MessageEmbed()
  .setTitle("**:frog: TS :gem: **")
  .setColor('#00ff00')
  .setDescription(`**${resposta}**`)
  .setTimestamp()
  .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
message.channel.send(embed)

//message.channel.send(`PESO DE TODA MSG: ${ttdepeso}\n\nResposta: ${resposta}`)



return;
});
};