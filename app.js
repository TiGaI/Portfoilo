var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var models = require('./models/models');
var compression = require('compression');
var helmet = require('helmet')

//linking file
var routes = require('./routes/index');

var mongoose = require('mongoose');
var connect = process.env.MONGODB_URI;

mongoose.connect(connect);

var app = express();

app.use(compression());
app.use(helmet());

app.use('/assets', express.static(__dirname + '/assets')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));


// view engine setup
app.set('views', path.join(__dirname, 'views'));

var hbs = require('express-handlebars')({
  defaultLayout: 'layout',
  extname: '.hbs'
});

app.engine('hbs', hbs);
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));



app.use('/', routes);


app.listen(3000, function() {
  console.log('listening on *:3000');
});