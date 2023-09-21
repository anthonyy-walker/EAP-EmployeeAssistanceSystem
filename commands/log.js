const { timeStamp } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const Message = [];
const db = require('quick.db');
const prefix = '!r';
module.exports = {
    name: 'log',
    description: 'starts modmail',
    execute: async function (client, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('709988681884368947')) {
            return message.reply('Nope')
        } else {
            
            if (message.content.includes('') && (message.content.includes('')))
            db.add(`money_${message.guild.id}_${message.author.id}`, 1);

            const getGuild =  client.guilds.cache.get('507924040636432388');
            const getChannel =  getGuild.channels.cache.get('737310765694058590');

 getChannel.send(`** bot auto log** | Added one host to ${message.author}`);

        }
    }
   
}


   