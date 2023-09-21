module.exports = {
	name: 'patch',
    description: 'shows the recent patch',
    execute: async function (client, message, args){
        const Discord = require('discord.js');

            const patchem = {

            color: "#b83c35",
                title: '**Patch Notes**',
            
        
                thumbnail: {
                    url: '',
                },
                fields: [
                    {
                        name: '**NEW** ',
                        value: '``!removecomp`` - Will remove comp role from a user. ',
                    },
                    {
                        name: '**NEW** ',
                        value: '``!removech`` - Will remove custom host role from a user.',
                               
                    },
                    {
                        name: '**NEW** ',
                        value: '``!fn`` - This command is still in testing ``!fn ign`` will display the  stats of a user using FNT API.',
                               
                    },
                    
                    {
                        name: '**WHAT DO I DO IF THERE IS A ISSUE WITH THE BOT?**',
                        value: ' ',
                        inline: true,
                    },
                   
                ],
              
             
                timestamp: new Date(),
                footer: {
                    text: '',
                    icon_url: '',
        
                },
            };
            
            await message.channel.send({ embed: patchem });
             
        }}