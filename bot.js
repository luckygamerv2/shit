const Discord = require("discord.js");
const client = new Discord.Client();
client.on('ready', () => {


const prefix = "D"
client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== '444559925427961875') return;

if (message.content.startsWith(prefix + 'p')) {
  client.user.setGame(argresult);
    message.channel.sendMessage(:white_check_mark:  : ${argresult})
} else 

if (message.content.startsWith(prefix + 'w')) {
client.user.setActivity(argresult, {type:'WATCHING'});
 .   message.channel.sendMessage(:white_check_mark:  : ${argresult})
} else 
if (message.content.startsWith(prefix + 'l')) {
client.user.setActivity(argresult, {type:'LISTENING'});
    message.channel.sendMessage(:white_check_mark:  : ${argresult})
} else 

if (message.content.startsWith(prefix + 's')) {
  client.user.setGame(argresult, "https://www.twitch.tv/Justin-Ly0001");
    message.channel.sendMessage(:white_check_mark:  : ${argresult})
}

});

client.login('NTU3Njk4NDk4MDc4OTY1NzYx.D3MEwA.gZAF9ahf4opLvfwixnxJE2UB0ks');