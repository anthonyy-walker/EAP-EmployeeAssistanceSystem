
const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'players',
    description: 'shows last 4 matches',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);

        let count = args[0];

        db.add(`count_`,`${count}` );
        message.react('✅')

    }
}


