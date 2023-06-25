require("dotenv").config();
const {generateMessage} = require('./chatgpt');
const Discord = require("discord.js");

const bot = new Discord.Client();

bot.login(process.env.BOT_TOKEN);

bot.on("ready", () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on("message",  async (message) => {
  if (message.author.bot) return;
  const gptAnswer = await generateMessage(message);
    message.reply(gptAnswer);
});
