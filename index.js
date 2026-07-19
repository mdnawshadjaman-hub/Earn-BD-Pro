require("dotenv").config();

const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply("🎉 Welcome to Earn BD Pro!\n\nBot is running successfully.");
});

bot.launch();

console.log("✅ Earn BD Pro Bot Started");