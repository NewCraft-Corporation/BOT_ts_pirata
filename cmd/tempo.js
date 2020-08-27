var weather = require('weather-js');
const Discord = require('discord.js')

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
  weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        
        if (!result) return message.channel.send(`Forneça uma cidade.`)
        if (!result[0]) return message.channel.send(`Essa cidade não existe.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`**Tempo em ${result[0].location.name}**`)
            .addField(`:thermometer: **Temperatura:**`, `${result[0].current.temperature}°C`)
            .setColor('#00ff00')
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
            .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
        message.channel.send(embed)

  });
  return;
};

    weather.find({
        search: args,
        degreeType: 'C'
    }, function (err, result) {
        if (err) console.log(err);
        
        if (!result) return message.channel.send(`Forneça uma cidade.`)
        if (!result[0]) return message.channel.send(`Essa cidade não existe.`)
        const embed = new Discord.MessageEmbed()
            .setTitle(`:gem: **Tempo em ${result[0].location.name}**`)
            .addField(`:thermometer: **Temperatura:**`, `${result[0].current.temperature}°C`)
            .addField(`:thermometer: **Sensação Térmica:**`, `${result[0].current.feelslike}°C`)
            .addField(`:thermometer: **Umidade:**`, `${result[0].current.humidity}%`)
            .addField(`:thermometer: **Vento:**`, `${result[0].current.windspeed}`)
            .setColor('#00ff00')
            .setThumbnail(result[0].current.imageUrl)
            .setTimestamp()
            .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
        message.channel.send(embed)

    });
};