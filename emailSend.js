const nodeMailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.APPPASS
    }
})

const sendEmail = (email, subject, body) => {
    const mailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: body
    }
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            console.error(error);
        }
        console.log(`Message is sent to ${email}`);
    })
}

module.exports = sendEmail;