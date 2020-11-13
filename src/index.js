const { Telegraf } = require('telegraf')
const express = require('express')
const bodyParser = require('body-parser')
const MoviesApiHelper  = require('./moviesApiHelper.js')

const apiHelper = new MoviesApiHelper('https://peliculasangel.herokuapp.com', 'user', 'Vcf')

     apiHelper.searchMovie('los')
        .then(res => {
            console.log(res)
            process.exit(0)

        }).catch(err =>   console.log(err))



// const webhookPath = '/webhook-path'

// const expressApp = express()

// expressApp.use(bodyParser.json());

// const bot = new Telegraf(process.env.BOT_TOKEN)
// // expressApp.use(bot.webhookCallback(webhookPath))

// console.log("####", process.env.API_BASE_URL, "####")

// expressApp.get('/', (req, res) => {
//     res.send("ANGELOTE")
// })

// expressApp.get('/setWebhook', (req, res) => {
//     const url = Buffer.from(req.query.url, 'base64').toString().replace('\n', '')
//     const webhookUrl = `${url}${webhookPath}`
//     console.log("##",webhookUrl, "##")
//     bot.telegram.setWebhook(webhookUrl).then(result => {
//             console.log("Webhook set result: ", result)
//             res.send("Webhook set")
//         }).catch(err => {
//             console.log("Error when setting webhook in telegram", err)
//         })
// })

// expressApp.use(function(err, req, res, next) {
//     console.error(err.stack);
//     res.status(500).send('Internal error');
// });

// expressApp.post(webhookPath, (req, res) => {
//     console.log("WEBHOOK PATH",req.url, req.body, "END WEBHOOK_PATH")
//     // return bot.handleUpdate(req.body, res)
// })

// const port = process.env.PORT

// expressApp.listen(port, () => {
//     console.log(`Example app listening on port ${port}!`)
// })









//  
//  expressApp.use(bot.webhookCallback('/secret-path'))
//  bot.telegram.setWebhook('https://server.tld:8443/secret-path')
// bot.launch()



