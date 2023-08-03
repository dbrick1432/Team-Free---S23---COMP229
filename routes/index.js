var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let jsonRes = {
    
  }
  //res.json();
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
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

/* GET home page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

module.exports = router;
