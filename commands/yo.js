module.exports = {
  name: "yo",
  description: "Pinging the bot",
  execute(client, message) {
    message.channel.send("yo");
  }
};
