// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const server = require('express');
const app = server();

app.get("/", (request, response) => {
  const ping = new Date();
  ping.setHours(ping.getHours() - 3);
  console.log(`Received Ping: ${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()}`);
  response.sendStatus(200);
});
app.listen(process.env.PORT);

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const firebase = require("firebase");

var firebaseConfig = {
  apiKey: process.env.APIKEYDB,
  authDomain: process.env.AUTHDOMAINDB,
  databaseURL: process.env.DATABASEURLDB,
  projectId: process.env.PROJECTIDDB,
  storageBucket: process.env.STORAGEBUCKETDB,
  messagingSenderId: process.env.MESSAGINGSENDERIDDB,
  appId: process.env.APPIDDB
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

let active = new Map();
let ops = { active: active }

client.on('message', function(message) {
    if (message.channel.type == "dm") return;
    if (message.author.bot) return;


    let dbref = database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`);
    database.ref(`Servidores/Levels/${message.guild.id}/${message.author.id}`).once('value').then(async function(db) {
        if (db.val() == null) {
            dbref.set({
                xp: 0,
                level: 1
            });
        } else {
            
            let gerarXP = Math.floor(Math.random() * 5 - 1) + 1;
            
            dbref.update({
                xp: db.val().xp+gerarXP
            });
            
            if (db.val().level*100 <= db.val().xp) {
                dbref.update({
                    xp: 0,
                    level: db.val().level+1
            });
            
                let spamCh = message.guild.channels.cache.find(ch => ch.name === "spam");
                if (!spamCh) return;
                
                let embedUp = new Discord.MessageEmbed()
                .setTitle(`Parabéns, ${message.author.tag}.`)
                .setDescription(`Você upou seu burrice para o level ${db.val().level+1}!`)
                spamCh.send(embedUp);
            }
        }
    });
});

client.on("ready", () => {
  
  let stt = [
    'STREAMING', 'WATCHING', 'PLAYING'
  ]
  let activities = [
      `${config.pr}help`,
      `${config.pr}card help`,
      `TS Pirata melhor servidor!`,
      `${client.channels.cache.size} canais! TOP`,
      `${client.users.cache.size} usuários! 👁️👁️`
  ],
  //let activities = [`MANUTENÇÃO NO CODE DO ACG`],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`,{type: `${stt[i++ % stt.length]}` , url:'https://www.twitch.tv/elj159'}), 500 * 30); 
  client.user.setStatus("online").catch(console.error);
console.log("STATUS: OK!")
});

/*
  type: 'STREAMING', url:'https://www.twitch.tv/elj159'
  type: 'WATCHING'
  type: 'PLAYING'
*/

//client.on("guildMemberAdd" ,(message, member) => {message.channel.send("oi")});
//client.on("guildMemberRemove", console.log);
//client.on("guildMemberAdd", console.log);


client.on('message', message => {
  
  if (message.author.bot) return;
  
  if (!message.content.toLowerCase().startsWith(config.pr)) {
    let oloko = Math.floor(Math.random() * 100 - 1) + 1;
      //console.log(oloko);
      if (oloko == 1) {
        let msgRandom = [":eye::eye:", ":thinking:", ":smirk:", "Estou de Olho aqui", "Interessante"];
        var msgR = msgRandom[Math.floor(Math.random() * msgRandom.length)];
        message.reply(msgR);
      };
      if (oloko == 2) {
        let reactRandom = ['👁️', '🐦', '🤳', '🤔', '🙄'];
        var reactR = reactRandom[Math.floor(Math.random() * reactRandom.length)];
        message.react(reactR)
      };
      if (oloko == 3) {
        if (message.guild.id == "742487757988954213") {
          var verificador = false;
          var valordogift;
          let nsoterio = Math.floor(Math.random() * 3 - 1) + 1;
          if (nsoterio == 1) {
            let nsoterio2 = Math.floor(Math.random() * 3 - 1) + 1;
            if (nsoterio2  == 1) {
              let nsoterio3 = Math.floor(Math.random() * 3 - 1) + 1;
              if (nsoterio3  == 1) {
                let nsoterio4 = Math.floor(Math.random() * 5 - 1) + 1;
                if (nsoterio4  == 1) {
                  verificador = true;
                  valordogift = 600;
                } else {
                  verificador = true;
                  valordogift = 400;
                };
              } else {
                verificador = true;
                valordogift = 300;
              };
            } else if (nsoterio2  == 2) {
              verificador = true;
              valordogift = 200;
            } else {
              verificador = true;
              valordogift = 100;
            };
          };
          if (verificador) {
            let dbCarteiragift = database.ref(`Servidores/Card/Carteiras/${message.author.id}`);
            dbCarteiragift.once('value').then(async function(gift) {
              if (gift.val() == null) {
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.author.tag}.`)
                  .setDescription(`Você perdeu a chase de ganhar 緑 no ACG, porque vc não tem uma Carteira!\n\nfaça uma usando: ts!card criarcarteira`);
                message.channel.send(embed);
              } else {
                var gift = gift.val();
                var coin = gifts.coins;
                coin = coin + valordogift;
                dbCarteiragift.update({
                  coins: coin
                });
                let embed = new Discord.MessageEmbed()
                  .setTitle(`${message.author.tag}.`)
                  .setDescription(`Você ganhou 緑${valordogift} no ACG\n\nMeus Parabéns`);
                message.channel.send(embed);
              };
            });
          }
        };
      };
    return;
  }
  

  
  if (message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) return;
  
  if (message.channel.type == 'dm') {
    const args = message.content.trim().slice(config.pr.length).split(/ +/g);
    const msgCmd = args.shift().toLowerCase();
    try {
      if (msgCmd == "status") {
        const sayMessage = args.join(' ');
        if (message.author.id == '477628013236846592' || message.author.id == '390674797908197386') {
          client.user.setActivity(sayMessage);
        };
        return;
      }
      const commandFile = require(`./cmdDm/${msgCmd}.js`)
      commandFile.run(client, message, args);
    } catch (err) {
    console.error('Erro:' + err); 
  } return};

  const args = message.content.trim().slice(config.pr.length).split(/ +/g);
  const msgCmd = args.shift().toLowerCase();
  try {
    const commandFile = require(`./cmd/${msgCmd}.js`)
    commandFile.run(client, message, args, database, ops);
  } catch (err) {
    console.error('Erro:' + err);
    message.reply(`esse comando não existe ou esta errado use **${config.pr}help** para ver todos os comandos possíveis`)
  }
});

client.login(process.env.TOKEN);