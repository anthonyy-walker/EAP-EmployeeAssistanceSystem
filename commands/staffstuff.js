module.exports = {
	name: 'logscount',
	description: 'show host count!',
  execute: async function (client, message, args){
  const Discord = require('discord.js');
    const db = require('quick.db')
		let bal = db.fetch(`Logs_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;
    const hostcountt = new Discord.MessageEmbed()
    .setAuthor(`${message.author.username}`)
    .setDescription('You have `' + bal + '` host this week! :pencil: ')
    
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(hostcountt)
    console.log(`host count cmd was ran `)

       }
  }