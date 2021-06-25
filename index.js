const discord = require('discord.js')
const bot = new discord.Client

const token = 'ODU3Nzk0MDc4ODI0MjAyMjQw.YNUw_Q.8okgBonGaQHkFqFsWqgkw6PZg_k'
const prefix = '!'

const words = ['*sh*a*r**k','S*H*A*R*K',':shark:', 'Watermelon Shark', 'watermelon shark', 'shark', 'Shark', 'SHARK', 'watermelon', 'Watermelon', 'WATER', 'water', 'MELON', 'melon', 'SHARK', 'FOOD', 'food', 'Food', 'FISH', 'fish', 'Fish']

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