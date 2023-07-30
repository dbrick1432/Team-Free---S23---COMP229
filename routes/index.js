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
/* Get Route for displaying the Login Page */
router.get('/login', indexController.displayLoginPage);

/* Post Route for processing the Login Page */
router.post('/login', indexController.processLoginPage);

/* Get Route for displaying the Register Page */
router.get('/register', indexController.displayRegisterPage);

/* Get Route for processing the Register Page */
router.post('/register', indexController.processRegisterPage);

/* Get to perform UserLogout */
router.get('/logout', indexController.performLogout);

module.exports = router;
