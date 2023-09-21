module.exports = {
	name: 'help',
    description: 'shows the help commands',
    execute: async function (client, message, args){
        const Discord = require('discord.js');

            const exampleEmbed = {

            color: "#b83c35",
                title: '**Help**',
            
        
                thumbnail: {
                    url: 'https://cdn.discordapp.com/attachments/691610337945976843/710924291897557062/main_cord.gif',
                },
                fields: [
                    {
                        name: '**COMMANDS FOR HOST** ',
                        value: '``!hostcount`` - Will display the ammount of host you have this week. ',
                    },
                    {
                        name: '**COMMANDS FOR HOST** ',
                        value: '``!lb`` - Will display the leaderboard.',
                               
                    },
                    {
                        name: '**COMMANDS FOR HOST** ',
                        value: '``!requesthelp`` - Will contact a staff member.',
                               
                    },
                    {
                        name: '**COMMAND FOR STAFF**',
                        value: '``!addhost`` Will add a host from a certen user.',
                    },
                    {
                        name: '**COMMAND FOR STAFF**',
                        value: '``!removehost`` - Will remove a host from a certen user.',

                    },
                    
                    {
                        name: '**WHAT DO I DO IF THERE IS A ISSUE WITH THE BOT?**',
                        value: 'If you see this message There was an error trying to execute that command, please  with a screen shot of the error!. ',
                        inline: true,
                    },

    
                   
                ],
              
             
                timestamp: new Date(),
                footer: {
                    text: 'Developed by: ',
                    icon_url: '',
        
                },
            };
            
            await message.channel.send({ embed: exampleEmbed });
             
        }}