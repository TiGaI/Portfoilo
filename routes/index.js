var express = require('express'),
  aws = require('aws-sdk'),
  bodyParser = require('body-parser'),
  multer = require('multer'),
  multerS3 = require('multer-s3');
var router = express.Router();

var Contact = require('../models/models').Contact;

router.get('/contact', function(req, res) {
  res.render('contact');
});

module.exports = router;