
module.exports = {
    name: 'code',
    description: 'starts modmail',
    execute: async function (client, message, args, reaction, user, ) {

        function getRandomInt(max) {
            return Math.floor(Math.random() * Math.floor(max));
          }
          
          console.log(getRandomInt(3904534905));
          message.channel.send(`${getRandomInt(3904534905)}`)
        }
    }