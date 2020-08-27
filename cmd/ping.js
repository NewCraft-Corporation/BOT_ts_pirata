// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

module.exports.run = async (client, message, args) => {
  if(!message.member.roles.cache.find(r => r.name === "TS_MANAGE")) {
    message.channel.send(`<@!${message.author.id}> vc ñ é TS MANAGE`) 
    return;
  };
    const m = await message.channel.send('ping?');
    message.delete().catch(O_o => {});
    m.edit(`🏓 **| Pong!**\nServer latency: **${m.createdTimestamp -
        message.createdTimestamp}ms.**\nAPI latency: **${Math.round(
        client.ws.ping
      )}ms**`
    );
};