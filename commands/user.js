const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'user',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('746891173553242141') && (!executor.roles.cache.has('700570574988116010') && (!executor.roles.cache.has('737310698870407208')))) {
            return message.reply('Nope')
        } else {

            let e1 = new Discord.MessageEmbed()
            .setTitle('React')
            .setTimestamp()
            let er = await message.channel.send(e1)
            er.react('✅')

    
           

            client.on("messageReactionAdd", async (reaction, user) => {

                if (reaction.message.partial) await reaction.message.fetch();
                if (reaction.partial) await reaction.fetch();
        
        
                console.log(reaction)
                if (reaction.emoji.name === '✅')

        var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
        
               console.log(user.locale)
            })
        }
    }
}


   