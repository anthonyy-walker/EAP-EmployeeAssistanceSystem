const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'removeyunite',
    description: 'addes role',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310698870407208') && (!executor.roles.cache.has('737310711893590136')))) {
            return message.reply('Please @ a staff member. You are not allowed to run this command. :warning:')
          
          

            
       } else {
        const guild = client.guilds.cache.get('507924040636432388')
            const role = guild.roles.cache.find(role => role.name === 'Yunite Host');

            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                mentioned.roles.remove(role);
                const CustomsHostd = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `**Yunite Host** role was removed from ${mentioned} :outbox_tray:` )
                    .setColor("#990000");
                await message.channel.send(CustomsHostd);
                
                const getGuild = await client.guilds.cache.get('507924040636432388');
                const getChannel = await getGuild.channels.cache.get('737310765694058590');
                await getChannel.send(`<@${executor.id}> removed the Yunite Host role from <@${mentioned.id}>`);


            } else {
                const errorr = new Discord.MessageEmbed()
                .setAuthor(`Error`)
                .setDescription( `${message.author} you need to @ a user. :o:` )
                .setColor("#990000");
            await message.channel.send(errorr);

            }}}}