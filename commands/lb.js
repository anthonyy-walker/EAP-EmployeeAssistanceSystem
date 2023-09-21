
const db = require('quick.db');
const Discord = require('discord.js');

module.exports = {
    name: 'lbaa',
    description: 'addes host',
    execute: async function (client, message, args){

if (message.content === '!lb') {
    let modmails = db.all().filter(i => i.ID.startsWith(`modmails_${message.guild.id}`)).sort((a, b) => b.data - a.data);
    let content = "";
    for (let i = 0; i < modmails.length; i++) {
        let user = client.users.cache.get(modmails[i].ID.split('_')[2])
console.log(user);

        content +=`${i + 1}. ${user} : ${modmails[i].data}\n`
    }
    const embed = new Discord.MessageEmbed()

.setAuthor(` Leaderboard`, message.guild.iconURL)
.setDescription(content)
.setTimestamp()
message.channel.send(embed)
}
    }
}
