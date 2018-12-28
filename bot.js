 const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!'
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`Rewards Bot`,"http://twitch.tv/S-F")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});
 
 
client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('Members', 'not active'));
});
 
 
client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('new', 'الـــــــــشات_العام');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
       
       
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("Ar", "active"));
                                   message.member.removeRole(message.guild.roles.find("Members", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });



client.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', 'not active'));
});
 
 
client.on('message', message => {                      
    if(!message.channel.guild) return;
       if(message.content.startsWith(prefix + 'active')) {
        let modlog = client.channels.find('new', 'الـــــــــشات_العام');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
       
       
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("name", "En"));
                                   message.member.removeRole(message.guild.roles.find("Members", "not active"));
                                   msg.delete();
                                   message.channel.send(`**تم تفعيلك استمتع.**`).then(m => m.delete(1000));
     
                                   })
                                   })
                                   }
                                   });




client.login(process.env.BOT_TOKEN);






