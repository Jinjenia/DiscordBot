const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'dalen') {
		message.reply('jamm');
	}
});
/**
 * The ready event is vital, it means that only _after_ this will your bot start reacting to information
 * received from Discord
 */
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for new guild members
client.on('guildMemberAdd', member => {
	console.log('User ' + member.user.username + ' has joined the server!')
	
var role = member.guild.roles.find('name', '50cc');
member.addRole(role)

});
client.on('guildMemberAdd', member => {
	message.send('User ' + member.user.username + ' has joined the server!')
});

client.login(process.env.BOT_TOKEN);
