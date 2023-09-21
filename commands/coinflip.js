
const Discord = require('discord.js');
module.exports = {
    name: 'flip',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('712102844844474480')) {
            return message.reply('Nope')
        } else {

                let tah = ["Heads", "Tails"];




                let outcomesIndex = Math.round(Math.random() * tah.length);


                
                message.channel.send(tah[outcomesIndex]);
               
              }
            }
        }