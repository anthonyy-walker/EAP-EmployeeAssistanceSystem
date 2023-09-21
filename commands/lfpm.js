const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'lfpm',
    description: 'addes role',
    execute: async function (client, message, args,){
        message.reply('Starting!')
const main =  client.guilds.cache.get('507924040636432388');
const lfp =  main.channels.cache.get('737310749147267143');
setInterval(() => {

const testssss = new Discord.MessageEmbed()
        .setAuthor(' Creative')
        .setDescription(`Looking to boxfight, buildfight, zonewars, or realistics? ** Creative** is the place for you! ** Creative** features an automatic boxfight queue system, as well as dedicated channels to find users for all your creative games. `)
        .setColor("#780000")
        .setTimestamp();
     lfp.send(testssss)
     lfp.send('')}, 120000)}
};
