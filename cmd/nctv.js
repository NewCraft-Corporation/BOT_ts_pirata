// Copyright (©) 2020 NewCraft Corporation. All rights reserved. MIT License.

const Discord = require('discord.js');
const config = require("../config.json"); 
const pr = config.pr;
const p = ("**" + pr + "nctv");

module.exports.run = async (client, message, args) => {
  const sayM = args.join(' ');
  const sayMessage = sayM.toLowerCase();
  if (sayMessage == '') {
    const embed = new Discord.MessageEmbed()
      .setTitle('NCTV')
      .setColor('#00ff00')
      .setURL('http://newcraft.6te.net/tspirata')
      .setDescription(`https://nctv159.blogspot.com\nSite de amines 100% gratuito\n\n\nuse: ${p} {nome do anime}** <- para ver se tem disponivel na **NCTV**\n\nuse: ${p} list** <- para ver a lista completa`)
      .setImage('https://4.bp.blogspot.com/-0nI5cYs8Nig/Xb7zr7fshHI/AAAAAAAAFoo/pkM-NYVo4605mwGCbRhz_qMGNKllRgR1QCK4BGAYYCw/w800/3049c35d-0eac-48c5-9b0d-65d5955d1b5e_National-Coverage.png')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed);
    return;
  };
  if (sayMessage == 'list') {
    message.reply(`**LIST DE TODOS OS ANIME\n\n
    --------------
    7 seeds
    love hina
    naruto
    konosuba
    konosuba 2
    re:zero
    princess connect!
    darling in the franxx
    yamada-kun
    7 seeds 2
    dungeon
    yesterday
    otome game
    tower of god
    tsuki ga kirei
    net-juu no susume
    death march
    isekai wa smartphone
    --------------**\n\n
    ${p}** {um desse animes}`);
    return;
  }
  if (sayMessage == '7 seeds') {
    const embed = new Discord.MessageEmbed()
      .setTitle('7 SEEDS')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/7-seeds.html')
      .setDescription(`No futuro imediato, um meteorito gigante colidiu com a terra. Todos os organismos vivos, incluindo a humanidade, foram varridos da face do planeta. O governo, que previra esse resultado, tomou medidas para combater o pior cenário possível. Em particular, foi o Projeto "7SEEDS", no qual cinco grupos de sete rapazes e moças foram cuidadosamente selecionados e colocados em equipes (primavera, verão A, verão B, outono e inverno). Cada participante foi então colocado sob sono criogênico na esperança de preservar a existência continuada da humanidade. Quando aqueles homens e mulheres acordaram, de repente se viram empurrados para um mundo cruel. Embora despojados e entristecidos pela perda eterna de seus entes queridos, eles tentaram encontrar maneiras de sobreviver.`)
      .setImage('https://1.bp.blogspot.com/-1JuptlA2VrE/XtehMyuUeiI/AAAAAAAAGrU/JmUqBNrqhKE0PDF5gdN9eH8EZ0dvH06dgCK4BGAsYHg/w640-h345/7Seeds-anime-e1543347666504.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'love hina') {
    const embed = new Discord.MessageEmbed()
      .setTitle('LOVE HINA')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/love-hina.html')
      .setDescription(`https://nctv159.blogspot.com/p/love-hina.html \nKeitarô e a sua paixão de infância fazem uma promessa de se encontrarem na Toudai, uma prestigiada universidade de Tóquio. O único problema é que ele não se lembra do nome da menina à quem tinha feito a promessa, nem mesmo a sua idade. Cerca de uma década depois, após ter sido reprovado duas vezes na Universidade de Tóquio, ele é expulso de casa, e decide ir até a pousada de sua avó para viver lá por um tempo e estudar para entrar na faculdade. Mas ele acaba descobrindo que a pousada havia se tornado uma pensão só para garotas, de onde ele acaba se tornando o gerente, tendo que aprender a conviver com as várias inquilinas, que têm personalidades muito diferentes, o que os levam a situações cômicas.`)
      .setImage('https://animystic.com.br/wp-content/uploads/2018/11/love-hina.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'naruto') {
    const embed = new Discord.MessageEmbed()
      .setTitle('NARUTO')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/naruto.html')
      .setDescription(`https://nctv159.blogspot.com/p/naruto.html \nMomentos antes do nascimento de Naruto Uzumaki, um enorme demônio conhecido como Kyuubi, a Raposa de Nove Caudas, atacou Konohagakure, a Vila das Folhas Ocultas, e causou estragos. A fim de acabar com a fúria de Kyuubi, o líder da vila, o Quarto Hokage, sacrificou sua vida e selou a fera monstruosa dentro do recém-nascido Naruto. Agora, Naruto é um ninja hiperativo e com cabeça de junta ainda vivendo em Konohagakure. Evitado por causa dos Kyuubi dentro dele, Naruto luta para encontrar seu lugar na vila, enquanto seu desejo ardente de se tornar o Hokage de Konohagakure o leva não apenas a alguns grandes novos amigos, mas também a alguns inimigos mortais.`)
      .setImage('https://d2skuhm0vrry40.cloudfront.net/2017/articles/2017-10-04-10-27/naruto_l.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'konosuba') {
    const embed = new Discord.MessageEmbed()
      .setTitle('KONOSUBA')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/konosuba.html')
      .setDescription(`https://nctv159.blogspot.com/p/konosuba.html \nKono Subarashii Sekai ni Shukufuku wo! A vida de Satou Kazuma, um hikikomori que gosta de jogos, subitamente chega a um fim devido a um acidente de trânsito... Era para ser assim, mas quando ele acordou, uma linda garota que dizia ser uma deusa estava diante dele. Ela então o convida para um outro mundo para o qual ele só pode levar uma coisa que escolher. A partir daí, a grande aventura para derrotar o Rei Demônio começa para o Kazuma reencarnado... Ou é o que você pensaria, mas é a luta para conseguir comida, roupa e abrigo que começa! Apesar de Kazuma querer viver em paz, a deusa continua causando problemas um atrás do outro e eles acabam atraindo a atenção do exército do Rei Demônio!`)
      .setImage('https://www.alternativanerd.com.br/wp-content/uploads/2020/03/KonosubaC.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'konosuba 2') {
    const embed = new Discord.MessageEmbed()
      .setTitle('KONOSUBA 2')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/konosuba-2.html')
      .setDescription(`https://nctv159.blogspot.com/p/konosuba-2.html \nQuando Kazuma Satou morreu, ele recebeu duas opções: passar para o céu ou ser revivido em um mundo de fantasia. Depois de escolher o novo mundo, a deusa Aqua o encarregou de derrotar o Rei Demônio e deixou que ele escolhesse qualquer arma para ajudá-lo. Infelizmente, Kazuma escolheu trazer Aqua e se arrependeu da decisão desde então. Ele não apenas está preso a uma divindade inútil que se tornou arqui-sacerdote do partido, mas também tem que ganhar dinheiro suficiente para pagar as despesas. Para aumentar seus problemas, o grupo continuou a crescer à medida que aventureiros mais problemáticos se juntavam a eles. O lançador de feitiços deles, Megumin, é um especialista em magia de explosão que só pode lançar um feitiço uma vez por dia e se recusa a aprender qualquer outra coisa. Há também seu intrigante cruzado, Lalatina "Darkness" Dustiness Ford, um masoquista impotente que faz Kazuma parecer puro em comparação. Kono Subarashii Sekai e Shukufuku wo! 2 continua acompanhando Kazuma e o resto de seu partido por inúmeras outras aventuras, enquanto lutam para ganhar dinheiro e precisam lidar com as personalidades problemáticas um do outro. No entanto, as coisas raramente saem conforme o planejado e geralmente são desviadas por suas próprias tendências idiotas.`)
      .setImage('https://www.alternativanerd.com.br/wp-content/uploads/2020/03/KonosubaC.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 're:zero') {
    const embed = new Discord.MessageEmbed()
      .setTitle('RE:ZERO')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/rezero.html')
      .setDescription(`https://nctv159.blogspot.com/p/rezero.html \nQuando Subaru Natsuki sai da loja de conveniência, a última coisa que ele espera é ser arrancada de sua vida cotidiana e cair em um mundo de fantasia. As coisas não parecem boas para o adolescente confuso; no entanto, pouco depois de sua chegada, ele é atacado por alguns bandidos. Armado com apenas uma sacola de compras e um telefone celular agora inútil, ele é rapidamente espancado. Felizmente, uma beleza misteriosa chamada Satella, em perseguição a quem roubou suas insígnias, acontece com Subaru e o salva. Para agradecer à garota honesta e bondosa, Subaru se oferece para ajudar em sua busca e, mais tarde naquela noite, ele até encontra o paradeiro daquilo que ela procura. Mas, sem o conhecimento deles, uma força muito mais sombria persegue o par das sombras, e apenas alguns minutos depois de localizar as insígnias, Subaru e Satella são brutalmente assassinados. No entanto, Subaru desperta imediatamente para uma cena familiar - confrontada pelo mesmo grupo de bandidos, encontrando Satella mais uma vez - o enigma se aprofunda à medida que a história se inexplica inexplicavelmente.`)
      .setImage('https://blogs.opovo.com.br/bancadoanime/wp-content/uploads/sites/59/2020/04/ReZero-Kara-Hajimeru-Isekai-Seikatsu.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'princess connect!') {
    const embed = new Discord.MessageEmbed()
      .setTitle('PRINCESS CONNECT! RE:DIVE')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/princess-connect-redive.html')
      .setDescription(`https://nctv159.blogspot.com/p/princess-connect-redive.html \nO protagonista acorda sem lembranças em um local desconhecido e conhece algumas meninas. Ele então se aproxima delas para descobrir um mistério oculto.`)
      .setImage('https://blogs.opovo.com.br/bancadoanime/wp-content/uploads/sites/59/2020/02/Princess-Connect.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'darling in the franxx') {
    const embed = new Discord.MessageEmbed()
      .setTitle('DARLING IN THE FRANXX')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/darling-in-franxx.html')
      .setDescription(`https://nctv159.blogspot.com/p/darling-in-franxx.html \nEm um futuro distante, a humanidade foi levada à quase extinção por bestas gigantes conhecidas como Klaxosaurs, forçando os humanos sobreviventes a se refugiarem em grandes cidades fortificadas chamadas Plantations. As crianças criadas aqui são treinadas para pilotar mechas gigantes conhecidas como FranXX - as únicas armas conhecidas por serem eficazes contra os Klaxossauros - em pares de meninos e meninas. Criadas com o único objetivo de pilotar essas máquinas, essas crianças não sabem nada do mundo exterior e só conseguem provar sua existência defendendo sua raça. Hiro, um aspirante a piloto da FranXX, perdeu sua motivação e autoconfiança depois de falhar em um teste de aptidão. Pulando na cerimônia de formatura de sua turma, Hiro se retira para um lago da floresta, onde encontra uma garota misteriosa com dois chifres crescendo em sua cabeça. Ela se apresenta com seu codinome Zero Two, que é conhecido por pertencer a um infame piloto da FranXX conhecido como "Partner Killer". Antes que Hiro possa digerir o encontro, a Plantação é abalada por um ataque repentino de Klaxosaur. Zero Dois envolve a criatura em seu FranXX, mas é fortemente danificado na batalha e cai perto de Hiro. Encontrando seu parceiro morto, Zero Dois convida Hiro a pilotar o mecha com ela, e a dupla derrota facilmente o Klaxosaur na luta que se seguiu. Com um novo parceiro ao seu lado, Hiro teve uma chance de redenção por suas falhas passadas, mas a que custo?`)
      .setImage('https://ptanime.com/wp-content/uploads/2018/09/Darling_in_the_FRANXX_3_Tiago_Garcia_Darling_in_the_FRANXX_Analise.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'yamada-kun') {
    const embed = new Discord.MessageEmbed()
      .setTitle('YAMADA-KUN TO 7-NIN NO MAJO')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/yamada-kun-to-7-nin-no-majo.html')
      .setDescription(`https://nctv159.blogspot.com/p/yamada-kun-to-7-nin-no-majo.html \nQuando Ryuu Yamada entrou no ensino médio, ele queria virar uma nova folha e levar uma vida produtiva na escola. Por isso, ele escolheu cursar a Suzaku High, onde ninguém saberia de sua violenta reputação de delinquente. No entanto, para desgosto de Ryuu, ele logo fica entediado; agora no segundo ano, Ryuu voltou aos seus velhos hábitos - preguiçoso com notas abismais e sempre entrando em brigas. Um dia, voltando de mais uma visita ao escritório, Ryuu encontra Urara Shiraishi, uma bela aluna de honra. Um passo em falso faz com que ambos caiam da escada, terminando em um beijo acidental! Os dois descobrem que podem trocar de corpo com um beijo: uma habilidade que provará ser conveniente e problemática. Aprendendo sobre seu novo poder, Toranosuke Miyamura, um oficial do conselho estudantil e membro único do Clube de Estudos Sobrenaturais, os recruta para o clube. Logo juntado a Miyabi Itou, um excêntrico interessado em todas as coisas sobrenaturais, o grupo descobre a lenda das Sete Bruxas da Suzaku High, sete estudantes que obtiveram poderes diferentes ativados por um beijo. O Clube de Estudos Sobrenaturais embarca em sua primeira missão: encontrar as identidades de todas as bruxas.`)
      .setImage('https://pm1.narvii.com/6331/53f4f0003f5d9158868e7fcbf3af52166ca587b3_hq.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == '7 seeds 2') {
    const embed = new Discord.MessageEmbed()
      .setTitle('7 SEEDS 2ND SEASON')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/7-seeds-2nd-season.html')
      .setDescription(`https://nctv159.blogspot.com/p/7-seeds-2nd-season.html \nNo futuro imediato, um meteorito gigante colidiu com a terra. Todos os organismos vivos, incluindo a humanidade, foram varridos da face do planeta. O governo, que previra esse resultado, tomou medidas para combater o pior cenário possível. Em particular, foi o Projeto "7SEEDS", no qual cinco grupos de sete rapazes e moças foram cuidadosamente selecionados e colocados em equipes (primavera, verão A, verão B, outono e inverno). Cada participante foi então colocado sob sono criogênico na esperança de preservar a existência continuada da humanidade. Quando aqueles homens e mulheres acordaram, de repente se viram empurrados para um mundo cruel. Embora despojados e entristecidos pela perda eterna de seus entes queridos, eles tentaram encontrar maneiras de sobreviver.`)
      .setImage('https://1.bp.blogspot.com/-1JuptlA2VrE/XtehMyuUeiI/AAAAAAAAGrU/JmUqBNrqhKE0PDF5gdN9eH8EZ0dvH06dgCK4BGAsYHg/w640-h345/7Seeds-anime-e1543347666504.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'dungeon') {
    const embed = new Discord.MessageEmbed()
      .setTitle('DUNGEON')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/dungeon.html')
      .setDescription(`https://nctv159.blogspot.com/p/dungeon.html \nA vida na movimentada cidade de Orario nunca é monótona, especialmente para Bell Cranel, um jovem ingênuo que espera se tornar o maior aventureiro do país. Após um encontro casual com a deusa solitária, Hestia, seus sonhos se tornam um pouco mais próximos da realidade. Com o apoio dela, Bell embarca em uma missão fantástica enquanto se aventura nas catacumbas cheias de monstros da cidade, conhecidas apenas como "Calabouço". A morte espreita em todos os cantos nas profundezas cavernosas deste terrível labirinto, e um poder misterioso se move entre as sombras. Mesmo na superfície, a sobrevivência é um privilégio suado. De fato, nada é certo em um mundo onde deuses e humanos vivem e trabalham juntos, especialmente quando eles frequentemente lutam para se dar bem. Uma coisa é certa, porém: uma miríade de erros, triunfos e amizades aguarda o protagonista assustadoramente otimista desse conto hercúlico.`)
      .setImage('https://1.bp.blogspot.com/-jPzZKz-PHh8/Xuofw2NGKSI/AAAAAAAAGyc/3J-8Aq5jQcIW-A9IhD1P2ENY6C0PxJQNwCK4BGAsYHg/w639-h361/danmachi-image.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'yesterday') {
    const embed = new Discord.MessageEmbed()
      .setTitle('YESTERDAY WO UTATTE')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/yesterday-wo-utatte.html')
      .setDescription(`https://nctv159.blogspot.com/p/yesterday-wo-utatte.html \nRikuo Uozumi se resignou a um futuro sombrio, trabalhando sem rumo em uma loja de conveniência em Tóquio depois de se formar na faculdade. Sua vida monótona é interrompida quando o peculiar Haru Nonaka faz uma aparição animada, frequentemente aparecendo em seu local de trabalho para fazer amizade com ele. Quando Rikuo descobre que um velho amigo da faculdade e paixão, Shinako Morinome, voltou para a cidade, ele estende a mão para promover o relacionamento deles. Sem o conhecimento de Rikuo, Shinako está carregando lembranças dolorosas de seu passado que a impediam de aceitar seus sentimentos. Enquanto isso, enquanto Haru se abre para Rikuo, ele descobre que ela, assim como ele, está vivendo sozinha e quer sair de sua zona de conforto em um futuro incerto. O passado permanece muito tempo na mente e o futuro permanece ilusório. Numa encruzilhada ao longo de seus caminhos entrelaçados, esses três experimentam o que significa abandonar seus sentimentos de ontem e abraçar a mudança que o amanhã traz.`)
      .setImage('https://1.bp.blogspot.com/-L1mW2Oudn2I/Xu9zyv1nu7I/AAAAAAAAG18/FWBez9RP6cE7cMvyWj9Wr7Lqu0fIY9CHwCK4BGAsYHg/w640-h361/Capinha-Yesterday-wo-Utatte.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'otome game') {
    const embed = new Discord.MessageEmbed()
      .setTitle('OTOME GAME')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/otome-game.html')
      .setDescription(`https://nctv159.blogspot.com/p/otome-game.html \nKatarina Claes, de oito anos de idade, é a única filha de um duque, vivendo sua vida pacificamente e sem incidentes até que ela bate a cabeça em uma pedra ... e depois se lembra de que ela não é realmente a filha do duque. Ela costumava ser um otaku que morria a caminho da escola depois de passar a noite anterior jogando Fortune Lover, seu jogo otome favorito. Depois de perceber que seu ambiente atual parece estranhamente familiar, ela fica chocada ao descobrir que foi reencarnada no mundo de Fortune Lover como a vilã. A vilã do jogo geralmente acaba morta ou exilada, então Katarina decide usar seu conhecimento do jogo e suas rotas para evitar situações ruins. Mas é possível que a vilã chegue a um bom final?`)
      .setImage('https://1.bp.blogspot.com/-zmNWNgitjys/Xu96cn3ttMI/AAAAAAAAG2s/CUs51p5vfyE9SgMpKmt00QfoiqsjTGRMgCK4BGAsYHg/w640-h363/Otome-Game-no-Hametsu-Flag-shika-Nai-Akuyaku-Reijou-ni-Tensei-shiteshimatta.TV-Anime-Slated-for-April-2020-e1582212902529.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'tower of god') {
    const embed = new Discord.MessageEmbed()
      .setTitle('TOWER OF GOD')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/tower-of-god.html')
      .setDescription(`https://nctv159.blogspot.com/p/tower-of-god.html \nA Torre de Deus gira em torno de um garoto chamado Vigésimo Quinto Bam, que passou a maior parte de sua vida preso sob uma vasta e misteriosa Torre, com apenas sua amiga íntima, Rachel, para fazer-lhe companhia. Quando Rachel entra na Torre, Bam também consegue abrir a porta e enfrenta desafios em cada andar dessa torre enquanto tenta encontrar seu companheiro mais próximo.`)
      .setImage('https://1.bp.blogspot.com/-yW_bcJZj-44/Xu9_czAP6XI/AAAAAAAAG3o/JDqh2Z-gnccX_zAuvnNwgyeI_QA67ls_wCK4BGAsYHg/w640-h358/download%2B%25282%2529.jpeg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'tsuki ga kirei') {
    const embed = new Discord.MessageEmbed()
      .setTitle('TSUKI GA KIREI')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/tsuki-ga-kirei.html')
      .setDescription(`https://nctv159.blogspot.com/p/tsuki-ga-kirei.html \nCom um novo ano escolar chega uma nova multidão de colegas de classe e, no último ano do ensino médio, o aspirante a escritor Kotarou Azumi e o membro da equipe de pista Akane Mizuno acabam na mesma classe. Embora inicialmente completos estranhos, alguns encontros casuais despertam um desejo inocente em seus corações. Um olhar ansioso, um coração palpitante - as marcas do amor jovem entram em suas vidas quando o destino leva seus caminhos a uma cruz. No entanto, embora o amor seja paciente e o amor seja gentil, Kotarou e Akane descobrem que nem sempre é direto. Apesar do conforto que encontram na companhia um do outro, mágoa e ansiedade acompanham a busca pelos sentimentos em seus corações. Com a incerteza de como o outro realmente se sente, bem como os afetos concorrentes daqueles que o rodeiam, o caminho a seguir não é claro. Mesmo assim, sob a luz brilhante de uma linda lua cheia, Kotarou reúne coragem para fazer a Akane uma única pergunta, que muda para sempre o relacionamento quieto.`)
      .setImage('https://1.bp.blogspot.com/-x3Cyx1x7O4Q/XvNaXtdstdI/AAAAAAAAG44/6ypAfYOLW1cn7DQH_TZ2yt0lBFJJ-TQMACK4BGAsYHg/w799-h384/Tsuki-ga-Kirei-destaque.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'net-juu no susume') {
    const embed = new Discord.MessageEmbed()
      .setTitle('NET-JUU NO SUSUME')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/net-juu-no-susume.html')
      .setDescription(`https://nctv159.blogspot.com/p/net-juu-no-susume.html \nPela primeira vez desde que terminou o ensino médio, Moriko Morioka, 30 anos, está desempregada - e ela não poderia estar mais feliz. Tendo abandonado seu antigo emprego de mais de 11 anos, Moriko rapidamente se vira para os jogos online para passar seu agora abundante tempo livre, reinventando-se como o herói masculino bonito e arrojado "Hayashi" no MMO Fruits de Mer. Com as incômodas obrigações sociais do mundo real fora do caminho, ela mergulha alegremente de cabeça no reino do jogo, onde conhece prontamente a gentil e adorável curandeira Lily. Fazendo amizade quase instantaneamente, os dois se tornam inseparáveis, assim como a própria Moriko se torna cada vez mais envolvida em sua nova "vida" como Hayashi. Eventualmente, Moriko adota o estilo de vida recluso em sua totalidade, se aventurando na segurança de seu apartamento somente quando absolutamente necessário. Enquanto isso, sem o conhecimento de Moriko, um trabalhador corporativo tímido de 28 anos chamado Yuuta Sakurai também se conectou a Fruits de Mer do outro lado da cidade. Coincidentemente, esbarrando um no outro na loja de conveniência uma noite, ambos consideram a reunião como não mais do que apenas mais um embaraço com um estranho - no entanto, o destino tem mais para eles do que pensam.`)
      .setImage('https://1.bp.blogspot.com/-GriuyV57H3k/XvTut0k5kDI/AAAAAAAAG58/xNyP4U7q2E8bxtaSXUSkW9seHQeYC4ERACK4BGAsYHg/w640-h385/thumb_netjuu.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'death march') {
    const embed = new Discord.MessageEmbed()
      .setTitle('DEATH MARCH')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/death-march.html')
      .setDescription(`https://nctv159.blogspot.com/p/death-march.html \nSuzuki, um programador adulto, de repente, percebe que ele é jogado em um outro mundo vestindo uma roupa casual no nível 1. Ele ganhou alto nível e tesouros depois de usar 3 vezes mágias descartáveis, Meteor Shower, uma vez. Depois disso, ele pretende fazer em um outro mundo "passeios turísticos "? Se encontrando com 3 meninas da raça animal, belas irmãs de cabelo roxo e preto e uma menina elfa excêntrica de cabelo loura, juntamente com várias pessoas durante a sua viagem. Embora ocasionalmente lutando com demônios e lorde demônio, esta é uma história comovente de fantasia.`)
      .setImage('https://1.bp.blogspot.com/--moIJZtCAZE/XvXvvPl58uI/AAAAAAAAG7I/my8-LniYZdgR4bhlYd5aAxM1Dc-zpCyqQCK4BGAsYHg/w640-h361/death-march-fim.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else if (sayMessage == 'isekai wa smartphone') {
    const embed = new Discord.MessageEmbed()
      .setTitle('ISEKAI WA SMARTPHONE')
      .setColor('#00ff00')
      .setURL('https://nctv159.blogspot.com/p/isekai-wa-smartphone.html')
      .setDescription(`https://nctv159.blogspot.com/p/isekai-wa-smartphone.html \nEm um erro imprudente, Deus acidentalmente ataca Touya Mochizuki com um raio perdido! Como um pedido de desculpas, Deus oferece a ele um desejo e a chance de viver novamente em um mundo de fantasia mágico. Touya aceita alegremente a oferta e, por seu único desejo, pede apenas para manter seu smartphone com ele quando ele começa sua jornada neste mundo misterioso. Começando de novo neste novo mundo, Touya descobre que está cheio de magia - pela qual ele tem uma afinidade - e garotas bonitas disputando sua atenção. Essas garotas - as gêmeas Linze e Elze Silhoueska, Yumina Urnea Belfast, Leen e Yae Kokonoe - proporcionam a Touya sem fim de frustrações românticas, mas também companheirismo enquanto ele descobre os segredos deste novo mundo.`)
      .setImage('https://1.bp.blogspot.com/-u2baMD_H3_4/XvY_kA84EbI/AAAAAAAAG8g/LMVEL1oO3fwAAlsR1ifgHw-3iymHYXAcwCK4BGAsYHg/w640-h375/428aa1142a3b08e9203ef6a587df89da.jpg')
      .setTimestamp()
      .setThumbnail('http://newcraft.6te.net/img/logoNC.png')
      .setFooter("NewCraft", "https://cdn.discordapp.com/attachments/742046290833178725/744997183421546617/tenor.gif");
    await message.channel.send(embed)
  } else {
    message.reply(`comando não recomenhecido ou anime não encontrado use: ${p}**`);
  };
};
