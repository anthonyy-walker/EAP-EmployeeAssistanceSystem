const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'addlegend',
    description: 'addes role',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('737310703475621910') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310698870407208')))) {
            return message.reply('Please @ a staff member. You are not allowed to run this command. :warning:')
          
          

            
       } else {
        const guild = client.guilds.cache.get('507924040636432388')
            const role = guild.roles.cache.find(role => role.name === 'Legend');

            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                mentioned.roles.add(role);
                const roleadd = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `**Legend Role** was added to ${mentioned} :inbox_tray:` )
                    .setColor("#db03fa");
                await message.channel.send(roleadd);

                const Private = client.guilds.cache.get('653825414887768075');

                let invite = Private.channel.createInvite(
                    {
                      maxAge: 10 * 60 * 1000, // maximum time for the invite, in milliseconds
                      maxUses: 1 // maximum times it can be used
                    },
                  )
                  
                  mentioned.send(`Here's your  Private invite: ${invite}`)

                const getGuild = await client.guilds.cache.get('507924040636432388');
                const getChannel = await getGuild.channels.cache.get('737310765694058590');
                await getChannel.send(`<@${executor.id}> gave <@${mentioned.id}> the Legend role!`);

            } else {
                const errorr = new Discord.MessageEmbed()
                .setAuthor(`Error`)
                .setDescription( `${message.author} you need to @ a user. :o:` )
                .setColor("#db03fa");
            await message.channel.send(errorr);

            }}}}