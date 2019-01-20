 const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");

client.on("message", message => {
    var prefix = "#";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**يجب عليك ان تكتب رساله **");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            message.channel.send(`**\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين**`); 
            message.delete();          
        }
        } else {
            return;
        }
    });

var prefix = "#";

client.on("message", message => {

            if (message.content.startsWith(prefix + "obc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`**\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين**`); 
 message.delete(); 
};     
}); 
client.on('message', message => {
    if (message.content.startsWith(prefix + "id")) {
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
        moment.locale('ar-TN');
var id = new  Discord.RichEmbed()
.setColor("RANDOM")
.addField(': انضمامك لسيرفر قبل', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.addField(': دخولك لديسكورد قبل', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true)
.addField(": النك نيم",`${h.nickname}`, true) .addField(": #",heg.discriminator, true)
.addField(`: البلينق`,`${h.presence.game && h.presence.game.name || '-'}`,true) .addField(': الحالة',`${h.presence.status}`,true)
.addField(`: الرتب`, `${message.guild.members.get(h.id).roles.map(r => `\`${r.name}\``).slice(1).join('\n') || 'لايوجد رتب'}`,true)                                                    
.setThumbnail(heg.avatarURL);
message.channel.send(id)
}    
});
client.on('message', message => { 
    var prefix = "#";
    if (message.author.boss) return;
    if (!message.content.startsWith(prefix)) return;
    let command = message.content.split(" ")[0];
    command = command.slice(prefix.length);
    if (command == "Roleadd") {
    if (!message.channel.guild) return;
    if(!message.guild.member(message.author).hasPermission("MANAGE_ROLES")) return message.reply("**:no_entry_sign:انت لا تملك صلاحيات **").then(msg => msg.delete(5000));;
    if(!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('**ضع منشن الشخص!!**').then(msg => {msg.delete(5000)});
    let MRole = message.content.split(" ").slice(2).join(" ");
    if(!MRole)return message.reply("يجب عليك وضع اسم الرتبة").then(msg => {msg.delete(5000)});
    message.guild.member(user).addRole(message.guild.roles.find("name", MRole));
    message.reply('*** Done :white_check_mark:  ***').then(msg => {msg.delete(10000)});
    }
    });
    client.on('message', message => {
    if (message.content.startsWith("#avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

client.on("message", message => {
  var prefix = "";
  if (message.content.startsWith(prefix + 'مسح')) {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(`ماعندك هذا البرمشن[*MANAGE_MESSAGES*] `).catch(console.error);
message.delete()
if(!message.channel.guild) return;
let args = message.content.split(" ").slice(1);

const messagecount = parseInt(args.join(' '));

message.channel.fetchMessages({

limit: messagecount

});
message.channel.send("**تم مسح الشات**"); 
message.delete();

};
  
});

client.login("NTM1NzU3Mzc3Mzc5NTAwMDMy.DyYDCQ.d4MVgAH5-_L3kfdocJstEyZFmAo");
