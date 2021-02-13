module.exports = {
  name: "type",
  description: "The bot is typing for 5 seconds",
   execute(client, message) {
    message.channel.startTyping();
  setTimeout(() => {  message.channel.stopTyping(); }, 5000);
  }
}; 
;;
;