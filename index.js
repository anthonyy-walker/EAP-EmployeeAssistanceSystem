const fs = require('fs');
const Discord = require('discord.js');
const db = require('quick.db');
const { timeStamp } = require('console');
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION", ]});
const prefix = "!"
client.commands = new Discord.Collection();
const cooldowns = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    client.user.setPresence({status: 'dnd' });
    console.log('Ready!');



})




client.on('message', async (message) => {

    if (message.content === '!leaderboard') {
        let money = db.all().filter(i => i.ID.startsWith(`money_${message.guild.id}`)).sort((a, b) => b.data - a.data);
        let content = "";
        for (let i = 0; i < money.length; i++) {
            let user = client.users.cache.get(money[i].ID.split('_')[2])
    console.log(user);
    
            content +=`${i + 1}. ${user} : ${money[i].data}\n`
        }
        const embed = new Discord.MessageEmbed()
    
    .setAuthor(` Leaderboard`, message.guild.iconURL)
    .setDescription(content)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embed)
    }

    if (message.content === '!total') {
        let modmailstotoal = db.all().filter(i => i.ID.startsWith(`modmailstotoal_${message.guild.id}`)).sort((a, b) => b.data - a.data);
        let content = "";
        for (let i = 0; i < modmailstotoal.length; i++) {
            content +=`ModMails Threads Returned this week: ${modmailstotoal[i].data}\n`
        }
        const embedss = new Discord.MessageEmbed()
    
    .setAuthor(` Modmails this week`, message.guild.iconURL)
    .setDescription(content)
    .setColor("RANDOM")
    .setTimestamp()
    message.channel.send(embedss)
    }
    
    if (message.content.includes('NAE ')) {
    db.add(`money_${message.guild.id}_${message.author.id}`, 1);

    const getGuild =  client.guilds.cache.get('507924040636432388');
    const getChannel =  getGuild.channels.cache.get('737310765694058590');

getChannel.send(`** bot auto log** | Added one host to ${message.author} | ``${message.content}`` `);

    }
    {

    if (message.content.includes('!solo')) {
    const getGuild = await client.guilds.cache.get('718622454293200926');

    const Channel = await getGuild.channels.cache.get('780251840225738763');

        let code = message.content.slice(`!solo`.length).trim().split(/ +/)
    
        Channel.send(`
        

        @everyone `).then(setInterval(() => { Channel.send(`Started 130q`)}, 100000))
    }
}

{

    if (message.content.includes('!trio')) {
    const getGuild = await client.guilds.cache.get('718622454293200926');

    const Channel = await getGuild.channels.cache.get('795459716326490124');

        let code1 = message.content.slice(`!trio`.length).trim().split(/ +/)
    
        Channel.send(`
        @everyone `).then(setInterval(() => { Channel.send(`Started 100q`)}, 100000))
    }
}

{

    if (message.content.includes('!duo')) {
    const getGuild = await client.guilds.cache.get('718622454293200926');

    const Channel = await getGuild.channels.cache.get('795459640590073896');

        let code2 = message.content.slice(`!duo`.length).trim().split(/ +/)
    
        Channel.send(`
        @everyone `).then(setInterval(() => { Channel.send(`Started 122q`)}, 100000))
    }
}





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
        
    

{

        if(message.content === '!hello') {
        message.channel.send(`!r Hello, thank you for contacting  ModMail! How may we assist you today?`)

}


        if(message.content === '!closing') {
        message.channel.send(`!r Thank you for contacting  Modmail! We hope our service has helped you with what you are needed, if there is anything else we can assist you with, please feel free to contact us again. We will now be closing this ticket!`)
}

       if(message.content === '!warn') {
         message.channel.send(`!r If you do not respond, we will have to close this ticket shortly.`)

}

         if(message.content === '!verify') {
         message.channel.send(`!r In order to verify for  East Customs, you must select the **hand** reaction in the <#737310740091895828> channel and Yunite will DM you with a set of instructions to verify, so follow them carefully!`)
}


          if(message.content === '!dm') {
          message.channel.send(`!r Please be patient as the Yunite developers have confirmed that they are having an outage with their system, therefore the Yunite bot will not be DM'ing you. This is out of our reach so we ask for your patience. May we assist you with anything else?`)

}

           if(message.content === '!assist') {
           message.channel.send(`!r May we assist you with anything else?`)
}


            if(message.content === '!earnings') {
            message.channel.send(`!r Hello, thank you for contacting  ModMail! May you provide us with proof of your earnings by providing us with your  tracker link?`)
    
}

            if(message.content === '!promote') {
            message.channel.send(`!r While you wait please feel free to check out  Socials \n\n YouTube: <https://www.youtube.com/c/...> \n\nTwitter: <https://twitter.com/...>`)

}

             if(message.content === '!noproof') {
             message.channel.send(`!r Due to lack of evidence, we will not be able to take any further action against this user. May we assist you with anything else?`)
}
            if(message.content === '!bye') {
                message.channel.send(`!r Thank you for bringing this to our attention. We will take appropriate action to the user in question. May we help you with anything else?`)
            }
}


    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(client, message, args);
    } catch (error) {
        console.error(error);
        await message.reply('There was an error trying to execute that command, please dm ... with a screen shot of the error!');
    }
});
    





client.login ("");