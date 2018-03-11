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

});

//MusicBot
//Joining Channel
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
    
  }
if (message.content === '/rainbowroad') {
	const ytdl = require('ytdl-core');const Discord = require('discord.js');
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

});

//MusicBot
//Joining Channel
client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  if (message.content === '/join') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voiceChannel) {
      const connection = await message.member.voiceChannel.join();
    } else {
      message.reply('You need to join a voice channel first!');
    }
    
  }
if (message.content === '/rainbowroad') {
	const ytdl = require('ytdl-core');
const dispatcher = connection.play(ytdl(
  'https://www.youtube.com/watch?v=G2vA6Dngzhs',
  { filter: 'audioonly' }));
}
});


client.login(process.env.BOT_TOKEN);

const dispatcher = connection.play(ytdl(
  'https://www.youtube.com/watch?v=G2vA6Dngzhs',
  { filter: 'audioonly' }));

});


client.login(process.env.BOT_TOKEN);
