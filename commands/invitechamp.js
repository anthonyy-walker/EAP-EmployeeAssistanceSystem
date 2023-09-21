const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'invchamp',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('746891802128416847') && (!executor.roles.cache.has('645094960563224603') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310698870407208'))))) {
            return message.reply('Nope')
        } else {
            const compguild = client.guilds.cache.get('746891802069696594')
            const channell = await compguild.channels.cache.get('746891802447183952');
            const mainguild = client.guilds.cache.get('507924040636432388')
            const info = await mainguild.channels.cache.get('748339034064945192');

            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                channell.createInvite({ maxAge: 0, maxUses: 1, unique: true }).then(invite => mentioned.send(`

                                
Invite: ${invite}`).then(info.send(`**This invite (${invite.code}) was created at by ${message.author}** ${invite.createdAt} **and it will expire at **UNTIL USED`)))
   
message.reply(`Link was sent to ${mentioned}`)}
           }
        }
    }


