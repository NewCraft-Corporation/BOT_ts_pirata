const Discord = require('discord.js');
const config = require('../config.json')
const pr = config.pr;


module.exports.run = async (client, message, args) => {
    message.delete().catch(O_o => {});
    

    var list = ['https://i.pinimg.com/originals/50/12/88/501288f32ce07bacb12ad3ff377051f3.gif', 'https://giffiles.alphacoders.com/203/203467.gif', 'https://3.bp.blogspot.com/-2A6taGpTGaM/XOWdQG3yumI/AAAAAAAAcSA/sjjd94oZBjko5GDqrC6keqXSGejPu4n5wCLcBGAs/s1600/kawaii-cute-fofo-anime-gif%2B%25281%2529.gif', 'https://64.media.tumblr.com/94802807184ecfdbb66e2a4413ad1e61/tumblr_odefhaRkLR1tvwiiwo1_500.gif'
    ];
    var imgRand = list[Math.floor(Math.random() * list.length)];

    const embed = new Discord.MessageEmbed()
        .setAuthor(`${message.guild.name} - Help`)
        .setDescription(`Para saber meus comandos, reaja ao emoji de cada categoria.`)
        .addField(`⭐ **Uteis**`, '• `avatar`, `myid`, `tempo`, `nctv`...')
        .addField(`😆 **Reações**`, '• `hug`, `kiss`, `slap`, `attack`...')
        .addField(`😂 **Diversão**`, '• `8ball`, `gado`, `oi`, `ppt`')
        .addField(`🎶 **Música**`, '• `play`, `stop`, `skip`, `fila`')
        .addField(`🎴 **Anime Card Game**`, '...')
        .addField(`📥 **Outros**`, '...')
        .addField(`🔧 **Staff**`, '• `alert`, `say`, `ping`')
        .setFooter(message.author.tag, message.author.avatarURL)
        .setTimestamp()
        .setColor('#00ff00')
     message.channel.send(embed)
     .catch(err => message.channel.send(erros))
     .then(async msg => {
        await msg.react('⭐')
        await msg.react('😆')
        await msg.react('😂')
        await msg.react('🎶')
        await msg.react('🎴')
        await msg.react('📥')
        await msg.react('🔧')


        const uteis = (reaction, user) => reaction.emoji.name === '⭐' && user.id === message.author.id;
        const reacoes = (reaction, user) => reaction.emoji.name === '😆' && user.id === message.author.id;
        const diversao = (reaction, user) => reaction.emoji.name === '😂' && user.id === message.author.id;
        const musica = (reaction, user) => reaction.emoji.name === '🎶' && user.id === message.author.id;
        const card = (reaction, user) => reaction.emoji.name === '🎴' && user.id === message.author.id;
        const outros = (reaction, user) => reaction.emoji.name === '📥' && user.id === message.author.id;
        const staff = (reaction, user) => reaction.emoji.name === '🔧' && user.id === message.author.id;

        const uteisL = msg.createReactionCollector(uteis)
        const reacoesL = msg.createReactionCollector(reacoes)
        const diversaoL = msg.createReactionCollector(diversao)
        const musicaL = msg.createReactionCollector(musica)
        const cardL = msg.createReactionCollector(card)
        const outrosL = msg.createReactionCollector(outros)
        const staffL = msg.createReactionCollector(staff)


        uteisL.on('collect', r => {

            const embedinformacao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`⭐ **UTEIS**
                ${pr}avatar - Mostra o avatar do próprio usuário que usou o comando.
                ${pr}aquelacarinha - Aquela carinha. ( ͡ʘ ͜ʖ ͡ʘ).
                ${pr}coinflip - Joga moeda para cima.
                ${pr}dados - Joga um dado de 6 lados na mesa.
                ${pr}morse \`<mensagem>\` - Transforma um texto em código morse.
                ${pr}myid - retorna o seu id do usuario.
                ${pr}tempo \`<cidade>\` - Mostra como está o tempo.
                ${pr}nctv - Informações sobre a NCTV.
         `)
                .setColor("#00ff00")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embedinformacao)
        })

        reacoesL.on('collect', r => {

            const embedpedidos = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`😆 **REAÇÕES**
                ${pr}attack \`<@user>\` - Ataque um usuário.
                ${pr}hug \`<@user>\` - Abrace um usuário.
                ${pr}kiss \`<@user>\` - Beije um usuário.
                ${pr}slap \`<@user>\` - Dar um tapa em um usuário.

                **Somente para :gem:premium**
                ${pr}baka \`<@user>\` - Xigar um usuário.
                ${pr}feed \`<@user>\` - Alimente um usuário.
                ${pr}hug+ \`<@user>\` - Fique abraçado com um usuário.
                ${pr}pat \`<@user>\` -  Console um usuário.
                ${pr}poke \`<@user>\` - Cutucar um usuário.
                ${pr}smug - Fique presunçoso
                ${pr}tickle \`<@user>\` - Faça cócegas em um usuário.
         `)
                .setColor("#00ff00")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embedpedidos)
        })

        diversaoL.on('collect', r => {
            const embedusuario = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`😂 **DIVERSÃO**
                ${pr}8ball \`<mensagem>\` - Responde suas perguntas.
                ${pr}oi - só para dar um oi >_<.
                ${pr}ppt - pedra, papel ou tesoura.
                ${pr}gado - Olha o gado.
        `)
                .setColor("#00ff00")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embedusuario)
        })

        musicaL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`🎶 **Música**
                ${pr}skip - vote para pular uma música.

                **Somente para DJ**
                ${pr}play \`<url da música>\` - Escolhe uma música para tocar.
                ${pr}stop - Para a música.
                ${pr}fila - Mostra lista de músicas na fila.
        `)
                .setColor('#00ff00')
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embeddiversao)
        })

        cardL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`🎶 **ANIME CARD GAME**
                ${pr}card criarcarteira - criar a sua carteira
                ${pr}card carteira - ver a sua carteira
                ${pr}card deletarcarteira - deleta a sua carteira e sua coleção
                ${pr}card ver - ver todos as suas cartas da sua coleção
                ${pr}card \`<id da carta>\` - ver a carta especifica da sua coleção
                ${pr}card del \`<id da carta>\` - deleta uma carta especifica da sua coleção
                ${pr}card boosters abrir - abre um boosters com 1 card
                ${pr}card boosters give \`<@user>\` \`<coins>\` - vender um booster para um usuario
        `)
                .setColor('#00ff00')
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embeddiversao)
        })

        outrosL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`📥 **OUTROS**
                ${pr}cat - GANG DOS GATOS.
                ${pr}dog - GANG DOS CACHORROS.
                ${pr}level - nivel de burrice
                ${pr}ranking - rank de burrice

                **Somente para :gem:premium**
                ${pr}goose - GANG DOS GANSOS.
                ${pr}lizard - GANG DOS LAGARTOS.
        `)
                .setColor("#00ff00")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embeddiversao)
        })

        staffL.on('collect', r => {
            const embeddiversao = new Discord.MessageEmbed()
                .setAuthor(`${message.guild.name} - Help`)
                .setThumbnail("https://cdn.discordapp.com/attachments/742046290833178725/745018759663714414/TS.png")
                .setDescription(`🔧 **STAFF**
                        
                ${pr}alert - Crie um anúncio.
                ${pr}ping - Mostra o delay bot-servidor.
                ${pr}say \`<mensagem>\` - Faz com que eu repita uma frase.
        `)
                .setColor("#00ff00")
                .setFooter(message.author.tag, message.author.avatarURL)
                .setTimestamp()
                .setImage(imgRand)
            msg.edit(embeddiversao)
        })
        
        

    })
}