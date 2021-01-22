const mail=require('yargs').argv;
const sgMail= require('@sendgrid/mail');
const API_KEY='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';
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