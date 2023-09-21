const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'invcxl',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('737310698870407208') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('711819172434280530')))) {
            return message.reply('Nope')
        } else {
            const compguild = client.guilds.cache.get('760775508870561793')
            const channell = await compguild.channels.cache.get('760787619729637408');
            const mainguild = client.guilds.cache.get('507924040636432388')
            const info = await mainguild.channels.cache.get('748339034064945192');

            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                const role = mainguild.roles.cache.find(role => role.name === 'invited');
                mentioned.roles.add(role);
                channell.createInvite({ maxAge: 0, maxUses: 1, unique: true }).then(invite => mentioned.send(`
                **Welcome to Champs X Legends**

You have earned your invite to Champs X Legends Server.
                                
Invite: ${invite}`).then(info.send(`**This invite (${invite.code}) was created at by ${message.author}** it was sent to ${mentioned} ${invite.createdAt} **and it will expire at **UNTIL USED`)))
   
message.reply(`Link was sent to ${mentioned}`)}
           }
        }
    }
