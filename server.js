// server.js
// where your node app starts

// init project
const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
var Client = require("uptime-robot");

const app = express();

const discordBot = require("./bot");

// this is the code for the guides
app.use(require("./guides"));

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));
// listen for requests :)
const listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const {  PREFIX } = require("./config.json")
const bot = client
//CLIENT EVENTS
    client.on("ready", () =>{
    console.log(`Logged in as ${client.user.tag}!`);
     console.log ("status set!");
    bot.user.setPresence({
        status: 'online' ,// online  dnd  invisible idle
        activity: {
            name: 'under construction',
            type: 'COMPETING', // STREAMING PLAYING LISTENING WATCHING COMPETING
            url: 'https://www.twitch.tv/',
            
        }
        })
 });
client.on("warn", info => console.log(info));

client.on("error", console.error)

//DEFINIING
client.commands = new discord.Collection()
client.prefix = PREFIX
client.queue = new Map();
client.vote = new Map();

//LETS LOAD ALL FILES
const cmdFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"))
for (const file of cmdFiles) {
  const command = require(join(__dirname, "commands", file))
  client.commands.set(command.name, command)
} //LOADING DONE


//WHEN SOMEONE MESSAGE
client.on("message", message => {
   if (message.author.bot) return;
// if (message.guild)  
  
  if(message.content.startsWith(PREFIX)) { //IF MESSSAGE STARTS WITH MINE BOT PREFIX
    
    const args = message.content.slice(PREFIX.length).trim().split(/ +/) //removing prefix from args
    const command = args.shift().toLowerCase();
    
    if(!client.commands.has(command)) {
      return;
    } 
    
  try  { //TRY TO GET COMMAND AND EXECUTE
      client.commands.get(command).execute(client, message, args)
    //COMMAND LOGS
    
   if (message.guild) console.log(`${message.author.tag} Used ${client.commands.get(command).name}  server: ${message.guild.name} channel: #${message.channel.name} parent: ${message.channel.parent.name}`);
    else console.log(`${message.author.tag} Used ${client.commands.get(command).name}`);
  
  } catch (err) { //IF IT CATCH ERROR
      console.log(err)
      message.reply("I am getting error on using this command")
    }
    
  }
  
  
});


//DONT DO ANYTHING WITH THIS TOKEN lol
client.login (process.env.DISCORD_TOKEN)