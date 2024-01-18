const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'shrutipagar206@gmail.com',
        pass: 'pmhx vwkg ynfx sici'
    }
});

const mailOptions = {
    from: 'shrutipagar206@gmail.com',
    to: 'imsrushtikulkarni@gmail.com',
    subject: 'Rajasthan Police Feedback',
    text: 'How was your Experience?'
};

transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});