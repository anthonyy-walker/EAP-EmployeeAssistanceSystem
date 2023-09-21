const db = require('quick.db');
const Discord = require('discord.js');
const radio = require('discord-radio-player')

module.exports = {
    name: 'play',
    description: 'bf invite',
    execute: async function (client, message, args){
        //const executor = await message.guild.members.cache.get(message.author.id);
      //  i//f (!executor.roles.cache.has('645094960563224603') && (!executor.roles.cache.has('700570574988116010') && (!executor.roles.cache.has('691568912642473984') && (!executor.roles.cache.has('691569330512461874')  && (!executor.roles.cache.has('742075200035618817') (!executor.roles.cache.has('709631064112627813'))))))) {
            //const e1 = new Discord.MessageEmbed()
          //  .setAuthor('Error')
           // .setDescription(`You do not have permission to run this command.`)
            //.setTimestamp();
         //return message.channel.send(e1)

         const radiogif = client.emojis.cache.get("747205036366495816");

        let radiosss = args.join(" ");
        if (radiosss) {
        
        const search = await radio.Radio.search({searchterm: radiosss, limit:1, by:'name'})
        let streamUrl = search[0].url_resolved
    

        let FFmpegfilters = [
            "-af","bass=g=20,dynaudnorm" 
        ]
        
        let stream = radio.Radio.getStream(streamUrl,{filters:FFmpegfilters}) 
         message.member.voice.channel.join().then(c=>c.play(stream,{type:'opus'})) 
         message.channel.send(`${radiogif}`)

        const e3 = new Discord.MessageEmbed()
        .setAuthor(`Joined`)
        .setDescription( `Joined! Now playing the radio station: **${radiosss}** by: ${message.author}. ${radiogif}` )
        message.channel.send(e3)
    } else {
        const celltowergif = client.emojis.cache.get("747206423582343278");

    const e2 = new Discord.MessageEmbed()
    .setAuthor('Error')
    .setDescription(`Sorry we couldn't find that radio station. Here is a link to stations you can listen to.  ${celltowergif}`)
    .setTimestamp();
 message.channel.send(e2)
 message.channel.send(`${celltowergif}`)
 message.channel.send('https://www.siriusxm.com/sxm/pdf/sxm/channelguide.pdf')
 }
    }
}
    




 

   
 
