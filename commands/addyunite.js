const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'addyunite',
    description: 'addes role',
    execute: async function (client, message, args,){
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('737310698870407208') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310711893590136')))) {
            return message.reply('Please @ a staff member. You are not allowed to run this command. :warning:')

          

            
       } else {
        const guild = client.guilds.cache.get('507924040636432388')
            const role = guild.roles.cache.find(role => role.name === 'Yunite Host');

            const mentioned = message.mentions.members.first() ||  message.guild.members.cache.get(args[0]);
            if(mentioned) {
                mentioned.roles.add(role);
                const getGuild = await client.guilds.cache.get('507924040636432388');
                const hostchat = await getGuild.channels.cache.get('737338320455204874');

                const CustomsHostd = new Discord.MessageEmbed()
                    .setAuthor(`Successful`)
                    .setDescription( `**Yunite Host** role was added to ${mentioned} :inbox_tray:` )
                    .setColor("#990000");
                await message.channel.send(CustomsHostd);
                const cooldowns = new Discord.Collection();
                const getChannel = await getGuild.channels.cache.get('737310765694058590');
                await getChannel.send(`<@${executor.id}> gave <@${mentioned.id}> the Yunite Host role!`);
                const newhost = new Discord.MessageEmbed()
                .setAuthor(`Welcome`)
                .setDescription( `Welcome ${mentioned} please look at <#737310756193697872> and <#737310761550086154> When hosting games please use <#737310757082890271> If you have any further questions type **!requesthelp** in <#737310757750046853>.` )
                .setColor("#990000");
            await  hostchat.send(newhost)
                        hostchat.send(`${mentioned}`)

            } else {
                const errorr = new Discord.MessageEmbed()
                .setAuthor(`Error`)
                .setDescription( `${message.author} you need to @ a user. :o:` )
                .setColor("RANDOM");
            await message.channel.send(errorr);

            }}}}