const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot =  new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
const { Client, MessageEmbed } = require('discord.js');


bot.on("ready", () => {
        console.log(`${bot.user.username} is online`);
        setInterval(() => {
          bot.user.setActivity(`pika pika pikachuuu!`, { type: "LISTENING" })
      }, 15000)
          bot.user.setPresence({     
            status: "idle"   
          });
        
      }) 
bot.on("message", async message => {
         if(message.author.bot || message.channel.type === "dm") return;
       let prefix = botconfig.prefix;
       let messageArray = message.content.split(" ")
       let cmd = messageArray[0];
       let args = messageArray.slice[0];
        
        if (message.content == "pika"){message.channel.send("<:pika_dab:705107425619083356> ")}      
        if (message.content == "Pika"){message.channel.send("<:pika_dab:705107425619083356> ")}      


  
        if (cmd == `${prefix}invite`) {
  const embed = new MessageEmbed()
.setTitle("Invite me in your server!")
.setColor(`RANDOM`)
.setAuthor(bot.user.username, bot.user.avatarURL())
.setThumbnail(bot.user.avatarURL())
.setURL("https://discord.com/oauth2/authorize?client_id=717647845125259285&scope=bot&permissions=2146958847")
.setFooter(
message.member.user.username,
message.member.user.displayAvatarURL()
)
.setTimestamp();

message.channel.send(embed);
};

        
         if (cmd == `${prefix}info`) {
                 const embed = new MessageEmbed()
                 .setColor(`RANDOM`)
                 .setAuthor(bot.user.username, bot.user.avatarURL())
                 .setThumbnail(bot.user.avatarURL())
           
.setTitle("❯ Botinfo!") 
.addField('General', [
  `**❯ Client:** ${bot.user.tag} (${bot.user.id})`,
  `**❯ Commands:** ${bot.commands.size}`,
  `**❯ Servers:** ${bot.guilds.cache.size.toLocaleString()} `,
  `**❯ Users:** ${bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`,
  `**❯ Channels:** ${bot.channels.cache.size.toLocaleString()}`,
  `**❯ Owner:** rikai#0628`,
  `**❯ Creation Date:** ${bot.user.createdTimestamp}`,
  `**❯ Node.js:** ${process.version}`,

  '\u200b'
])
.setFooter(
  message.member.user.username,
  message.member.user.displayAvatarURL()
)
.setTimestamp();

                message.channel.send(embed);
         }

        
        
        
        
        
        

});
bot.login(botconfig.token);
