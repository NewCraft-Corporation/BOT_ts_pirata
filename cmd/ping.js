module.exports.run = async (client, message, args) => {
  if (message.author.id == '477628013236846592' || message.author.id == '390674797908197386') {
    const m = await message.channel.send('ping?');
    message.delete().catch(O_o => {});
    m.edit(`🏓 **| Pong!**\nServer latency: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\nAPI latency: **${Math.round(
        client.ws.ping
      )}ms**`
    );
  };
};
