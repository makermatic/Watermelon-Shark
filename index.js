const discord = require('discord.js')
const bot = new discord.Client

const token = 'ODU3Nzk0MDc4ODI0MjAyMjQw.YNUw_Q.8okgBonGaQHkFqFsWqgkw6PZg_k'
const prefix = '!'

const words = ['Watermelon Shark', 'watermelon shark', 'shark', 'Shark', 'watermelon', 'Watermelon']

bot.on('ready', () => {
    console.log('Bot is online you sick fuck.')
})

bot.on('message', msg => {
    //Word detector
    if (words.some(word => msg.content.includes(word))) {
        const image = new discord.MessageAttachment('./shark.png')
        msg.reply (image)
    }
})

bot.login(token)