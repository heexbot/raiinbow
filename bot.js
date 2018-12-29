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
       if(message.content.startsWith(prefix + 'active-Ar')) {
        let modlog = client.channels.find('new', 'الـــــــــشات_العام');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`اضغط على الصح عشان تتفعل`).then(msg => {
       
       
        msg.react('✅')
       .then(() => msg.react('✅'))
     
     
 
       let activeFilter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
     
       let active = msg.createReactionCollector(activeFilter, { time: 15000 });
     
                                                       
                               active.on("collect", r => {
                                   message.member.addRole(message.guild.roles.find("active", "Ar"));
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
       if(message.content.startsWith(prefix + 'active-En')) {
        let modlog = client.channels.find('new', 'الـــــــــشات_العام');
       if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
       message.channel.sendMessage(`click ✅ to active  `).then(msg => {
       
       
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


client.on("message", (message) => {


    /// DREAM


   if (message.content.startsWith("!new")) { /// DREAM


        const reason = message.content.split(" ").slice(1).join(" "); /// DREAM


        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);


        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`); /// ALPHA CODES


        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {


            let role = message.guild.roles.find("name", "Support Team");


            let role2 = message.guild.roles.find("name", "@everyone");


            c.overwritePermissions(role, {


                SEND_MESSAGES: true,


                READ_MESSAGES: true


            }); /// ALPHA CODES


            c.overwritePermissions(role2, {


                SEND_MESSAGES: false,


                READ_MESSAGES: false


            });


            c.overwritePermissions(message.author, {


                SEND_MESSAGES: true,


                READ_MESSAGES: true


            });


            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);


            const embed = new Discord.RichEmbed()


                .setColor(0xCF40FA)


                .addField(`Hey ${message.author.username}!`, `تم فتح تذكرة الرجاء انتظار الى حين يأتي مشرف ويقوم بلرد عليك`)


                .setTimestamp();


            c.send({


                embed: embed


            });


        }).catch(console.error);


    }






  if (message.content.startsWith("!close")) {


        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);




       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب -confirm`)


           .then((m) => {


               message.channel.awaitMessages(response => response.content === '-confirm', {


                       max: 1,


                       time: 2000000,


                       errors: ['time'],


                   }) /// DREAM


                   .then((collected) => {


                       message.channel.delete();


                   }) /// DREAM


                   .catch(() => {


                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {


                           m2.delete();


                       }, 3000);


                   });


           });


   }




});


client.login(process.env.BOT_TOKEN);






