const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'join',
    description: 'bf invite',
    execute: async function (client, message, args){


const executor = await message.guild.members.cache.get(message.author.id);
if (!executor.roles.cache.has('737310703475621910') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310698870407208')))) {
       return message.reply('You must have the Code  Customs role to use this command.')
} else {
const tesctss = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Thank you for using Code  `)
    .setDescription(`  `)
    .setColor("RANDOM")
    .setTimestamp();
    message.author.send(tesctss)

    const messageee = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username} Check your dms.`)
    .setDescription(`We have sent you an invite to  Client.`)
    .setColor("RANDOM")
    .setTimestamp();
    message.channel.send(messageee)
}}}
