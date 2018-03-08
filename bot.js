const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
	console.log('I am ready!');
});

client.on('message', message => {
	if (message.content === 'ping') {
		message.reply('pong');
	}
});
var serverid = "181502086259671040";
var drole = "267042704603480064";
bot.on('ready', function() {
  console.log("Successfully connected autorole: " + bot.username + " - (" + bot.id + ")");
});

bot.on('guildMemberAdd', function(callback) { /* Event called when someone joins the server */
  if(callback.guild_id == serverid)
    bot.addToRole({"serverID":serverid,"userID":callback.id,"roleID":drole},function(err,response) {
      if (err) console.error(err); /* Failed to apply role */
        /* some code */
	bot.sendMessage({
		to: 181502086259671040,
        message: 'Welcome to the server!'
	});
  });
 });

client.login(process.env.BOT_TOKEN);
