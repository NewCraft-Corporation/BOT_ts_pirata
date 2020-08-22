const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = ['https://media1.tenor.com/images/a8d45fe040d392d2815f6ff39d1fc733/tenor.gif', 'https://media1.tenor.com/images/af36628688f5f50f297c5e4bce61a35c/tenor.gif?itemid=17314633', 'https://i.imgur.com/yROjYng.gif', 'https://i.pinimg.com/originals/68/de/67/68de679cc20000570e8a7d9ed9218cd3.gif', 'https://cdn.quotesgram.com/img/34/51/819189293-slap.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.user.cache.get(args[0]);

if (!user) {
return message.reply('esqueceu de citar quem quer dar um tapa!!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('TAPA')
        .setColor('#00ff00')
        .setDescription(`:punch: ${message.author} deu um **tapa** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
