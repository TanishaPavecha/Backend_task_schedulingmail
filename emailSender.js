const nodemailer = require('nodemailer');
const { emailConfig } = require('../config/config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: emailConfig.user,
        pass: emailConfig.pass
    }
});

function sendEmail(recipient, subject, body, attachments) {
    const mailOptions = {
        from: emailConfig.user,
        to: recipient,
        subject: subject,
        text: body,
        attachments: attachments
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
}

module.exports = { sendEmail };
