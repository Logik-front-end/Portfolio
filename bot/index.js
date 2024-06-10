const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
    const { name, email, message } = req.body;
    try {
        await axios.post('https://api.telegram.org/bot7239568261:AAGbPGmQvIERALI70hCXZ9utwEJCvd87DWo/sendMessage', {
            chat_id: '@Portfolio1234bot',
            text: `New message from ${name} (${email}): ${message}`,
        });
        res.status(200).send('Message sent successfully');
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).send('Failed to send message');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
