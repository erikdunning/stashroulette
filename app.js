'use strict';

let _           = require('lodash');
let nodemailer  = require('nodemailer');
let express     = require('express');
var bodyParser  = require('body-parser');
let path        = require('path');
let config      = require('./config.js');
let app         = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

app.get('/', (req, res) => {
    config.body = req.body;
    let variables = {};
    _.extend(variables, config);
    variables.post = req.body;
    variables.get = req.query;
    res.render('index', variables);
});

app.post('/signup', (req, res) => {
    let transporter = nodemailer.createTransport('smtps://stashroulette%40gmail.com:stash123roulette@smtp.gmail.com');
    let mailOptions = {
        from: '"stash.roulette" <noreply@stashroulette.com>',
        to: "stashroulette@gmail.com",
        subject: 'Signup Form Entry',
        text: 'NAME:\n\n'  + req.body.name + '\n\nEMAIL:\n\n' + req.body.email + '\n\nSOURCE:\n\n' + req.body.source + '\n\nUSE:\n\n' + req.body.use
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){ return console.log(error); }
        console.log('Message sent: ' + info.response);
    });
    res.redirect('/?signup=submitted');
});

let port = process.argv.length > 2 ? parseInt( process.argv[2] ) : 80;
app.listen( port, () => {
    console.log('Stash Roulette is listening on port ' + port + '!');
});



