module.exports = {
  name: "invite",
  description: "Pinging the bot",
  execute(client, message) {
  message.channel.send({
  embed: {
    title: "INVITE ME",
    color: 65280,
   
    
    fields: [
      {
        name: "NOW",
        value: "[CLICK THIS](https://discord.com/api/oauth2/authorize?client_id=774992341899411487&permissions=8&scope=bot) OR DIE"
    
     
 
      }
    ]
  }
  })
  }}
  
                     