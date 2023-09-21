const { timeStamp } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const Message = [];
const db = require('quick.db');
const prefix = '!r';
module.exports = {
    name: 'purge',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('757375976844820490')) {
            return message.reply('Nope')
        } else {

            let guild = client.guilds.cache.get('507924040636432388');
            const role = guild.roles.cache.find(role => role.name === 'Customs hosts')
            const logsr = await guild.channels.cache.get('737310765694058590');
            const comp = await client.guilds.cache.get('762497501613785088');
            const logrs = await comp.channels.cache.get('762518469928681494');
    
            let e1 = new Discord.MessageEmbed()
            .setTitle('Host Purge')
            .setDescription('If you would like to keep your customs host role, react below. **After you react check your dms from me.** :white_check_mark:')
            .setTimestamp()
            let er = await message.channel.send(e1)
            er.react('✅')
        
    
        client.on("messageReactionAdd", async (reaction, user) => {

            if (reaction.emoji.name === '✅')
    

            var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
            member.roles.add(role)
            .createInvite({ maxAge: 0, maxUses: 1, unique: true }).then(invite => member.send(`
            **Welcome to  Host**
                            
Invite: ${invite}`).then(logs.send(`**This invite (${invite.code}) For  Host | was created at ${invite.createdAt} and it will expire at UNTIL USED`)))
        })
    }
}
    }




