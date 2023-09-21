const { timeStamp } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const Message = [];
const db = require('quick.db');
const prefix = '!r';
module.exports = {
    name: 'set',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);

        if (!executor.roles.cache.has('709988681884368947')) {
            return message.reply('Nope')
        } else {
            let status = args.join(" ");

            client.user.setPresence({ activity: { name: `${status}` }, status: 'dnd' })
            let e7 = new Discord.MessageEmbed()
            .setDescription(`Updated the status to  **${status}** `)
           .setFooter(``)
            .setTimestamp()
            message.channel.send(e7);
        }
    }
}