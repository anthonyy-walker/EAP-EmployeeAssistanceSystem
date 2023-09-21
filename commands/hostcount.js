module.exports = {
	name: 'hostcount',
	description: 'show host count!',
  execute: async function (client, message, args){
  const Discord = require('discord.js');
    const db = require('quick.db')
    const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
		let bal = db.fetch(`money_${message.guild.id}_${mentioned.id}`)

    if (bal === null) bal = 0;
    const hostcountt = new Discord.MessageEmbed()
    .setAuthor(`Host`)
    .setDescription(`${mentioned} has'` + bal + `' host this week! :pencil: `)
    
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(hostcountt)

  } else {
    const errorr = new Discord.MessageEmbed()
    .setAuthor(`Error`)
    .setDescription( `${message.author} you need to @ a user. :o:` )
    .setColor("#db03fa");
await message.channel.send(errorr);

    console.log(`host count cmd was ran `)
  }
}
}

   
