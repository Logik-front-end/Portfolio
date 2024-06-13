const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const bot = new TelegramBot('7239568261:AAGbPGmQvIERALI70hCXZ9utwEJCvd87DWo', { polling: false });

const chatGroupId = -995232328; // ID вашої групи, куди бот буде відправляти повідомлення

app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await bot.sendMessage(chatGroupId, `Нове повідомлення від ${name} (${email}): ${message}`);
        res.status(200).send('Повідомлення успішно відправлено');
    } catch (error) {
        console.error('Помилка відправлення повідомлення:', error);
        res.status(500).send('Не вдалося відправити повідомлення');
    }
});

app.listen(PORT, () => {
    console.log(`Сервер працює на порті ${PORT}`);
});

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Привіт! Як справи? Чи отримали ви нові повідомлення?');
});

bot.onText(/\/повідомлення/, (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Тут буде список нових повідомлень...');
});

bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Отримав ваше повідомлення.');
});
