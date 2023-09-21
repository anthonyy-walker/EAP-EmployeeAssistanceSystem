const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'sync',
    description: 'syncs roles',
    execute: async function (client, message, args){

        const member = message.mentions.members.first();
        if (member.roles.cache.some(role => role.name === 'Customs Host')) {
    
        }

     messageee = new Discord.MessageEmbed()
    .setAuthor(`done.`)
    .setDescription(`done`)
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(messageee)

     }
    }
        


       