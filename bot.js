const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { bot.user.setGame('REDKATCODE') })

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '?news') {
    	message.reply('Well, this is sad! We appear to be in a blank spot. I am not able to find any news stuff. Check back soon!');
  	}
});

client.on('message', message => {
    if (message.content === '?get ready') {
    	message.reply('online and running perfectly.');
  	}
});

client.on('message', message => {
    if (message.content === '?about') {
    	message.reply('Well basically the way I work is I scan a offsite news dB and display that data in a Discord message for all to see! Right now I am 7 on a pH scale ( Basic get it?).');
  	}
});

client.on('message', message => {
    if (message.content === '?help') {
        // Don't forget to log the message!
       message.reply('?news - Displays upcoming/latest event.');
  	        message.reply('?get ready - Makes sure the bot can send messages.')
        message.reply('?about - Read a brief description of the bot.')
        message.reply('?help - Display all the commands needed.')
            }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
