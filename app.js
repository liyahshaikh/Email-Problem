const mail=require('yargs').argv;
require('dotenv').config();
const sgMail= require('@sendgrid/mail');
const API_KEY=process.env.API_KEY;
const receiver=mail._[0];
sgMail.setApiKey(API_KEY);
const message={
    to : receiver,
    from : 'sam_fred1@outlook.com',
    subject : 'Hello, Aliya',
    text : 'This is an attempt to overthrow the human race- Optimus prime',
    html :'<h1>This is an attempt to overthrow the human race- Optimus prime</h1>' 
};
sgMail
.send(message)
.then((response) =>console.log('Email sent!!!!'))
.catch((err) => console.log(err.message));
 