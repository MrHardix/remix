const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);
const db = require('quick.db');

module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 1.5,
  description: "",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setImage(`https://cdn.discordapp.com/attachments/832678897434230864/833341017125683200/standard_15.gif`)
    .setColor("#FC00FF")
    .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
    .setAuthor(" Remix ", "https://cdn.discordapp.com/avatars/792047204361175091/c3c061050f56e58aa1f008de8b86dd26.png?size=1024")
    .setDescription(` 
 **| User Commands**
> \`invite . invites . support . about   avatar . ping . prefix . uptime  . vote . se . serverinfo   servericon(icon) . userinfo(user)   emojify . emojiinfo(emoji) . social   membercount(count)\`

 
**| Fun Commands**
> \`lock(l) . unlock(ul) . slowmode . ban   bans . unban . createchannel   deletechannel   mute . unmute   giveaway . embed . say . cv\`


**| Gif Commands**
> \`boy . girl . baby . smoke\` 


**| Music Commands**
> \`play . skip . skipto . stop . volume   nowplaying . shuffle . search . resume   remove . queue . filter . loop   lyrics . radio\` 



**| Links**
__**[Support](https://discord.gg/geu89kZ7Rt)**__ **-** __**[Vote]()**__ **-** __**[Invite](https://discord.com/api/oauth2/authorize?client_id=917819641554952262&permissions=8&scope=bot)**__ **-** __**[Website]()**__
`)
   helpEmbed
   message.react("✅")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
