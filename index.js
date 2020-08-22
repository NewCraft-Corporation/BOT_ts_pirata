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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
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
  /*let activities = [
      `${config.pr}help`,
      `TS Pirata melhor servidor!`,
      `${client.channels.cache.size} canais! TOP`,
      `${client.users.cache.size} usuários! 👁️👁️`
  ],*/
  let activities = [`MANUTENÇÃO NO CODE`],
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`,{type: "WATCHING"}), 500 * 30); 
  client.user.setStatus("dnd").catch(console.error);
console.log("STATUS: OK!")
});

//client.on("guildMemberAdd" ,(message, member) => {message.channel.send("oi")});
//client.on("guildMemberRemove", console.log);
//client.on("guildMemberAdd", console.log);


client.on('message', message => {
  
  if (message.author.bot) return;
  
  if (!message.content.toLowerCase().startsWith(config.pr)) return;
  
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
