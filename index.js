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
  if (msg.content === 'laro') {
    msg.reply('sigi sali nyo ako kahit AI kahit hindi ako totoong tao hehe.')
  }
})

client.on('message', msg => {
  if (msg.content === 'ml') {
    msg.reply('ml ml pa kayo bat kasi ayaw nyo pa mag LoL?')
  }
})

client.on('guildMemberAdd', member => {
    member.send(
      `Welcome sa Discord namen mga bobo, ako nga pala ung ginawa si JC. type zzhelp for more info.`
    )
})

client.login('NjAyMjk4NjAzOTQzNDkzNjYy.XTPq9w.O_ROYocZubMlqhTLOJ3Q7SHY3d8')
