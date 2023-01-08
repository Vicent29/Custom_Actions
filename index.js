const core = require('@actions/core');
const TelegramBot = require('node-telegram-bot-api');

const token = process.env.tel_token;
const chat_id = process.env.tel_chat_id;
const name = process.env.name;
const telegram_msg = 'Workflow ejecutado correctamente tras el último commit. Saludos' + name;
const bot = new TelegramBot(token, { polling: true });


bot.sendMessage(chat_id, telegram_msg)
    .then(data => {
        console.log("Mensage enviado correctamente");
        core.setOutput('msg', "Mensaje enviado");
        process.exit(0)
    })
.catch(e => core.setFailed(e));
