const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'listen',
    description: 'addes role',
    execute: async function (client, message, args){

const privcord =  client.guilds.cache.get('697197799988658246');
const pasteChannel =  privcord.channels.cache.get('772995001537527808');
const staff =  client.guilds.cache.get('645093730075934730');
const listenChannel =  staff.channels.cache.get('773260107949670441');
let filter = m => !m.author.user;
let collector = new Discord.MessageCollector(listenChannel, filter);
collector.on('collect', (message, col) => {
const collected = new Discord.MessageEmbed()
.addField(message.author.username, message.content)
.setTimestamp()
.setFooter('Management Chat')
pasteChannel.send(collected)
}
)
    }
}
