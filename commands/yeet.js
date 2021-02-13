//FIRST TEST HANDLER IS WORKING OR NOT
module.exports = {
  name: "yeet",
  description: "Pinging the bot",
  execute(client, message) {
    message.channel.send("||yeet||");
  }
};
