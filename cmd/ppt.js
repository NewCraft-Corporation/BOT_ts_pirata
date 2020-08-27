// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require("discord.js")

exports.run = async (client, message, args) => {

  const arg = args.join(' ');

  const r = function () {
    if ( rand == "pedra" ) {
      return (":bricks:");
    } else if ( rand == "papel" ) {
      return (":roll_of_paper:");
    } else if ( rand == "tesoura" ) {
      return (":scissors:");
    }
  };

  const e = function () {
    if ( arg == "pedra" ) {
      return (":bricks:");
    } else if ( arg == "papel" ) {
      return (":roll_of_paper:");
    } else if ( arg == "tesoura" ) {
      return (":scissors:");
    }
  };

  var list = ['pedra', 'papel', 'tesoura'];
  var rand = list[Math.floor(Math.random() * list.length)];
  if ( arg == "" ) {
    message.reply(`eu coloquei **${r()}${rand}**, mas vc não colocou nada`);
    return;
  };
  const text = (`voce colocou **${e()}${arg}** e eu coloquei **${r()}${rand}**,  por isso`);
  if (arg == "pedra") {
    if ( rand == "pedra" ) {
      message.reply(`${text} deu **Empate**`);
    }
    else if ( rand == "papel" ) {
      message.reply(`${text} voce **Perdeu**`);
    }
    else if ( rand == "tesoura" ) {
      message.reply(`${text} voce **Ganhou**!`);
    }
  } else if (arg == "papel") {
    if ( rand == "pedra" ) {
      message.reply(`${text} voce **Ganhou**!`);
    }
    else if ( rand == "papel" ) {
      message.reply(`${text} deu **Empate**`);
    }
    else if ( rand == "tesoura" ) {
      message.reply(`${text} voce **Perdeu**`);
    }
  } else if (arg == "tesoura") {
    if ( rand == "pedra" ) {
      message.reply(`${text} voce **Perdeu**`);
    }
    else if ( rand == "papel" ) {
      message.reply(`${text} voce **Ganhou**!`);
    }
    else if ( rand == "tesoura" ) {
      message.reply(`${text} deu **Empate**`);
    }
  };
};