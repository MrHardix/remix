const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "invite",
  aliases: ["Invite"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
   .setDescription("**[Click here](https://discord.com/api/oauth2/authorize?client_id=790583289454133278&permissions=8&scope=bot) to invite the bot.**")
    .setColor("#FC00FF")
   helpEmbed  
   message.react("<a:emoji_81:779961595656536084>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
