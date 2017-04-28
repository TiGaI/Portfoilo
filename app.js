var express = require('express');

var flash = require('connect-flash');
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

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
app.use(flash());
app.use('/assets', express.static(__dirname + '/assets')); // redirect root
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/fonts', express.static(__dirname + '/node_modules/bootstrap/dist/fonts')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

// Route that creates a flash message using custom middleware
app.all('/express-flash', function(req, res) {
  req.flash('error', 'This is a flash message using the express-flash module.');
  res.redirect(301, '/contact');
});

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


app.listen(process.env.PORT || 3000, function() {
  console.log('listening on *:3000');
});
