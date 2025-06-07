const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: false,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD,
    },
});

const sendEmail = async ({ recipients, subject, message }) => {
    await transporter.sendMail({
        from: 'no-reply@example.com',
        to: recipients,
        subject,
        text: message,
        html: message,
    });
};

module.exports = { sendEmail };
