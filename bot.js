const Discord = require('discord.js');


const client = new Discord.Client();


 
 
 var prefix = "G"


 
const welcome = JSON.parse(fs.readFileSync('./welcomer.json' , 'utf8'));
 
client.on('message', message => {
           if (!message.channel.guild) return;

    let room = message.content.split(" ").slice(1);
    let findroom = message.guild.channels.find('name', `${room}`)
    if(message.content.startsWith(prefix + "setWelcomer")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
if(!room) return message.channel.send('Please Type The Channel Name')
if(!findroom) return message.channel.send('Cant Find This Channel')
let embed = new Discord.RichEmbed()
.setTitle('**Done The Welcome Code Has Been Setup**')
.addField('Channel:', `${room}`)
.addField('Requested By:', `${message.author}`)
.setThumbnail(message.author.avatarURL)
.setFooter(`${client.user.username}`)
message.channel.sendEmbed(embed)
welcome[message.guild.id] = {
channel: room,
onoff: 'On',
by: 'On',
dm: 'Off'
}
fs.writeFile("./welcomer.json", JSON.stringify(welcome), (err) => {
if (err) console.error(err)
})
    }})
client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleWelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          onoff: 'Off'
        }
          if(welcome[message.guild.id].onff === 'Off') return [message.channel.send(`**The Welcome Is __𝐎𝐍__ !**`), welcome[message.guild.id].onoff = 'On']
          if(welcome[message.guild.id].onoff === 'On') return [message.channel.send(`**The Welcome Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].onoff = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })
        
        client.on('message', message => {
  
    if(message.content.startsWith(prefix + "toggleDmwelcome")) {
        if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
        if(!welcome[message.guild.id]) welcome[message.guild.id] = {
          dm: 'Off'
        }
          if(welcome[message.guild.id].dm === 'Off') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐍__ !**`), welcome[message.guild.id].dm = 'On']
          if(welcome[message.guild.id].dm === 'On') return [message.channel.send(`**The Welcome Dm Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].dm = 'Off']
          fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
            if (err) console.error(err)
            .catch(err => {
              console.error(err);
          });
            })
          }
          
        })

        client.on('message', message => {
  
            if(message.content.startsWith(prefix + "toggleInvitedby")) {
                if(!message.channel.guild) return message.reply('**This Command Only For Servers**');
                if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('**Sorry But You Dont Have Permission** `MANAGE_GUILD`' );
                if(!welcome[message.guild.id]) welcome[message.guild.id] = {
                  by: 'Off'
                }
                  if(welcome[message.guild.id].by === 'Off') return [message.channel.send(`**The Invited By Is __𝐎𝐍__ !**`), welcome[message.guild.id].by = 'On']
                  if(welcome[message.guild.id].by === 'On') return [message.channel.send(`**The Invited By Is __𝐎𝐅𝐅__ !**`), welcome[message.guild.id].by = 'Off']
                  fs.writeFile("./welcome.json", JSON.stringify(welcome), (err) => {
                    if (err) console.error(err)
                    .catch(err => {
                      console.error(err);
                  });
                    })
                  }
                  
                })
                

client.on("guildMemberAdd", member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
        if(welcome[member.guild.id].onoff === 'Off') return;
    let welcomer = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
    let memberavatar = member.user.avatarURL
      if (!welcomer) return;
      if(welcomer) {
         moment.locale('ar-ly');
         var h = member.user;
        let heroo = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(h.avatarURL)
        .setAuthor(h.username,h.avatarURL)
        .addField(': تاريخ دخولك الدسكورد',`${moment(member.user.createdAt).format('D/M/YYYY h:mm a')} **\n** \`${moment(member.user.createdAt).fromNow()}\``,true)
         .setFooter(`${h.tag}`,"https://images-ext-2.discordapp.net/external/JpyzxW2wMRG2874gSTdNTpC_q9AHl8x8V4SMmtRtlVk/https/orcid.org/sites/default/files/files/ID_symbol_B-W_128x128.gif")
     welcomer.send({embed:heroo});
      }})


client.on('guildMemberAdd',async member => {
            if(!welcome[member.guild.id]) welcome[member.guild.id] = {
          onoff: 'Off'
        }
    if(welcome[member.guild.id].onoff === 'Off') return;
    const Canvas = require('canvas');
    const jimp = require('jimp');
    const w = ['./welcome_4.png'];
          let Image = Canvas.Image,
              canvas = new Canvas(800, 300),
              ctx = canvas.getContext('2d');
          ctx.patternQuality = 'bilinear';
          ctx.filter = 'bilinear';
          ctx.antialias = 'subpixel';
          ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
          ctx.shadowOffsetY = 2;
          ctx.shadowBlur = 2;
          ctx.stroke();
          ctx.beginPath();
   
          fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
              if (err) return console.log(err);
              let BG = Canvas.Image;
              let ground = new Image;
              ground.src = Background;
              ctx.drawImage(ground, 0, 0, 800, 300);
   
  })
   
                  let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
                  jimp.read(url, (err, ava) => {
                      if (err) return console.log(err);
                      ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                   if (err) return console.log(err);
   
            ctx.font = '36px Arial';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(member.user.username, 545, 177);
           
            ctx.font = '16px Arial Bold';
            ctx.fontSize = '72px';
            ctx.fillStyle = "#ffffff";
            ctx.textAlign = "center";
            ctx.fillText(`Your The Member ${member.guild.memberCount}`, 580, 200);
           
            let Avatar = Canvas.Image;
            let ava = new Avatar;
            ava.src = buf;
            ctx.beginPath();
            ctx.arc(169.5, 148, 126.9, -100, Math.PI * 2, true);
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(ava, 36, 21, 260, 260);
             
            let c = member.guild.channels.find('name', `${welcome[member.guild.id].channel}`)
            if(!c) return;
            c.sendFile(canvas.toBuffer());
   
  });
  });
  });

  const invites = {};

