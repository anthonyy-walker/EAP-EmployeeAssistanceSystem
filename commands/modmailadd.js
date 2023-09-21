const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'modmailadd',
    description: 'adds modmails',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('756640711637729444')) {
            return message.reply('Nope')
          

            
       } else {
        const getGuild = await client.guilds.cache.get('756640711235076147');

        const Channel = await getGuild.channels.cache.get('759171741121249351');

    
                const added = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setColor("#990000");
                await message.channel.send(added);
                message.react('✅')

                await Channel.send(`<@${executor.id}> gave ${args} modmails to <@${message.author.id}>`);
                let number = args.join(" ");

                db.add(`modmails_${message.guild.id}_${message.author.id}`, number);

            }
        }
        
    }
