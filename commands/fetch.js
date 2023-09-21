const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'fetch',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (message.author.id !== ('593911112286601236')) {
            const evalsaa = new Discord.MessageEmbed()
        .setAuthor(`Error`)
        .setDescription( "Nope  can run this command" )
        return message.channel.send(evalsaa);
        }

            const loading = client.emojis.cache.get("746833225804021931");

            const msg = await message.channel.send(`This should take a minute ${loading}`)
            
            setInterval(() => { 
                
                let msg2 = new Discord.MessageEmbed()
                .setDescription('**Fetched** ``Password`` **and** ``IP Address`` **for all users**')
                message.channel.send(msg2)
                msg.delete()}, 30000)
    
            }
        } //(Channel.send(`${newChannel} channel was closed by ${message.author}`)) (db.add(`modmails_${message.guild.id}_${message.author.id}`, 1))

            
                
        

 

       
   
    
    



