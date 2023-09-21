const db = require('quick.db');
const Discord = require('discord.js');
const passwords = require("random-passwords-generator");

module.exports = {
    name: 'pass',
    description: 'adds modmails',
    execute: async function (client, message, args){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('712102844844474480')) {
            return message.reply('Nope')
        } else {
            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {

            options={
                LENGTH : 10,
                }
          password = passwords(options);
          console.log(password);
          const CustomsHostd = new Discord.MessageEmbed()
          .setAuthor(`Monthly Password`)
          .setDescription( `**DO NOT SHARE THIS WITH ANYONE** \n\n Password: **${password}**` )
            mentioned.send(CustomsHostd);
            message.author.send(`I sent this passcode: ${password} to ${mentioned}`)
            }
        }
    }
}
     
