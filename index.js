const { Telegraf } = require('telegraf')
const express = require('express')
const expressApp = express()

expressApp.get('/', (req, res) => {
    res.send(process.env)
})

const port = process.env.PORT

expressApp.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})

// const bot = new Telegraf(process.env.BOT_TOKEN)
// bot.start((ctx) => ctx.reply('Welcome'))
// bot.help((ctx) => ctx.reply('Send me a sticker'))
// bot.on('sticker', (ctx) => ctx.reply('👍'))
// bot.hears('hi', (ctx) => ctx.reply('Hey there'))
// bot.launch()