const fs = require('fs');
const Discord = require('discord.js');
const { token } = require('./config.json');

const client = new Discord.Client();
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args, client));
	} else {
		client.on(event.name, (...args) => event.execute(...args, client));
	}
}

/**client.on("message", function(message){
    if(message.content.includes("subs"))message.reply("Check the pins in " + message.guild.channels.cache.get('845754502590234644').toString());
});
*/

client.login(token);