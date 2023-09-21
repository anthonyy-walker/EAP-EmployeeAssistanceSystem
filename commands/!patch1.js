const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'patch1',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('795702703706734603')) {
            return message.reply('Nope')
        } else {
            const Guild = client.guilds.cache.get('567556957603627030')

            const role = Guild.roles.cache.find(r => r.name == 'Community')

            if (!role) return message.channel.send(`**${message.author.username}**, role not found`)
            
            Guild.members.cache.forEach(member => member.roles.add(role).then(console.log(`gave ${member} the role`)))        }
    }
}