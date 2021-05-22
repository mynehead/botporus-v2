module.exports = {
	name: 'message',
	execute(message) {
		//console.log(`${message.author.tag} in #${message.channel.name} sent: ${message.content}`);
		if(message.content.includes("subs"))message.reply("Check the pins in " + message.guild.channels.cache.get('845754502590234644').toString());
	},
};