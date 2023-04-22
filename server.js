const { Telegraf } = require('telegraf');
const { message } = require('telegraf/filters');
const getData = require('./getData')
const menu = require('./menu')

const bot = new Telegraf("6034460591:AAE3q1DBI85_iZizeb-MuuQ7rRJhyQ9O6WE");
bot.start((ctx) => ctx.reply('Welcome'));
bot.use((ctx, next) => {
    console.log(ctx.message.text)
    next()
})
bot.help((ctx) => ctx.reply('Send me a sticker'));
bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

bot.command('menu', (ctx) => {
    menu(ctx)
})
bot.command('ngintip1', async (ctx) => {
    await getData(ctx, 'instagram-data12.p.rapidapi.com')
})
bot.command('ngintip2', async (ctx) => {
    await getData(ctx,'instagram-profile1.p.rapidapi.com')
})
bot.command('ngintip3', async (ctx) => {
    await getData(ctx,'instagram-fast.p.rapidapi.com')
})
bot.command('ngintip4', async (ctx) => {
    await getData(ctx, 'instagram-scraper2.p.rapidapi.com')
})

bot.launch(console.log('Bot Started..'));

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));