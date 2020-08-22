const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (message.author.id == '477628013236846592' || message.author.id == '390674797908197386') {
    const t = `${client.guilds.cache.size}`;
    if (`${t}` == `1`) {
      message.channel.send(`${t} servidor!`);
    } else if (`${t}` == `10`) {
      message.channel.send(`${t} servidores!\nserio isso mano\n\nParabens`);  
    } else {
      message.channel.send(`${t} servidores!`);  
    }
  };
};
