'use strict';

let nodemailer  = require('nodemailer');
let express     = require('express');
let path        = require('path');
let config      = require('./config.js');
let app         = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index', config);
});

app.post('/signup', (req, res) => {
/*
    exports.send_error_email = function( errors ){

    let transporter = nodemailer.createTransport('smtp://mail.badgermeter.com');

    let mailOptions = {
        from: '"Badger Meter Workday Service" <noreply@badgermeter.com>', // sender address
        to: cfg.error_emails.join(', '), // list of receivers
        subject: 'Encountered Workday Submission Errors', // Subject line
        text: errors //, // plaintext body
        /* html: '<b>Hello world 🐴</b>' // html body
    };

    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
    });

*/

});

});

let port = process.argv.length > 2 ? parseInt( process.argv[2] ) : 80;
app.listen( port, () => {
    console.log('Stash Roulette is listening on port ' + port + '!');
});



