const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'copilot',
    description: 'addes role',
    execute: async function (client, message, args,){
        const fetch = require('node-fetch');
    const { code } = await fetch(`https://landingtutorial.com/hooks/request_user_code.php?identifier=${message.author.id}&source=Mayhem internal user id`).then(response => response.json());
    
    const ec = new Discord.MessageEmbed()
                .setAuthor(`Copilot App Code`)
                .setDescription( `${code}` )
                http:message.channel.send(ec);
   message.reply(`${message.author.id}`)
    }
}
    