const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'addcode',
    description: 'addcodes',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('737310703475621910') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310698870407208')))) {
            return message.reply('Please @ a staff member. You are not allowed to run this command. :warning:')
          
          

            
       } else {
        const guild = client.guilds.cache.get('507924040636432388')
            const roless = guild.roles.cache.find(role => role.name === 'Code');

            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                mentioned.roles.add(roless);
                const roleadd = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `** role** was added to ${mentioned} :inbox_tray:` )
                    .setColor("RANDOM");
                await message.channel.send(roleadd);
                
                const getGuild = await client.guilds.cache.get('507924040636432388');
                const getChannel = await getGuild.channels.cache.get('737310765694058590');
                await getChannel.send(`<@${executor.id}> gave <@${mentioned.id}> the Code  role!`);

            } else {
                const errorr = new Discord.MessageEmbed()
                .setAuthor(`Error`)
                .setDescription( `${message.author} you need to @ a user. :o:` )
                .setColor("RANDOM");
            await message.channel.send(errorr);

            }}}}