const express = require('express');
const sendEmail = require('./emailSend');
const ejs = require('ejs');
const path = require('path');


const app = express();

app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.set('Content-Type', 'application/json');
app.use(express.json());
app.use(express.static(path.join(__dirname + `views/static`)));

app.get('/', async (req, res) => {
    res.render('index');
})

app.post('/message', async (req, res) => {
    sendEmail(req.body.reciever, req.body.subject, req.body.body, (error) => {
        if (error) {
            res.status(500).json({message: error});
        } else {
            res.status(200).send("Message is sent successfully");
        }
    }) 
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on address: http://localhost:${process.env.PORT}`);
})