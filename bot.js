const Discord = require('discord.js');


const client = new Discord.Client();


 


 


 

        

        



           




var prefix = "w";


var adminprefix = "F";


const developers = ["323888904602124299"]


client.on('message', message => {


    var argresult = message.content.split(` `).slice(1).join(' ');


      if (!developers.includes(message.author.id)) return;




  if (message.content.startsWith(adminprefix + 'setg')) {


    client.user.setGame(argresult);


      message.channel.send(`**تم تغيير حالتك الى** **${argresult}**`)


  } else 


     if (message.content === (adminprefix + "leave")) {


    message.guild.leave(); 


  } else 


  if (message.content.startsWith(adminprefix + 'setw')) {


  client.user.setActivity(argresult, {type:'WATCHING'});


      message.channel.send(`**تم تغيير الواتشنق الى** **${argresult}**`)


  } else 


  if (message.content.startsWith(adminprefix + 'setl')) {


  client.user.setActivity(argresult , {type:'LISTENING'});


      message.channel.send(`**تم تغير اللستنق الى ** **${argresult}**`)


  } else 


  if (message.content.startsWith(adminprefix + 'sets')) {


    client.user.setGame(argresult, "https://www.twitch.tv/dream");


      message.channel.send(`**تم تغيير الستريمنق الى** **${argresult}**`)


  }


  if (message.content.startsWith(adminprefix + 'setname')) {


  client.user.setUsername(argresult).then


      message.channel.send(`**تم تغيير اسمك الى ** ..**${argresult}** `)


} else


if (message.content.startsWith(adminprefix + 'setava')) {


  client.user.setAvatar(argresult);


    message.channel.send(`**تم تغيير صورتك الى**:**${argresult}** `);


}


});

 


client.on("message", message => {


            if (message.content.startsWith("%bc")) {

        if(message.channel.type === 'dm') return message.reply('This Command Is Only For Server!');

                         if (!message.member.hasPermission("ADMINISTRATOR")) return;

  let args = message.content.split(" ").slice(1);

  var argresult = args.join(' '); 

  message.guild.members.filter(m => m.presence.status !== 'all').forEach(m => {

 m.send(`${argresult}\n ${m}`);

})

 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'all').size}\` : عدد الاعضاء المستلمين`); 

 message.delete(); 

}

});






  client.on('message', async message => {

  if(message.content.startsWith( "رسالةF")) {

    let i = client.users.size;

    if(message.author.id !== '323888904602124299') return message.channel.send('❎ » هذا الأمر مخصص لصاحب البوت فقط');

    var args = message.content.split(' ').slice(1).join(' ');

    if(!args) return message.channel.send('❎ » يجب عليك كتابة الرسالة')

    setTimeout(() => {

      message.channel.send(`تم الارسال لـ ${i} شخص`)

    }, client.users.size * 500);

    client.users.forEach(s => {

      s.send(args).catch(e => i--);

    });

  }

});



