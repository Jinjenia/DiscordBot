const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	client.user.setStatus('available') // Can be 'available', 'idle', 'dnd', or 'invisible'
    	client.user.setPresence({
        game: {
            name: 'with my dick',
            type: 0
        }
    });
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
member.addRole(role);
client.sendMessage('181502086259671040', 'Welcome boi')

});

client.login(process.env.BOT_TOKEN);
