var express = require('express');
var router = express.Router();

function isAuth(req, res, next)
{
  if (req.isAuthenticated()){
    return true
  }
  else {
    return false;
  }
}

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page' });
});

/* GET register page. */
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Register' });
});

/* GET login status*/
router.get('/status', function(req, res, next) {
  res.send(isAuth(req));
});
module.exports = router;
