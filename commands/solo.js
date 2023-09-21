const { Webhook, MessageBuilder } = require('discord-webhook-node');


module.exports = {
	name: 'test1',
	description: 'Post solo code',
  execute: async function (client, message, args){

    message.react('✅')
   const EXILE_S = new Webhook("https://discord.com/api/webhooks/816017009396547584/IinNuCVJ3FWQA01Ka9nWxwl5v6DM8kyoVUSPQEjiAqJgia_jI0I7Mk7hRib1pauWS0cY");
   const MAYHEM_S = new Webhook("https://discord.com/api/webhooks/816017009396547584/IinNuCVJ3FWQA01Ka9nWxwl5v6DM8kyoVUSPQEjiAqJgia_jI0I7Mk7hRib1pauWS0cY");
   const STEALTH_S = new Webhook("https://discord.com/api/webhooks/816017009396547584/IinNuCVJ3FWQA01Ka9nWxwl5v6DM8kyoVUSPQEjiAqJgia_jI0I7Mk7hRib1pauWS0cY");
   const IMMORTAL_S = new Webhook("https://discord.com/api/webhooks/816017009396547584/IinNuCVJ3FWQA01Ka9nWxwl5v6DM8kyoVUSPQEjiAqJgia_jI0I7Mk7hRib1pauWS0cY");
   const SYNCHRONIZED_S = new Webhook("https://discord.com/api/webhooks/816017009396547584/IinNuCVJ3FWQA01Ka9nWxwl5v6DM8kyoVUSPQEjiAqJgia_jI0I7Mk7hRib1pauWS0cY");
   const ALPHA_S = new Webhook("https://discord.com/api/webhooks/816017009396547584/IinNuCVJ3FWQA01Ka9nWxwl5v6DM8kyoVUSPQEjiAqJgia_jI0I7Mk7hRib1pauWS0cY");

   hook.setUsername('Scrim Center');
   hook.setAvatar('https://media.discordapp.net/attachments/780242774032252941/812589796966924308/New_Project_19.png?width=702&height=702');

    const embed = new MessageBuilder()   
    .setColor('#266beb')
	.setTitle('NAE Trio Arena Custom')
	.setURL('https://discord.gg/3RAT3msqwE')
	.setThumbnail('https://media.discordapp.net/attachments/754818041757302887/771086934759571466/image0_5.png')
    .addField('CUSTOM CODE:', 'Code')
    .addField('RULES:', 'Scrim rules posted here: #scrim-rules')
    .setTimestamp()
	.setFooter('© 2021 Mayhem LLC. All rights reserved.',);
    hook.send(embed)
}
}