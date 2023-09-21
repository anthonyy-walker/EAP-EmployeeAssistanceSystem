const db = require('quick.db');
const Discord = require('discord.js');
module.exports = {
    name: 'stats',
    description: 'shows server stats',
    execute: async function (client, message, args){
      client.channels.cache.get('718280633725616230')

        let mainguild = client.guilds.cache.get('507924040636432388')
  
        
            var userCount = mainguild.memberCount;
            var onlineCount = mainguild.members.cache.filter(m => ['online', 'idle', 'dnd'].includes(m.presence.status)).size + 2000
        
            var codemayhem = "737310722702442587"
            var codemayhem = mainguild.roles.cache.get(codemayhem).members

            var comp = "737310721293156442"
            var compcount = mainguild.roles.cache.get(comp).members

            var leg = "737310716641542144"
            var leg = mainguild.roles.cache.get(leg).members
            
            var customhost = "737336095209029733"
            var customhost = mainguild.roles.cache.get(customhost).members

            var champs = "737310717992239155"
            var champs = mainguild.roles.cache.get(champs).members

            var verified = "737311310420902010"
            var verified = mainguild.roles.cache.get(verified).members
        
        
        
            console.log("Total Users: " + userCount);
            console.log("Online Users: " + onlineCount);
        
        
            const serverembed = new Discord.MessageEmbed()
              .setTitle("Mayhem Stats")
              .setColor("#ff1a47")
              .setThumbnail(mainguild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
              .addField(":white_circle: Total Members", userCount)
              .addField(":green_circle: Members Online", onlineCount)
              .addField(":blue_circle: Code MayhemCustoms", codemayhem.size)
              .addField(":purple_circle: Competitive", compcount.size)
              .addField(":red_circle: Customs Host", customhost.size)
              .addField(":yellow_circle: Champion", champs.size)
              .addField(":pink_circle: Legend", leg.size)
              .addField(":blue_circle: verified", verified.size)
              .setFooter('Mayhem Customs', mainguild.iconURL())
              .setTimestamp()
              await message.channel.send(serverembed);

          
        }, 
      }
      