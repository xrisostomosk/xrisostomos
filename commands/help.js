module.exports = {
  name: "help",
  execute(client, message) {
    message.channel.send({
  
  "embed": {
    "title": "HELP",
    "description": "all the bot commands",
    "color": 65280,
   
    
    "fields": [
      {
        "name": "help",
        "value": "shows the list of all the bot commands"
      },
      {
        "name": "ping",
        "value": "see if the bot is online"
      },
      {
        "name": "invite",
        "value": "sends the bot's invite link"
     
      }
    ]
  }
});
  }
};
