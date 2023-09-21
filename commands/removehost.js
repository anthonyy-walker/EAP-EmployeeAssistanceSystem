const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'removehost',
    description: 'removehost',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        
        if (!executor.roles.cache.has('737310711893590136') && (!executor.roles.cache.has('737310698870407208') && (!executor.roles.cache.has('737310702951333899')))) {
            return message.reply('Please @ a staff member. You are not allowed to run this command. :warning:')
          
          

            
       } else {
        const getGuild = await client.guilds.cache.get('507924040636432388');

        const Channel = await getGuild.channels.cache.get('737310762246340618');
            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                const removedd = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `**1** host was removed. :outbox_tray: `)
                    .setColor("#990000");
                await message.channel.send(removedd);
                message.react('✅')

                const filter = (reaction, user) => {
                    return ['✅'].includes(reaction.emoji.name) && user.id === message.author.id;
                };
                
                message.awaitReactions(filter, { max: 1,})
                    .then(collected => {
                        const reaction = collected.first();
                
                        if (reaction.emoji.name === '✅') {
                            Channel.bulkDelete(2)
                            .then(messages => console.log(`Bulk deleted ${messages.size} messages`))
                    
                        } else {
                            message.reply('?');
                        }
                    })
          
                        message.reply('?');
              
                const getGuild = await client.guilds.cache.get('507924040636432388');
                const getChannel = await getGuild.channels.cache.get('737310765694058590');

                await getChannel.send(`<@${executor.id}> removed \`1\` host from <@${mentioned.id}>`);

                db.subtract(`money_${message.guild.id}_${mentioned.id}`, 1);
                db.subtract(`Logs_${message.guild.id}_${executor.id}`, 1);

                console.log(`remove host cmd was ran`)
            } else {
                return message.reply('**Error:** You need to @ a user :warning:');
            }
        }
    }
};