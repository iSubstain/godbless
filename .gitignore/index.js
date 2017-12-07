const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()


var bot = new Discord.Client();
var prefix = ("!");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '!help GS Beta', type: 0}});
    console.log("» Bot Activé !");
})

bot.login('MzgzMjI5OTIwMTg2MzM1MjMy.DPhR6Q.GbpCIC3Qv031dCma3my0nKrstTM');

bot.on('message', message =>{

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{


    }

    if (message.content === "$dev"){
        let SSRole = message.guild.roles.find("name", "👑Owner");
        if(message.member.roles.has(SSRole.id)) {
        var dev_embed = new Discord.RichEmbed()   
            .setColor('#BD0A0A')
            .addField("Mise à jour Bot  [BETA]", "     **Downloading new packages...**")
            .setFooter("GodBless Shield       © 2017", "https://media.discordapp.net/attachments/332911890453889035/388373012589838338/termianl-icon3.png")
            .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/388372168724971521/662373_edit_512x512.png")
        message.channel.sendEmbed(dev_embed);
        console.log("» Commande Developper Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
            }

    }
    if (message.content === "$reload"){
        let SSRole = message.guild.roles.find("name", "👑Owner");
        if(message.member.roles.has(SSRole.id)) {
        var reload_embed = new Discord.RichEmbed()
            .setColor('#BD0A0A')
            .addField("Reload Bot  [BETA]", "     **Reloading ressources...**")
            .setFooter("GodBless Shield        © 2017", "https://media.discordapp.net/attachments/332911890453889035/388373012589838338/termianl-icon3.png")
            .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/388371200193331202/advanced-data_protection.png?width=497&height=497")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Developper Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
            }

    }
    if (message.content === "$ColorTest"){
        let SSRole = message.guild.roles.find("name", "👑Owner");
        if(message.member.roles.has(SSRole.id)) {
        var reload_embed = new Discord.RichEmbed()
            .setColor('#0080FF')
            .addField("Color Tester [BETA]", "  **New Color**")
            .setFooter("GodBless Shield       © 2017", "https://media.discordapp.net/attachments/332911890453889035/388373012589838338/termianl-icon3.png")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Developper Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
            }

    
        // »Commandes Non Admin//
        
    }
    if (message.content === prefix + "help"){
        var reload_embed = new Discord.RichEmbed()
            .setColor('#00e9ff')
            .addField(" » Commandes Help", "  **!help** : *Pour la liste des commandes disponible*")
            .addField(" » Commandes Exp", "  **!rank** : *Pour voir son level* \n**!leaderboard** : *Pour voir le leaderboard*")
            .addField("» Commandes Liens", " **!teams** : *Affiche le site de la GodBless* \n**!media** : *Error 404Not found*")
            .addField("» Commandes Utiles", "**!afk** : *Permet de te mettre AFK sur le serveur Discord*")
            .addField("» Commandes Memes", "**!rekt, !pepe, !halp** : *Affiche les memes disponible")
            .setFooter("GodBless Shield        © 2017", "https://cdn.discordapp.com/attachments/332911890453889035/383686173869998082/3dDoge.gif")
            .setThumbnail("https://media.discordapp.net/attachments/264967015553302529/383714716771549184/PC-Optimizer-System-Mechanic.png")
            message.channel.sendEmbed(reload_embed);
            console.log("» Commande Help Activé");

     }
    if (message.content === prefix + "leaderboard"){
        var reload_embed = new Discord.RichEmbed()
            .setColor('#0080FF')
            .addField("Exp Leaderboard", "  Leaderboard du serveur **☬ GodBless Family ✨ [BETA]** \n :arrow_right_hook: **https://mee6.xyz/levels/140226294435676161**")
        .setFooter("GodBless Shield         © 2017", "https://cdn.discordapp.com/attachments/332911890453889035/383686173869998082/3dDoge.gif")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Leaderboard Activé");

     }
    if (message.content === prefix + "teams"){
        let SSRole = message.guild.roles.find("name", "🛡GodBless");
        if(message.member.roles.has(SSRole.id)) {
        var reload_embed = new Discord.RichEmbed()
            .setColor('#010000')
            .addField("Site GodBless [ALPHA]", "  Guilde du serveur **☬ GodBless Family ✨ [BETA]** \n :arrow_right_hook: **https://www.guilded.gg/teams/WR0p8ZRY**")
        .setFooter("GodBless Shield        © 2017", "https://media.discordapp.net/attachments/332911890453889035/383731054483210244/fb_logo.png?width=496&height=496")
        .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/383685176330551297/venezuela_flag_bandera_by_paundpro-d5qb8k4.jpg?width=767&height=496")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Teams Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
            }

     }
     if (message.content === prefix + "halp"){
        var reload_embed = new Discord.RichEmbed()
            .setColor('#010000')
        .setImage("https://photos.lci.fr/images/767/1170/jean-marie-le-pen-fn-fec662-0@1x.jpeg")
        message.channel.sendEmbed(reload_embed);
        message.channel.sendMessage("JEANNE AU SECOUR HALP");
        console.log("» Commande Halp Activé");
     }
     if (message.content === prefix + "media"){
        var reload_embed = new Discord.RichEmbed()
        .setColor('#010000')
        .addField(" a” e'o^2€¢eó©y3‰çiÃÕÆ«¦§ö¼<Ï™A3ÀŽD¢ñôZ>@-UF@q", "ÐŽS«0‘DatabaseÐë7@yÜ¯Î!has been‹‡‡C 8r @ÐÞ¡@@‡}	reset ôywd ")
        .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/388468999018774528/895-512.png?width=497&height=497")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Media Activé");

     }
     if (message.content === prefix + "afk"){
        var reload_embed = new Discord.RichEmbed()
        .setColor("#046380")
        .addField("  » AFK System [BETA]", "**Cette personne est désormais AFK 💤** \n       _(Spam le pour le réveiller)_ ")
        .setFooter("GodBless Shield        © 2017", "https://cdn.discordapp.com/attachments/332911890453889035/383686173869998082/3dDoge.gif")
        .setImage("")
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande AFK Activé");

        // »Commandes memes//

    }
    if (message.content === prefix + "rekt"){
       var reload_embed = new Discord.RichEmbed()
       .setImage("https://media.discordapp.net/attachments/264967015553302529/388007821763018782/rekt.PNG")
       message.channel.sendEmbed(reload_embed);
       console.log("» Commande Meme Activé");
    }
    if (message.content === prefix + "pepe"){
        var reload_embed = new Discord.RichEmbed()
        .setImage("https://media.discordapp.net/attachments/264967015553302529/388008538074513419/pepe.jpg?width=356&height=498")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Meme Activé");
     }
     if (message.content === prefix + "$Test") {
        let SRole = message.guild.roles.find("name", "👑Owner");
        if(message.member.roles.has(SRole.id)) {
            //console.log(`Yay, the author of the message has the role!`);
            message.channel.sendMessage("Test lmfao");
        } else {
          message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
        }
    }
    if (message.content === "$maj"){
       var reload_embed = new Discord.RichEmbed()
       .setColor("#046380")
       .setThumbnail("https://cdn.discordapp.com/attachments/350760367439347722/388392505789382667/upload-icon.png")
       .addField(" **»** Mise à Jour GodBless Shield 🔰 disponible",  "\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
       .addField("**›** Depuis le", "\n08/12/2017")
       .addField("» Nouveautés", "**›** GodBless Shield🔰 ajouté au serveur Discord, il est aussi désormais hébergé sur un VPS \n**›** Ajout de la commande **!help** \n**›** Ajout de la commande **!meme** \n**›** Amélioration de la commande **!media** \n**›** Amélioration de la commande **!afk**")
       .addField("» Patchnote : **Not Added For This Version.**","▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
       .setFooter("GodBless Shield        © 2017", "https://media.discordapp.net/attachments/332911890453889035/388407776398802944/SERENA.png?width=280&height=497")
       .setTimestamp()
       message.channel.sendEmbed(reload_embed);
       console.log("» Commande MAJ Activé");
    }
});
