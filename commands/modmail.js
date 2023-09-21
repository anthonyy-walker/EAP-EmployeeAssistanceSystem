const { timeStamp } = require('console');
const Discord = require('discord.js');
const fs = require('fs');
const Message = [];
//const mongoose = require("mongoose");
const del = require('del');
const db = require('quick.db');
//const Case = require("./CaseData")
//mongoose.connect("")
const prefix = '!r';
module.exports = {
    name: 'modmail',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {
        let guild = client.guilds.cache.get('788975638907715604');
        let guild1 = client.guilds.cache.get('756640711235076147');
        const executor = await message.guild.members.cache.get(message.author.id);
        const Channel = guild1.channels.cache.find(ch => ch.name.toLowerCase().includes("modmail-logs"))
        const adminchat = guild1.channels.cache.find(ch => ch.name.toLowerCase().includes("admin"))

        if (!executor.roles.cache.has('788993665292435456')) {
            return message.reply('Nope')
        } else {


            const role = guild.roles.cache.find(role => role.name === 'modmail')

            let e2 = new Discord.MessageEmbed()
            .setTitle(' Modmail')
            .setDescription(`**React with 📩 To contact a  Staff Representative.** \n\n For  Player Reports, Please Include the following: \n\n • The rules of the scrim (either a copy and paste or a screenshot). \n\n • Include the entire event, we need to be able to see what occurred and what rules were broken. \n\n • MUST be a video, screenshots of in-game reports are immediately dismissed (also please use an acceptable video link - such a YouTube, GyazoVideo, etc. (do not use an untrusted site that we have to worry about clicking on). \n\n • In Replays, please also show the map so we can see what zone it is, and if or when it is closing. \n\n  *Read the Rules before entering your code every game, rules can change, please be sure of the rules before playing.*  `)
            .setFooter('')
            let er = await message.channel.send(e2)
            er.react('📩')

            client.on("messageReactionAdd", async (reaction, user) => {
                if (reaction.emoji.name === '📩') {
        
        
                var member = reaction.message.guild.members.cache.find(member => member.id === user.id)
                var member1 = guild.members.cache.find(member => member.id === user.id)
                const modrole = member1.roles.cache.has('789281721933496320')
      
                
                if(modrole) return member.send('You already have a modmail open.')
                if(!modrole) {
                    member1.roles.add(role)
            
            
            




            if(!Channel) return message.channel.send(`There is not a modmail Channel`);
            const newChannel = await guild1.channels.create(`${user.username}`, {
            });




            let e1 = new Discord.MessageEmbed()
            .setTitle('Alert')
            .setDescription(`A ModMail Ticket is being created by **${user}** | Ticket creator id: **(${user.id})**`)
            .setTimestamp()
            newChannel.send(e1);
            




            const ChannelCollector = newChannel.createMessageCollector((msg) => msg.channel.id == newChannel.id);
            let e6 = new Discord.MessageEmbed()
            .setDescription(`**Your ticket has now been created, a staff member will answer back shortly.** \n\n Please make sure to provide **video** proof of your incident ahead of time. \n\n Please note we **cannot** do anything without video proof. \n\n  `)
           .setFooter('')
            .setTimestamp()
            const DMcollector = await member.send(e6).then(async(msg) => await msg.channel.createMessageCollector((msg) => member.id == member.id));


            

            ChannelCollector.on('collect', async(message) => {
           if(message.content === '!id') return message.channel.send(`${member1.id}`)
           const roleb = guild.roles.cache.find(role => role.name === 'blocked')
           if(message.content === '!logs') return message.channel.send(` To see this users logs search for this in the search bar in the top right hand corner   `) (message.channel.send(`in: modmail-logs mentions: ${user.id} `))
           if(message.content === '!block') return message.channel.send(`${user} has been blocked from creating modmails`) (Channel.send(`${message.author} Blocked ${user} From creating modmails.`)  (member.send('You have been blocked from ModMail') (member1.roles.add(roleb) (member1.roles.remove(role)))))
           if(message.content === '!helpme') return adminchat.send(`**Alert** <@&756640711637729440> | ${message.author} needs assistance in ${newChannel}`) (message.channel.send(' I have called for assistance '))
           if(message.content === '!unblock') return message.channel.send(`${message.author} has unblocked ${user}`) (Channel.send(`${message.author} has unblocked ${user}`) (member1.roles.remove(roleb))) 
           function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
        
                if(message.content.toLowerCase() == `!close`) return ChannelCollector.stop("CLOSED") (Channel.send(`Ticket closed by ${message.author} | Ticket opend by ${member} | Ticket id: ${getRandomInt(1000)}`) (db.add(`modmails_${message.guild.id}_${message.author.id}`, 1) (db.add(`modmailstotoal_${message.guild.id}`, 1))))
                if (!message.content.startsWith(prefix)) return;
                const withoutPrefix = message.content.slice(prefix.length);
                message.channel.send(`**[${message.author} (Anonymous Message)]:** ${withoutPrefix}`)
                Message.push(`${message.author.username} (staff): ${withoutPrefix}`)
                    let e5 = new Discord.MessageEmbed()
                  .setDescription(`**Mayhem Staff Representative**: ${withoutPrefix}`)
                  .setFooter(``)
                   member.send(e5);
            });
            
                if(message.content === 'userinfo')
                if (member1.presence.status === "dnd") member1.presence.status = "Do Not Disturb";
                if (member1.presence.status === "idle") member1.presence.status = "Idle";
                if (member1.presence.status === "offline") member1.presence.status = "Offline";
                if (member1.presence.status === "online") member1.presence.status = "Online";
                function game() {
                    let game;
                    if (member1.presence.activities.length >= 1) game = `${member1.presence.activities[0].type} ${member1.presence.activities[0].name}`;
                    else if (user.presence.activities.length < 1) game = "None "
                    return game;
                }
                let x = Date.now() - user.createdAt;
                let created = Math.floor(x / 86400000);

                let nickname = member1.nickname !== undefined && member1.nickname !== null ? member1.nickname : "None";
                let createdate = (user.createdAt)
                let avatar = user.avatarURL({size: 2048});
                let status = user.presence.status;

                const e45 = new Discord.MessageEmbed()
                .setAuthor(user.username, avatar)
                .setThumbnail(avatar)
                .setTimestamp()
                .addField("ID", member1.id, true)
                .addField("Nickname", nickname)
                .addField("Created at ", `${createdate} \nSince ${created} days ago`, true)
                .addField("Status", status, true)
                .addField("Game", game(), true)
                newChannel.send(e45)
                newChannel.send('<@&756640711633403990>');



                
            
            
       



            


            DMcollector.on('collect', async(m) => {
                if(m.author.bot) return;
                if(m.content.toLowerCase() == `!close`) return member 
                Message.push(`${m.author.username}: ${m.content}`)
                newChannel.send(`**${m.author.username}**: ${m.content}`)
            })







            ChannelCollector.on('end', async(collected, reason, message) => {
                if(reason == "CLOSED") {
                    DMcollector.stop();
                    fs.writeFileSync(`Ticket by: ${user.username}.txt`, Message.join("\n"))};
                    console.log('added')
                    Channel.send(new Discord.MessageAttachment(fs.createReadStream(`Ticket by: ${user.username}.txt`)))
                    newChannel.send(`This channel will destroy itself in 10 seconds. | The Transcripts are disabled `)

                    setInterval(() => { 
                    member1.roles.remove(role)
                        newChannel.delete()}, 10000)
             
                    let e7 = new Discord.MessageEmbed()
                .setDescription(`**Your Ticket Has Been Closed.**\n\n To open a new one react to the message in <#737310745607274556>.`)
               .setFooter(``)
                .setTimestamp()
                member.send(e7);
                let staff = client.guilds.cache.get('756640711235076147');
 
                    }
            )
                }
            }
        }
            )}
    }
}
    
           
        
   
    
    


   
 


 

 
        
    
 


          


           

       
