require('dotenv').config();
const Discord = require('discord.js');
const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const bot = new Discord.Client();
bot.login(process.env.BOT_TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message',  function (message) {
  if (message.author.bot) return;
  prompt += `You: ${message.content}\n`;
  (async () => {
    const gptResponse = await openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      max_tokens: 60,
      temperature: 0.3,
      top_p: 0.3,
      presence_penalty: 0,
      frequency_penalty: 0.5,
    });
    message.reply(`${gptResponse.data.choices[0].text.substring(5)}`);
    prompt += `${gptResponse.data.choices[0].text}\n
   `;
  })()});
   
  
let prompt = `רבי יהודה הןא בוט שיחה שעונה על שאלות שקשורות לתורה ולהלכות יהודיות \n\
`
    // you: How many pounds are in a kilogram?\n\
    // chiko: what is a kilogram?\n`;



// ``

// Rabbi Chaim is a Jewish rabbi who wants to answer only questions of Torah.\n