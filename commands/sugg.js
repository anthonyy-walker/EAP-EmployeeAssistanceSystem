const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'addsugg',
    description: 'addes role',
    execute: async function (client, message, args,){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (message.channel.type == "dm") {
            message.author.send('Pong.');
        }
    }
}

