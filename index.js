const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true})

bot.on("ready", async () => {
    console.log(`${bot.user.username} is online!`);
    bot.user.setGame("with a Hitman!")
});

bot.on("message", async message => {
    if(message,author.bot) return;
    if(message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let myRole = message.guild.roles.find(role => role.name === "Trainers");

    if(cmd === `${prefix}training`){
        return message.channel.send("<@&58724863176007713> Someone needs training")
    }
})

bot.login(botconfig.token);