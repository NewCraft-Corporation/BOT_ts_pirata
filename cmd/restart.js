// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const config = require("../config.json");
exports.run = (client, message, args, database, ops) => {
    if (ops.active.get(message.guild.id)) ops.active.delete(message.guild.id);
    if (message.author.id !== "390674797908197386") return;

    console.clear();
    client.destroy()
    client.login(process.env.TOKEN);
    message.author.send("Reiniciado.");
    console.log("STATUS: OK!")
};