const Discord = require('discord.js');
const { userInfo } = require('os');


module.exports = {
    name: 'guid',
    description: 'addes role',
    execute: async function (client, message, args, reaction, user, ) {
        const executor = await message.guild.members.cache.get(message.author.id);
        if (!executor.roles.cache.has('640415773160112128') && (!executor.roles.cache.has('645094960563224603') && (!executor.roles.cache.has('737310702951333899') && (!executor.roles.cache.has('737310698870407208') && (!executor.roles.cache.has('700570574988116010')))))) {
            return message.reply('Nope')
        } else {
            const exampleEmbed = {

                
                    title: 'Mayhem ModMail Guide',
                    value: 'Welcome new Helpers this is the guide that you will be using to answer your modmails and direct you to the right path.',
                
            
                    thumbnail: {
                        url: 'https://cdn.discordapp.com/icons/640411996080046122/6235c44b34e3c578d298500eb76f4402.png?size=1024',
                    },
                    fields: [
                        {
                            name: '**Channels:** ',
                            value: '#general - A chat where all Helpers can communicate.',
                        },
                        {
                            name: '**helper-announcements:** ',

                            value: '<#737323799204200474> - Important channel that Admins or Managers will use to inform Helpers about the weekly modmail goal or any other important information.',
                        },
                        {
                            name: '**leaderboard-command:** ',

                            value: '<#737324238402486415> - You may run the !lb command within that channel as it will show you how many modmails you have completed.',
                        },
                        {
                            name: '**logs:** ',

                            value: '<#640415265754185729> - Will show the previous tickets that have been closed by a Helper.',
                        },
                        {
                            name: '**Rules:** ',

                            value: '<#737324253212442685> - Will tell you about our rules, breaking any of those rules it will lead into warnings.',
                        },
                        {
                            name: '**blocked:** ',

                            value: '<#640792760781242378> - Within that channel, all the users that are blocked and are trying to create a ticket, if a user needs to be unblocked. You may use this channel by running the unblock command',
                            inline: true,

                        },
                        {
                            name: '**How to claim Modmail:**',
                            value: 'When claiming Modmails you would want to be the first person to type to show that this is your modmail and that you commit yourself on doing that modmail ticket.',

                        },
    
                        {
                            name: '** stats **',
                            value: '``!fn`` - This command is still in testing ``!fn ign`` will display the  stats of a user using FNT API.',
                    
                        },
    
        
                       
                    ],
                  
                 
                    timestamp: new Date(),
                    footer: {
                        text: '',
                        icon_url: '',
            
                    },
                };
                
                await message.channel.send({ embed: exampleEmbed });
                 
            }}
        }
