const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.delete().catch(O_o => {});
  if (message.author.id == '477628013236846592' || message.author.id == '390674797908197386') {
  let totalSeconds = client.uptime / 1000;
  let days = Math.floor(totalSeconds / 86400);
  let hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  let uptime = `🇩 ${days.toFixed()} dias\n🇭 ${hours.toFixed()} horas\n🇲 ${minutes.toFixed()} minutos\n🇸 ${seconds.toFixed()} segundos`;

  const embed = new Discord.MessageEmbed()
    .setTitle(`Tempo de atividade ⏲️`)
    .setThumbnail("https://k38.kn3.net/taringa/1/4/4/3/8/4/69/alkorrogasth/D4B.gif?4339")
    .setColor("#18ff00")
    .setDescription(`**Estou online há:**\n${uptime}\n\ncriado: 16/08/2020\nby Teams TS PIRATA`)

  message.channel.send(embed);
  };
};
