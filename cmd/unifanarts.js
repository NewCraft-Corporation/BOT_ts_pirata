const Discord = require("discord.js");
const config = require("../config.json"); 

exports.run = async (client, message, args) => {

if ( message.guild.id != "442444817117741057") {
  message.reply(`esse comando não existe ou esta errado use **${config.pr}help** para ver todos os comandos possíveis`);
  return;
};
if(!message.member.roles.cache.find(r => r.name === "STAFF")) {
    message.channel.send(`<@!${message.author.id}> vc ñ é STAFF`) 
    return;
  };

var list = [
  'https://cdn.discordapp.com/attachments/547788828203548714/737020583136460820/Sweet.png', 'https://cdn.discordapp.com/attachments/547788828203548714/740285875619102820/20200804_161124.jpg', 'https://cdn.discordapp.com/attachments/547788828203548714/742350656026968165/Screenshot_20200810-085602.png', 'https://cdn.discordapp.com/attachments/547788828203548714/742604673143275580/Screenshot_2020-08-10-10-49-36.png', 'https://cdn.discordapp.com/attachments/547788828203548714/744389781999452240/Screenshot_2020-08-15-22-25-50.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745453205126774894/Screenshot_2020-08-16-17-25-58.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745453281261781012/Screenshot_2020-08-18-18-15-08.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745453366632513536/Screenshot_2020-08-18-18-34-51.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745672780866912327/Screenshot_20200819-124626.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745672905626615828/Screenshot_20200819-125745.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745716076222087248/Screenshot_20200819-154142.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745716147713999008/Screenshot_20200819-154940.png', 'https://cdn.discordapp.com/attachments/547788828203548714/745739685946458243/Screenshot_20200819-172250_Gacha_Club.jpg', 'https://cdn.discordapp.com/attachments/547788828203548714/746193794592145469/Screenshot_2020-08-19-15-21-23.png'
];

var rand = list[Math.floor(Math.random() * list.length)];

  const embed = new Discord.MessageEmbed()
        .setTitle('FAN ARTS')
        .setColor('#00ff00')
        .setImage(rand)
        .setTimestamp()
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
