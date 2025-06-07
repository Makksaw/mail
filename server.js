require('dotenv').config();
const express = require('express');
const app = express();

const { sendEmail } = require('./mail');

app.use(express.json());

app.post('/mail', (req, res) => {
    const { name, email, message } = req.body;

    const subject = `Welcome ${name}`;

    const recipients = `${name} <${email}>`;

    sendEmail({ recipients, subject, message });
});

app.listen(3000, () => console.log('Listening...'));
