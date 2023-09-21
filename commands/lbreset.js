module.exports = {
	name: 'lbreset',
	description: 'resets the lb',
    execute: async function (client, message, args){
    const Discord = require('discord.js');
    const db = require('quick.db')
    const executor = await message.guild.members.cache.get(message.author.id);
    const getGuild = await client.guilds.cache.get('507924040636432388');
    const getChannel = await getGuild.channels.cache.get('737310765694058590');

    if (!executor.roles.cache.has('737310698870407208')) {
        return message.reply('Please @ a staff member. You are not allowed to run this command. :warning:')
    }
    const embed = new Discord.MessageEmbed()
    .setAuthor(` Message Log`, message.guild.iconURL)
    .setDescription('Reset Completed Successfully! :outbox_tray:  ')
    .setColor(0x51267)
    .setTimestamp()

    message.channel.send(embed)
    await getChannel.send(`<@${executor.id}> reset the leaderboard :outbox_tray:`);

    db.all().forEach(i => db.delete(i.ID))
    console.log(`reset complete`)

    }}
