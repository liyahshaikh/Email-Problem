const mail=require('yargs').argv;
const sgMail= require('@sendgrid/mail');
const API_KEY=mail._[1];
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