client.on("message", (message) => {

    /// DREAM

   if (message.content.startsWith("Fnew")) { /// DREAM

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

 

 

  if (message.content.startsWith("Fclose")) {

        if (!message.channel.name.startsWith(`ticket-`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);

 

       message.channel.send(`هل انت متأكد من اقفالك للتذكرة اذا متأكد اكتب Fconfirm`)

           .then((m) => {

               message.channel.awaitMessages(response => response.content === 'Fconfirm', {

                       max: 1,

                       time: 20000,

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



client.on('message', message => {
if (message.content.startsWith("Fct")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`, 'text')
      }
});
client.on('message', message => {
if (message.content.startsWith("Fcv")) {
    var args = message.content.split(" ").slice(1);
    var argrst = args.join(' ');
                message.guild.createChannel(`${argrst}`,'voice')
          
        }
});

client.on('message', async message => {
  if(message.content.startsWith("Fvoicesetup")) {
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply(':x: **ليس لديك الصلاحيات الكافية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS','MANAGE_ROLES_OR_PERMISSIONS'])) return message.reply(':x: **ليس معي الصلاحيات الكافية**');
  var args = message.content.split(' ').slice(1).join(' ');
  if(args && !args.includes(0)) return message.channel.send(':negative_squared_cross_mark: » فشل اعداد الروم الصوتي .. __يجب عليك كتابة 0 في اسم الروم__');
  if(!args) args = `VoiceOnline: [ ${message.guild.members.filter(s => s.voiceChannel).size} ]`;
  message.channel.send(':white_check_mark: » تم عمل الروم الصوتي بنجاح');
  message.guild.createChannel(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`, 'voice').then(c => {
    c.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
    setInterval(() => {
      c.setName(`${args.replace(0, message.guild.members.filter(s => s.voiceChannel).size)}`).catch(err => {
        if(err) return;
      });
    },3000);
  });
  }
});


client.on("guildMemberAdd", member => {
        if(member.guild.id === "497814052941332490") {  // ايدي السيرفر
  const channel = member.guild.channels.find('id', '520956949437874187'); //ايدي الروم
if (!channel) return;
channel.send(`**<@${member.user.id}> Welcome To ~~FiveGroup~~  ** ❤️ `)  
}});
client.on("guildMemberRemove", member => {
        if(member.guild.id === "497814052941332490") { 
  const channel = member.guild.channels.find('id', '520956949437874187'); 
if (!channel) return;
  channel.send(`**${member.user.tag} Left The Server  ** 😭 `) 
}});
client.on('guildMemberAdd', member=> {
    member.addRole(member.guild.roles.find("name","FiveGroup")); //اسم ا��رتبة
    });

client.on('message', message => {

 

    if (message.content === "Fbot") {

var year = message.guild.createdAt.getFullYear()

var month = message.guild.createdAt.getMonth()

var day = message.guild.createdAt.getDate()

    let embed = new Discord.RichEmbed()

 

.addField('**Bot Servers**',`[ ${client.guilds.size} ]`)

.addField('**Users**',`[ ${client.users.size} ]`)

.addField('**Channels**',`[ ${client.channels.size} ]`)

.addField('**ID**',`[ ${client.user.id} ]`)

.addField('**Name**',`[ ${client.user.tag} ]`)

.addField('Requested by:', "<@" + message.author.id + ">")

.setColor("#51cde6")

.setDescription(`${message.guild.name}`)

     message.channel.sendEmbed(embed);

}

 

});


client.on("roleCreate", role => { client.setTimeout(() => { role.guild.fetchAuditLogs({ limit: 1, type: 30 }) .then(audit => { let exec = audit.entries.map(a => a.executor.username) try { let log = role.guild.channels.find('name', 'log'); if (!log) return; let embed = new Discord.RichEmbed() .setColor('RANDOM') .setTitle('➕ RoleCreated') .addField('Role Name', role.name, true) .addField('Role ID', role.id, true) .addField('By', exec, true) .setTimestamp() log.send(embed).catch(e => { console.log(e); }); } catch (e) { console.log(e); } }) }, 1000) }) client.on("roleDelete", role => { client.setTimeout(() => { role.guild.fetchAuditLogs({ limit: 1, type: 30 }) .then(audit => { let exec = audit.entries.map(a => a.executor.username) try { let log = role.guild.channels.find('name', 'log'); if (!log) return; let embed = new Discord.RichEmbed() .setColor('RANDOM') .setTitle('❌ RoleDeleted') .addField('Role Name:', role.name, true) .addField('Role ID:', role.id, true) .addField('By:', exec, true) .setTimestamp() log.send(embed).catch(e => { console.log(e); }); } catch (e) { console.log(e); } }) }, 1000) }) client.on("roleUpdate", (re,updated) => { client.setTimeout(() => { re.guild.fetchAuditLogs({ limit: 1, type: 30 }) .then(audit => { let exec = audit.entries.map(a => a.executor.username) try { let log = re.guild.channels.find('name', 'log'); if (!log) return; let embed = new Discord.RichEmbed() .setColor('BLACK') .setTitle("✏ Role Name Updated") .addField("Old",`${re.name}`,true) .addField("New",`${updated.name}`,true ) .addField("Role id",`${re.id}`,true ) .addField('By', exec, true) .setTimestamp() log.send(embed).catch(e => { console.log(e); }); } catch (e) { console.log(e); } }) }, 1000) }) client.on("channelDelete", dc => { const channel = dc.guild.channels.find("name", "log") if(channel) { var embed = new Discord.RichEmbed() .setTitle(dc.guild.name) .setDescription(`***Channel Deleted Name : *** **${dc.name}** ⬅️`) .setColor(`RANDOM`) .setTimestamp(); channel.sendEmbed(embed) } }); client.on('messageUpdate', (message, newMessage) => { if (message.content === newMessage.content) return; if (!message || !message.id || !message.content || !message.guild || message.author.bot) return; const channel = message.guild.channels.find('name', 'log'); if (!channel) return; let embed = new Discord.RichEmbed() .setAuthor(`${message.author.tag}`, message.author.avatarURL) .setColor('RANDOM') .setDescription(`✏ **Message Edited Sender <@${message.author.id}> Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``) .setTimestamp(); channel.send({embed:embed}); }); client.on('messageDelete', message => { if (!message || !message.id || !message.content || !message.guild || message.author.bot) return; const channel = message.guild.channels.find('name', 'log'); if (!channel) return; let embed = new Discord.RichEmbed() .setAuthor(`${message.author.tag}`, message.author.avatarURL) .setColor('RANDOM') .setDescription(`🗑️ **Message Deleted** **Sender <@${message.author.id}> Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``) .setTimestamp(); channel.send({embed:embed}); }); client.on('guildMemberAdd', member => { if (!member || !member.id || !member.guild) return; const guild = member.guild; 	 const channel = member.guild.channels.find('name', 'log'); if (!channel) return; let memberavatar = member.user.avatarURL const fromNow = moment(member.user.createdTimestamp).fromNow(); const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : ''; let embed = new Discord.RichEmbed() .setAuthor(`${member.user.tag}`, member.user.avatarURL) 	 .setThumbnail(memberavatar) .setColor('RANDOM') .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`) .setTimestamp(); channel.send({embed:embed}); }); client.on('guildMemberRemove', member => { if (!member || !member.id || !member.guild) return; const guild = member.guild; 	 const channel = member.guild.channels.find('name', 'log'); if (!channel) return; let memberavatar = member.user.avatarURL const fromNow = moment(member.joinedTimestamp).fromNow(); let embed = new Discord.RichEmbed() .setAuthor(`${member.user.tag}`, member.user.avatarURL) 	 .setThumbnail(memberavatar) .setColor('RAMDOM') .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`) .setTimestamp(); channel.send({embed:embed}); }); client.on('voiceStateUpdate', (oldM, newM) => { let m1 = oldM.serverMute; let m2 = newM.serverMute; let d1 = oldM.serverDeaf; let d2 = newM.serverDeaf; let ch = oldM.guild.channels.find('name', 'log') if(!ch) return; oldM.guild.fetchAuditLogs() .then(logs => { let user = logs.entries.first().executor if(m1 === false && m2 === true) { let embed = new Discord.RichEmbed() .setAuthor(`${newM.user.tag}`, newM.user.avatarURL) .setDescription(`${newM} has muted in server`) .setFooter(`By : ${user}`) ch.send(embed) } if(m1 === true && m2 === false) { let embed = new Discord.RichEmbed() .setAuthor(`${newM.user.tag}`, newM.user.avatarURL) .setDescription(`${newM} has unmuted in server`) .setFooter(`By : ${user}`) .setTimestamp() ch.send(embed) } if(d1 === false && d2 === true) { let embed = new Discord.RichEmbed() .setAuthor(`${newM.user.tag}`, newM.user.avatarURL) .setDescription(`${newM} has deafened in server`) .setFooter(`By : ${user}`) .setTimestamp() ch.send(embed) } if(d1 === true && d2 === false) { let embed = new Discord.RichEmbed() .setAuthor(`${newM.user.tag}`, newM.user.avatarURL) .setDescription(`${newM} has undeafened in server`) .setFooter(`By : ${user}`) .setTimestamp() ch.send(embed) } }) }); client.on("guildBanAdd", (guild, member) => { client.setTimeout(() => { guild.fetchAuditLogs({ limit: 1, type: 22 }) .then(audit => { let exec = audit.entries.map(a => a.executor.username); try { let log = guild.channels.find('name', 'log'); if (!log) return; client.fetchUser(member.id).then(myUser => { let embed = new Discord.RichEmbed() .setAuthor(exec) .setThumbnail(myUser.avatarURL) .addField('- Banned User:',`**${myUser.username}**`,true) .addField('- Banned By:',`**${exec}**`,true) .setFooter(myUser.username,myUser.avatarURL) .setTimestamp(); log.send(embed).catch(e => { console.log(e); }); }); } catch (e) { console.log(e); } }); }, 1000); });



client.login(process.env.BOT_TOKEN);



