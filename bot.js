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

client.login("NDcwODI0NjA5NjA5MTU0NTcx.DoLRPw.YBXm9FoaIyZA54K-eFt12gQ3UXg");