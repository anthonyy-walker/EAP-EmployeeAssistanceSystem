const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'ping',
    description: 'addes role',
    execute: async function (client, message, args,){

message.channel.send('Pinging...').then(m => m.edit('Pong ' +  client.ws.ping + 'ms'))
    }
}
