const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'reactchamp',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('746891802128416847') && (!executor.roles.cache.has('700570574988116010') && (!executor.roles.cache.has('737310698870407208')))) {
            return message.reply('Nope')
          
          

            
       } else {

        let guild = client.guilds.cache.get('746891802069696594');
        const role = guild.roles.cache.find(role => role.name === 'Champion')
        let guild1 = client.guilds.cache.get('507924040636432388');
        const champ = await client.guilds.cache.get('746891802069696594');
        const mayhemlogs = await champ.channels.cache.get('747668296459092078');

        let e1 = new Discord.MessageEmbed()
        .setTitle('React for Champion Role')
        .setDescription('If you would like to participate please react with 🟡.')
        .setTimestamp()
        let er = await message.channel.send(e1)
        er.react('🟡')
    

    client.on("messageReactionAdd", async (reaction, user) => {

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();


        console.log(reaction)
        if (reaction.emoji.name === '🟡')


        var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
        var member1 = guild1.members.cache.find(member => member.id === user.id)

        if (member1.roles.cache.some(role => role.name === 'Champion')) {
        
        await member.roles.add(role)
        logs.send(`**Verified**: ${user.id} , ${user} , ${user.username} , ${user.createdAt.toString().split('  ')}`)

        } else {
            member.kick()
        lgos.send(`**Kicked**: ${user.id} , ${user} , ${user.username} , ${user.createdAt.toString().split('  ')}`)
    }
}
    )}}
}
