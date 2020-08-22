const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var list = [
  'https://acegif.com/wp-content/gif/anime-hug-38.gif',
  'https://media1.tenor.com/images/bb841fad2c0e549c38d8ae15f4ef1209/tenor.gif',
  'https://uploads.spiritfanfiction.com/fanfics/historias/201805/abracos-por-tras-12925969-050520182214.gif', 'https://media1.tenor.com/images/6262924b0b8cd9e0089c77d80d30e0c9/tenor.gif', 'https://i.pinimg.com/originals/02/7e/0a/027e0ab608f8b84a25b2d2b1d223edec.gif', 'https://thumbs.gfycat.com/AlienatedUnawareArcherfish-size_restricted.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.user.cache.get(args[0]);

if (!user) {
return message.reply('esqueceu de citar quem quer abraçar!!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('ABRAÇO')
        .setColor('#00ff00')
        .setDescription(`:green_heart: ${message.author} **abraçou** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
