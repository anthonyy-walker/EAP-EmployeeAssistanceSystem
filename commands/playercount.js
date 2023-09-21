module.exports = {
	name: 'count',
    description: 'shows the recent patch',
    execute: async function (client, message, args){
        const Discord = require('discord.js');
        const db = require('quick.db');


		let bal1 = db.fetch(`count_`)
message.channel.send(`${bal1}`)
    }
}