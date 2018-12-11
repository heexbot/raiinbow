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


            if (message.content.startsWith("Fbc")) {

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
client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "Fclear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***```ضع عدد الرسائل التي تريد مسحها 👌```***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```php\nعدد الرسائل التي تم مسحها: " + textxt + "\n```").then(m => m.delete(3000));
        }    
    }
}
});

client.login(process.env.BOT_TOKEN);



