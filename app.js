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

app.use(express.static(path.join(__dirname, 'assets')));


app.use('/', routes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


app.listen(3000, function() {
  console.log('listening on *:3000');
});
