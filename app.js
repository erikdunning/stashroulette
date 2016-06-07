'use strict';

let express = require('express');
let path = require('path');
let config = require(path.resolve( __dirname, 'config.js' ));
let app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views')
app.set('view engine', 'pug')


app.get('/', (req, res) => {
  res.render('index', config);
});

let port = process.argv.length > 2 ? parseInt( process.argv[2] ) : 80;
app.listen( port, () => {
  console.log('Stash Roulette is listening on port ' + port + '!');
});



