var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Team Free' });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Team Free' });
});

/* GET home page. */
router.get('/about', function(req, res, next) {
  res.render('index', { title: 'About' });
});

/* GET home page. */
router.get('/list', function(req, res, next) {
  res.render('list', { title: 'List of Surveys' });
});

/* GET home page. */
router.get('/services', function(req, res, next) {
  res.render('index', { title: 'Services' });
});

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { title: 'Contact Us' });
});

module.exports = router;
