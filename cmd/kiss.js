const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = ['https://media1.tenor.com/images/0b39ba7b0affa79d3d6eddbe5bea684a/tenor.gif?itemid=15111569', 'https://i.pinimg.com/originals/67/6b/f9/676bf9c2cd4104187c9c211ee0efe130.gif', 'https://i.pinimg.com/originals/cc/1d/6a/cc1d6acf759710d1f6f093788e535ebb.gif', 'https://pa1.narvii.com/6238/70387f559b0a8486bbad82ef99e06a7df656f243_hq.gif', 'https://acegif.com/wp-content/uploads/anime-kiss-m.gif', 'https://thumbs.gfycat.com/PhonyRepentantBuzzard-size_restricted.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.user.cache.get(args[0]);

if (!user) {
return message.reply('esqueceu de citar quem quer beijar!!');
}
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('BEIJO')
        .setColor('#00ff00')
        .setDescription(`:kiss: ${message.author} **beijou** ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setAuthor(message.author.tag, avatar)
        .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
  await message.channel.send(embed);
};
