const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = "-"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("ready", () => {
    setInterval(function(){
        client.guilds.get("526497370578485258").roles.find("name", "Members").edit({
            color : "RANDOM"
        });
    }, 60000)
});
 
client.login(process.env.BOT_TOKEN);
