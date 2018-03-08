var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: BOT_TOKEN,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected bot');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa':
                bot.sendMessage({
                    to: 287688828897198080,
                    message: 'lots of a'
					
                });
            break;
            case 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb':
                bot.sendMessage({
                    to: 287688828897198080,
                    message: 'lots of b'
					
                });
            break;
			// Just add any case commands if you want to..
         }
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
