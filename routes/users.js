var express = require('express');
var router = express.Router();
let userModel = require('../models/user');
let User = userModel.User;

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

router.post('/Login', (req, res, next) => {
  // temp code, connect to db and rewrite later
  if (req.body.userInfo.userName == "admin"  && req.body.userInfo.password == "1234ab") {
    res.json({login: "success"})
  } else {
    res.json({err: "user not found"})
  }
  /*
  passport.authenticate('local',(err, user, info) => {})(req, res, next)
  */
});

module.exports = router;
