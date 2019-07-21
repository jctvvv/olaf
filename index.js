require("dotenv").config();
const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!')
  }
})

client.on('message', msg => {
  if (msg.content === 'cute') {
    msg.reply('luh, pinagsasabi mo dyan?')
  }
})

client.on('message', msg => {
  if (msg.content === 'Cute') {
    msg.reply('luh, pinagsasabi mo dyan?')
  }
})
client.on('message', msg => {
  if (msg.content === 'avakin') {
    msg.reply('pansinin nyo naman gais, nakakaawa na to oh!')
  }
})

client.on('message', msg => {
  if (msg.content === 'JC') {
    msg.reply('bat mo tinatawag ung gumawa saaken huh!')
  }
})

client.on('message', msg => {
  if (msg.content === 'jc') {
    msg.reply('bat mo tinatawag ung gumawa saaken huh!')
  }
})
client.on('message', msg => {
  if (msg.content === 'laro') {
    msg.reply('sigi sali nyo ako kahit AI kahit hindi ako totoong tao hehe.')
  }
})

client.on('message', msg => {
  if (msg.content === 'ml') {
    msg.reply('ml ml pa kayo bat kasi ayaw nyo pa mag LoL?')
  }
})

client.on('message', msg => {
  if (msg.content === 'bot') {
    msg.reply('kung maka bot ka wagas, grabe ka saaken :(')
  }
})
client.on('message', msg => {
  if (msg.content === 'ML') {
    msg.reply('ml ml pa kayo bat kasi ayaw nyo pa mag LoL?')
  }
})

client.on('message', msg => {
  if (msg.content === 'zzhelp') {
    msg.reply('balakayo dyan di ko pa to nacocode HAHAHA')
  }
})
client.on('message', msg => {
  if (msg.content === 'shello') {
    msg.reply('Welcome sa Discord namen mga bobo, ako nga pala ung ginawa si JC. type zzhelp for more info.')
  }
})
client.on('guildMemberAdd', member => {
    member.send(
      `Welcome sa Discord namen mga bobo, ako nga pala ung ginawa si JC. type zzhelp for more info.`
    )
})

client.login(process.env.BOT_TOKEN)
