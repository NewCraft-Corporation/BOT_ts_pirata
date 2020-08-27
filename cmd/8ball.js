const Discord = require('discord.js');
var escolha2 = [
    "Sim",
    "Não",
    "Talvez"
];

var escolha = [
    "Sim",
    "Não",
    "Talvez",
    "Eu não sei, tente de novo",
    "Quem sabe?",
    "Isso é um mistério",
    "Não posso te contar",
    "Meu informante disse que não",
    "Provavelmente",
    "Me pergunte mais tarde!",
    "Claro que não!",
    "Não conte comigo para isso",
    "Dúvido muito"

  ];
  
exports.run = async (client, message, args, database) => {
    
  var bol = false;
  var dbref = await database.ref(`Servidores/config/vip`).once('value');
  var dbrefs = dbref.val();
  var ctl = 0;

  while (ctl < dbrefs.length) {
    if (message.author.id == dbrefs[ctl]) {
      bol = true;
    }
    ctl++;
  };

  if (bol == false) {
    if(!args[0]){
      return message.channel.send(":8ball: | Por favor insira uma pergunta!");
    };
    if (args[0]) {
      message.channel.send(`:8ball: ${escolha2[Math.floor(Math.random() * escolha2.length)]}`);
    } else {
      message.channel.send(":8ball: | Não foi possível ler sua pergunta! :(");
    };
    return;
  };

    if(!args[0]){
      const embed = new Discord.MessageEmbed()
        .setTitle("**:8ball: Bola 8 :gem:**")
        .setColor('#00ff00')
        .setDescription("Por favor insira uma pergunta!")
        .setTimestamp()
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      message.channel.send(embed)
      return;
    };
    if (args[0]) {
      const embed = new Discord.MessageEmbed()
        .setTitle("**:8ball: Bola 8 :gem:**")
        .setColor('#00ff00')
        .setDescription(`**${escolha[Math.floor(Math.random() * escolha.length)]}**`)
        .setTimestamp()
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      message.channel.send(embed)
    } else {
      const embed = new Discord.MessageEmbed()
        .setTitle("**:8ball: Bola 8 :gem:**")
        .setColor('#00ff00')
        .setDescription("Não foi possível ler sua pergunta! :(")
        .setTimestamp()
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
      message.channel.send(embed)
    };

};