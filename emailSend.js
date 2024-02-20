const nodeMailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodeMailer.createTransport({
    host: 'example.gmail.com',
    port: '587',
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSCODE
    }
})

const sendEmail = (email, subject, body) => {
    const options = {
        from: process.env.EMAIL,
        to: email,
        subject: subject,
        text: body
    }
    transporter.sendMail(options, (error) => {
        if (error) {
            console.error(error);
        }
        console.log(`Message is sent to ${email}`);
    })
}

module.exports = sendEmail;