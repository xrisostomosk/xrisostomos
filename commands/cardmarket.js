module.exports = {
  name: "cardmarket",
  description: "Pinging the bot",
  execute(client, message) {
    message.channel.send({
 
  "embed": {
      "title": "Το cardmarket του Ανέστη",
    "description": "[Εδώ είναι](https://www.cardmarket.com/en/YuGiOh/Users/Astr0z) πάρτε κάρτες",
    "color": 45055,

    "footer": {
      "text": "A bot made by oxi xrisostomos#5213"
    },
    
        "fields": [
      {
        "name": "lowest prices here SERIOUS SELLER",
        "value": "100% very good evalutions Perfect seller"
      },
    
   ] }
});
  }
};