const wait = require('util').promisify(setTimeout);

client.on('ready', () => {
  wait(1000);

  client.guilds.forEach(g => {
    g.fetchInvites().then(guildInvites => {
      invites[g.id] = guildInvites;
    });
  });
});

client.on('guildMemberAdd', member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  by: 'Off'
                }
    if(welcome[member.guild.id].by === 'Off') return;
  member.guild.fetchInvites().then(guildInvites => {
    const ei = invites[member.guild.id];
    invites[member.guild.id] = guildInvites;
    const invite = guildInvites.find(i => ei.get(i.code).uses < i.uses);
    const inviter = client.users.get(invite.inviter.id);
    const logChannel = member.guild.channels.find(channel => channel.name === `${welcome[member.guild.id].channel}`);
    if(!logChannel) return;
      setTimeout(() => {
    logChannel.send(`Invited By: <@${inviter.id}>`);
  },2000)
  });
});

client.on("guildMemberAdd", member => {
                    if(!welcome[member.guild.id]) welcome[member.guild.id] = {
                  dm: 'Off'
                }
        if(welcome[member.guild.id].dm === 'Off') return;
  member.createDM().then(function (channel) {
  return channel.send(`:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})

 

        

        



           




var prefix = "w";


var adminprefix = "G";


const developers = ["323888904602124299","503547627346984960"]


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


            if (message.content.startsWith("Gbc")) {

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

  if(message.content.startsWith( "رسالةG")) {

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

   if (message.content.startsWith("Gnew")) { /// DREAM

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


client.on('message', message => {
if (message.content.startsWith("Fkick")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.kick("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء كيك الى : " + mention.tag);
};
});
client.on('message', message => {
if (message.content.startsWith("Fban")) {
    var mention = message.mentions.members.first();
    if(!mention) return message.channel.send("يجب منشن العضو");

    mention.ban("By: " + message.author.tag);
    
    message.channel.send("تم أعطاء باند الى : " + mention.tag);
};
});



client.on("message", (message) => {
    if (message.content.startsWith("Gcv")) {
                if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
            let args = message.content.split(" ").slice(1);
        message.guild.createChannel(args.join(' '), 'voice');
        message.channel.sendMessage('تـم إنـشاء روم صـوتي') // Last Codes - Ayman
        
    }
    });

client.on('message', msg => {
var prefix ="G"
            if(!msg.guild) return;
    if (msg.content.startsWith(prefix +'ct')) {
     let args = msg.content.split(" ").slice(1);
    if(!msg.channel.guild) return msg.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
let ra3d = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(msg.author.avatarURL)
.setDescription(`هل انت متاكد من انشاء روم كتابي؟\n  ✅  \n  ❌ \n  لديك 60 ثانية للاختيار`)                                                                                                                                                                       
msg.channel.send(ra3d).then(message => {
 message.react('✅').then(r=>{
 message.react('❌').then(r=>{           
 let eyadandr3d = (reaction, user) => reaction.emoji.name === '✅' && user.id === msg.author.id;
 let eyadandr3dd = (reaction, user) => reaction.emoji.name === '❌' && user.id === msg.author.id;
 let tt  = message.createReactionCollector(eyadandr3d, { time: 60000 });
 let er  = message.createReactionCollector(eyadandr3dd, { time: 60000 });
er.on("collect", r => {
msg.channel.send("`تم الالغاء`")
message.delete();
})
tt.on("collect", r => {
msg.guild.createChannel(args.join(' '), 'text').then(ra3deyad => {
channelCreated = ra3deyad.createdAt
      const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setImage()
  .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKeHPs6TdfglIxEI9LYVtHSF_8WBLeR2jP5ReFxlo0z7KKOKrL')
  .setURL('')
  .addField(`اسم الروم`, `${ra3deyad.name}`, true)
  .addField(`أيدي الروم`, `${ra3deyad.id}`, true)
  .addField(`نوع الروم`, `${ra3deyad.type}`, true)
  .addField(`متى انشأت الروم`, `${channelCreated}`)
 msg.channel.send({embed})
    message.delete();
})
})
})
})
})
}
});

client.on('message', async message => {
  if(message.content.startsWith("Gvoi")) {
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





client.on("message", message => {
    var prefix = "G";
 
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
   if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('⚠ | **ليس لديك صلاحيات**');
        var msg;
        msg = parseInt();
     
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.sendMessage("", {embed: {
        title: "Done | تــم",
        color: 0x06DF00,
        description: "تم مسح الرسائل بنجاح",
        footer: {
          text: "Name Bot."
        }
      }}).then(msg => {msg.delete(3000)});
                          }
 
     
});





client.on('message', message => {
 
    if (message.content === "Gclroom") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false
 
           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
 
if (message.content === "Goproom") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
 
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true
 
           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
 
 
 
});





client.login(process.env.BOT_TOKEN);






