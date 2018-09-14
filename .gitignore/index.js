const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('database.json')
const db = low(adapter);

db.defaults({ histoires: [], xp: []}).write()


var bot = new Discord.Client();
var prefix = ("!");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '!help GS 1.5', type: 0}});
    console.log("» Bot Activé !");
})

bot.login(process.env.TOKEN);

bot.on('message', message =>{("IM BACK BITCH ! HEROES NEVER DIE")

    var msgauthor = message.author.id;

    if(message.author.bot)return;

    if(!db.get("xp").find({user: msgauthor}).value()){
        db.get("xp").push({user: msgauthor, xp: 1}).write();
    }else{
    
        // CMD Admin

    }

    if (message.content === "$dev"){
        let SSRole = message.guild.roles.find("name", "Developper ✔");
        if(message.member.roles.has(SSRole.id)) {
        var dev_embed = new Discord.RichEmbed()   
            .setColor('#BD0A0A')
            .addField("Mise à jour Bot  [BETA]", "     **Downloading new packages...**")
            .setFooter("GodBless Shield       © 2018", "https://media.discordapp.net/attachments/332911890453889035/388373012589838338/termianl-icon3.png")
            .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/388372168724971521/662373_edit_512x512.png")
        message.channel.sendEmbed(dev_embed);
        console.log("» Commande Developper Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
            }

    }
    if (message.content === "$reload"){
        let SSRole = message.guild.roles.find("name", "Developper ✔");
        if(message.member.roles.has(SSRole.id)) {
        var reload_embed = new Discord.RichEmbed()
            .setColor('#BD0A0A')
            .addField("Reload Bot  [BETA]", "     **Reloading ressources...**")
            .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/332911890453889035/388373012589838338/termianl-icon3.png")
            .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/388371200193331202/advanced-data_protection.png?width=497&height=497")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Developper Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
            }

    }
    if (message.content === "$ColorTest"){
        let SSRole = message.guild.roles.find("name", "Developper ✔");
        if(message.member.roles.has(SSRole.id)) {
        var reload_embed = new Discord.RichEmbed()
            .setColor('#0080FF')
            .addField("Color Tester [BETA]", "  **New Color**")
            .setFooter("GodBless Shield       © 2018", "https://media.discordapp.net/attachments/332911890453889035/388373012589838338/termianl-icon3.png")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Developper Activé");
        } else {
        message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
        //.setImage("https://cdn.discordapp.com/attachments/206569632323076096/470648401755766785/ed4.png") A GARDER DELETE THIS
            }
        }
        if (message.content === "$maj"){
            let SSRole = message.guild.roles.find("name", "Developper ✔");
            if(message.member.roles.has(SSRole.id)) {
           var reload_embed = new Discord.RichEmbed()
           .setColor("#046380")
           .setThumbnail("https://media.discordapp.net/attachments/384491991372922891/399416364063916033/shield-flat.png")
           .addField(" **»** Mise à Jour GodBless Shield 🔰 disponible",  "\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
           .addField("**›** Depuis le   ", "\n07/01/2018") 
           .addField("» Nouveautés", "**›** Le Bot GodBless Shield🔰 passe désormais en version **officiel 1.0** :tada:  \n**›** Le code du Bot a était upgrade pour :two: :regional_indicator_k: :one: :eight:  \n**›** Les commandes sont maintenant en officiel sauf la commande **!afk** \n**›** Réactivation de la commande **!media** _(Youtube)_ \n**›** Amélioration de la commande **!halp** \n**›** Ajout de la commande **BakerCat**")
           .addField("» Patchnote : ","**›** Correction du bug avec la commande **!media** \n**›** Correction de bug divers (Erreur Log de la commande **!halp**) \n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
           .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/332911890453889035/388407776398802944/SERENA.png?width=280&height=497")
           .setTimestamp()
           message.channel.sendEmbed(reload_embed);
           console.log("» Commande MAJ Activé");
            }
        }
        if (message.content === "$maintenance"){
            let SSRole = message.guild.roles.find("name", "Developper ✔");
            if(message.member.roles.has(SSRole.id)) {
       var reload_embed = new Discord.RichEmbed()
       .setColor("#046380")
       .setThumbnail("https://media.discordapp.net/attachments/332911890453889035/399076048601481216/895-512.png")
       .addField(" **»** Maintenance Système GodBless Shield 🔰",  "\n▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
       .addField("**›** Depuis le   ", "\n27/07/2018") 
       .addField("» **Maintenance Du GodBless Shield**", "\n**›** Mise à jour du bot.")
       .addField("» Patchnote : **Mise à Jour du bot 1.6 KAPPAPRIDE**", "▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔▔")
       .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/332911890453889035/388407776398802944/SERENA.png?width=280&height=497")
       .setTimestamp()
       message.channel.sendEmbed(reload_embed);
       console.log("» Commande Admin Activé");
            }
         
        // »Commandes Non Admin//
    
        }
    if (message.content === prefix + "help"){
        var reload_embed = new Discord.RichEmbed()
            .setColor('#00e9ff')
            .addField(" » Commandes Help", "  **!help** : *Pour la liste des commandes disponible*")
            .addField(" » Commandes Média", "  **!ytb** : *Pour afficher la chaîne de SofZilog*")
            //.addField(" » Commandes Exp", "  **!rank** : *Pour voir son level* \n**!leaderboard** : *Pour voir le leaderboard*")
            .addField("» Commandes Utiles", "**!afk** : *Permet de te mettre AFK sur le serveur Discord*")
            .addField("» Commandes Memes", "**!rekt, !pepe, !halp** : *Affiche les memes disponible* \n**NOTE :** `Les Commandes Memes sont temporairement Disable sauf !halp`")
            .setFooter("GodBless Shield        © 2018", "https://cdn.discordapp.com/attachments/332911890453889035/383686173869998082/3dDoge.gif")
            .setThumbnail("https://media.discordapp.net/attachments/264967015553302529/383714716771549184/PC-Optimizer-System-Mechanic.png")
            message.channel.sendEmbed(reload_embed);
            console.log("» Commande Help Activé");

     }
    if (message.content === prefix + "leaderboard"){
        var reload_embed = new Discord.RichEmbed()
            .setColor('#0080FF')
            .addField("Expérience Leaderboard **(1.0)**", "**›**  Leaderboard du serveur **☬ GodBless Family ✨** \n :arrow_right_hook: **https://mee6.xyz/levels/140226294435676161**")
        .setFooter("GodBless Shield         © 2018", "https://media.discordapp.net/attachments/383036516328538125/412032781686931471/384.gif")
        //.setThumbnail("https://media.discordapp.net/attachments/383036516328538125/412032781686931471/384.gif")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande Leaderboard Activé");
    }
        if (message.content === prefix + "teams"){
            let SSRole = message.guild.roles.find("name", "Developper ✔");
            if(message.member.roles.has(SSRole.id)) {
            var reload_embed = new Discord.RichEmbed()
                .setColor('#4e31ba')
                .addField("Site GodBless [ALPHA]", "**›**  Guilde du serveur **☬ GodBless Family ✨** \n :arrow_right_hook: **https://www.guilded.gg/teams/WR0p8ZRY**")
            .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/332911890453889035/383731054483210244/fb_logo.png?width=496&height=496")
            .setThumbnail("https://media.discordapp.net/attachments/383036516328538125/412274903421812757/discordpic3.0.jpg?width=908&height=511")
            //.setThumbnail("https://media.discordapp.net/attachments/332911890453889035/383685176330551297/venezuela_flag_bandera_by_paundpro-d5qb8k4.jpg?width=767&height=496")
            message.channel.sendEmbed(reload_embed);
            console.log("» Commande Teams Activé");
            } else {
            message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
                }


     }
     if (message.content === prefix + "God"){
        var reload_embed = new Discord.RichEmbed()
        .setColor('#c4302b')
        .addField("GodBless secrets", "**›** Chaîne Youtube de **iSubstain** \n :arrow_right_hook: **https://www.youtube.com/c/iSubstain**")
        .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/384491991372922891/399390886577963028/Youtube_IS_GHey.gif")
        .setThumbnail("https://media.discordapp.net/attachments/384491991372922891/399391159228694542/Android-Apps_Google_YouTube-Gaming_Screenshots_082615_15.png")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande God Activé");

     }
     if (message.content === prefix + "ytb"){
        var reload_embed = new Discord.RichEmbed()
        .setColor('#c4302b')
        .addField("Chaîne youtube", "**›** Chaîne Youtube de **SofZilog** \n :arrow_right_hook: **https://www.youtube.com/channel/UCGYQHkdzB838TdLvmjf1NlQ**")
        .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/384491991372922891/399390886577963028/Youtube_IS_GHey.gif")
        .setThumbnail("https://media.discordapp.net/attachments/384491991372922891/399391159228694542/Android-Apps_Google_YouTube-Gaming_Screenshots_082615_15.png")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande ytb media Activé");


     }
     if (message.content === prefix + "afk"){
        var reload_embed = new Discord.RichEmbed()
        .setColor("#046380")
        .addField("  » AFK System [BETA]", "**Cette personne est désormais AFK 💤** \n       _(Spam le pour le réveiller)_ ")
        .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/383036516328538125/412035466670374912/shutdown-button-clipart-animated-gif-1.gif?width=511&height=511")
        .setImage("")
        .setTimestamp()
        .setAuthor(message.author.username, message.author.avatarURL)
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande AFK Activé");
     
    }
    if (message.content === prefix + "BakerCat"){
        var reload_embed = new Discord.RichEmbed()
        .setColor('#0080FF')
        .addField("Baker Cat !", "**›**  Site Baker Cat ✨ \n :arrow_right_hook: **https://baker.cat/**")
        .setFooter("GodBless Shield         © 2018", "https://media.discordapp.net/attachments/384491991372922891/399412753460101121/giphy_1.gif")
        message.channel.sendEmbed(reload_embed);
        console.log("» Commande PusheenCat Activé");
    }


    
    if (message.content === prefix + "halp"){
       var reload_embed = new Discord.RichEmbed()
           .setColor('#046380')
       .addField("**»** DEMANDE HALP ACTIVÉ !", "_JEANNE AU SECOUR HALP_ ")
       .setImage("https://photos.lci.fr/images/767/1170/jean-marie-le-pen-fn-fec662-0@1x.jpeg")
       .setFooter("Pierreeeeeee        © 2018", "https://media.discordapp.net/attachments/384491991372922891/399401838727790592/Screenshot_24.png")
       message.channel.sendEmbed(reload_embed);
       //message.channel.sendMessage("JEANNE AU SECOUR HALP");
       console.log("» Commande Halp Activé");

    //}
    //if (message.content === prefix + "rekt"){
       //var reload_embed = new Discord.RichEmbed()
       //.setImage("https://media.discordapp.net/attachments/264967015553302529/388007821763018782/rekt.PNG")
      // message.channel.sendEmbed(reload_embed);
      // console.log("» Commande Meme Activé");
    //}
    //if (message.content === prefix + "pepe"){
        //var reload_embed = new Discord.RichEmbed()
        //.setImage("https://media.discordapp.net/attachments/264967015553302529/388008538074513419/pepe.jpg?width=356&height=498")
        //message.channel.sendEmbed(reload_embed);
        //console.log("» Commande Meme Activé");
     }
     if (message.content === prefix + "$Test") {
        let SRole = message.guild.roles.find("name", "Developper ✔");
        if(message.member.roles.has(SRole.id)) {
            //console.log(`Yay, the author of the message has the role!`);
            message.channel.sendMessage("Test lmfao :tada: ");
        } else {
          message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
        }
        if (message.content === "Azurii userinfo"){
            let SSRole = message.guild.roles.find("name", "Rythm");
            if(message.member.roles.has(SSRole.id)) {
            var reload_embed = new Discord.RichEmbed()
                .setColor('#4e31ba')
                .addField("Site GodBless [ALPHA]", "**›**  Guilde du serveur **☬ GodBless Family ✨** \n :arrow_right_hook: **https://www.guilded.gg/teams/WR0p8ZRY**")
            .setFooter("GodBless Shield        © 2018", "https://media.discordapp.net/attachments/332911890453889035/383731054483210244/fb_logo.png?width=496&height=496")
            .setThumbnail("https://media.discordapp.net/attachments/383036516328538125/412274903421812757/discordpic3.0.jpg?width=908&height=511")
            //.setThumbnail("https://media.discordapp.net/attachments/332911890453889035/383685176330551297/venezuela_flag_bandera_by_paundpro-d5qb8k4.jpg?width=767&height=496")
            message.channel.sendEmbed(reload_embed);
            console.log("» Commande Teams Activé");
            } else {
            message.channel.sendMessage(":arrow_right: **You Don't Have The Permission** :x: ")
                }
    if (message.content === "$loop") { 
      var interval = setInterval (function () {
        bot.sendMessage(message.channel, "123")
      }, 1 * 1); 
        }
    }
});
