const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pongxdxd');
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
const token = "<auth_token>" // Recommended to load from json file.

Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});

music(Bot, {
	prefix: '-',        // Prefix of '-'.
	global: false,      // Server-specific queues.
	maxQueueSize: 10,   // Maximum queue size of 10.
	clearInvoker: true, // If permissions applicable, allow the bot to delete the messages that invoke it (start with prefix)
    channel: 'music'    // Name of voice channel to join. If omitted, will instead join user's voice channel.
});
Bot.login(BOT_TOKEN);


client.login(process.env.BOT_TOKEN);
