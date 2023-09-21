
const Discord = require('discord.js');
module.exports = {
    name: 'eval',
    description: 'evals stuff',
    execute: async function (client, message, args){    
        const executor = message.guild.members.cache.get(message.author.id);
    if (message.author.id !== ('593911112286601236')) {
        const evalsaa = new Discord.MessageEmbed()
    .setAuthor(`Error`)
    .setDescription( "Y so you cant use this command." )
    .setColor("#8B0000");
    return message.channel.send(evalsaa);
    }


if (!args[0]) {
    const evalsa = new Discord.MessageEmbed()
    .setAuthor(`Error`)
    .setDescription( "You need to type somthing to Evaluate " )
    .setColor("#8B0000");
 message.channel.send(evalsa);
}

 try{
    const code = args.join(" ");
      let evaled = eval(code);
    const evals = new Discord.MessageEmbed()
                    .setAuthor(`Eval`)
                    .setDescription( "**Input:**\n```" + args.join(" ") + "```**Output:**\n\n```" + evaled + "```")
                    .setColor("#8B0000");
                 message.channel.send(evals)

                } catch(err) {
            const evalerror = new Discord.MessageEmbed()

                 .setAuthor(`Error`)
                 .setDescription("**Output:**\n\n```" + err + "```")
                 .setColor("#8B0000")
            message.channel.send(evalerror)

        }
    }
};