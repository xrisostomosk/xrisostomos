const express = require("express");
const fs = require("fs");
const discordBotkit = require("botkit-discord");
const app = express();
const discordBot = require("./bot");
app.use(require("./guides"));
const discord = require("discord.js")
const client = new discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });
const { readdirSync } = require("fs");
const { join } = require("path");
const {  PREFIX } = require("./config.json")
const bot = client
client.on("warn", info => console.log(info));
client.on("error", console.error)
client.commands = new discord.Collection()



client.on("message", message => {
if (message.author.bot) return;
  // if (message.guild) 
  //message.content.toLowerCase().includes
if (message.content.toLowerCase().includes("kexaoglou")){message.channel.send('kexaoglou?? mhpws enoeis aderfh?')};
if (message.content === "") {message.channel.send("test")};
if (message.content.toLowerCase().includes("h")) {message.channel.startTyping();
  setTimeout(() => {  message.channel.stopTyping(); }, 5000);
  }
if (message.content.toLowerCase() === ("_ _")){message.channel.send("_ _")};
if (message.content.toLowerCase().includes('pes')) {let pes = "pes";  message.channel.send(message.content.slice(pes.length).trim())};
if (message.content.toLowerCase().includes('geia')) {message.channel.send(`geia sou <@${message.author.id}>`)};
if (message.content.toLowerCase().includes('.') && message.author.id === '714953286880591946')   {message.channel.send('geia sou hgeth')};
  
  





















});


//DONT DO ANYTHING WITH THIS TOKEN lol
client.login (process.env.DISCORD_TOKEN)