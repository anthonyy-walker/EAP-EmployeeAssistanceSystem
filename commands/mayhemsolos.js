
const Discord = require('discord.js');
module.exports = {
    name: 'listensolos',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('795702703706734603')) {
            return message.reply('Nope')
        } else {
            message.react('✅')
            const getGuild = await client.guilds.cache.get('718622454293200926');

            const Channel = await getGuild.channels.cache.get('795739062241329182');
            
            if (message.content.includes('!solo')) {
                
                let code = args.join(" ");

                Channel.send(`${code}`)

            }
        }
    }
}
