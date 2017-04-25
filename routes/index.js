var express = require('express');
var router = express.Router();

var Contact = require('../models/models').Contact;

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;