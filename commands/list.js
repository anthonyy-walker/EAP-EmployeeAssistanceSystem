const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'list2',
    description: 'addes role',
    execute: async function (client, message, args,){
        const executor = await message.guild.members.cache.get(message.author.id);
        
        if (!executor.roles.cache.has('700570574988116010') && (!executor.roles.cache.has('737310698870407208') )) {
            return message.reply(' So u cannot run this command')

        } else {

        const loading = client.emojis.cache.get("746833225804021931");


        let guild = client.guilds.cache.get('645093730075934730');
        message.reply(`Processing every users. This may take a few minutes. ${loading} `)
        guild.members.cache.forEach(member => message.channel.send(`${member.user.username}`));

        let e7 = new Discord.MessageEmbed()
        .setDescription(`${guild.members.username}`)
        .setTimestamp()
        message.channel.send(e7);
        }
    }
}
   
        
      
 
    

