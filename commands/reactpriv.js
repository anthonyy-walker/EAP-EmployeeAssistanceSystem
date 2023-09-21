const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'reactpriv',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('746891173553242141') && (!executor.roles.cache.has('653825490741755915') && (!executor.roles.cache.has('737310698870407208')))) {
            return message.reply('Nope')
          
          

            
       } else {

        let guild = client.guilds.cache.get('653825414887768075');
        const role = guild.roles.cache.find(role => role.name === 'Legend')
        let guild1 = client.guilds.cache.get('507924040636432388');
        const priv = await client.guilds.cache.get('653825414887768075');
        const mayhemlogss = await priv.channels.cache.get('750213240989941802');

        let e1 = new Discord.MessageEmbed()
        .setTitle('React for Legend Role')
        .setDescription('If you would like to participate in our scrims and tournaments, please react with 🟠')
        .setTimestamp()
        let er = await message.channel.send(e1)
        er.react('🟠')
    

    client.on("messageReactionAdd", async (reaction, user) => {

        if (reaction.message.partial) await reaction.message.fetch();
        if (reaction.partial) await reaction.fetch();


        console.log(reaction)
        if (reaction.emoji.name === '🟠')


        var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
        var member1 = guild1.members.cache.find(member => member.id === user.id)

        if (member1.roles.cache.some(role => role.name === 'Legend')) {
        
        await member.roles.add(role)
        mayhemlogss.send(`**Verified**: ${user.id} , ${user} , ${user.username} , ${user.createdAt.toString().split('  ')}`)

        } else {
            member.kick()
        mayhemlogss.send(`**Kicked**: ${user.id} , ${user} , ${user.username} , ${user.createdAt.toString().split('  ')}`)
    }
}
    )}}
}