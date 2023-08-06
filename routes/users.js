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
/*
router.post('/register', (req, res, next) => {
  // temp code, connect to db and rewrite later
  if (req.body.userInfo.userName == "admin") {
    res.json({err:"user exist"})
  } else if(req.body.userInfo.userName && req.body.userInfo.password && req.body.userInfo.email && req.body.userInfo.displayName){
    res.json({login: "success"})
  } else {
    res.json({err:"please fill in all field"})
  }
  
  passport.authenticate('local',(err, user, info) => {})(req, res, next)
  
});
*/
router.post('/register', (req, res, next) => {

  //let insert = User.create({'username': req.body.userInfo.userName, 'password': req.body.userInfo.password, 'email' : req.body.userInfo.email, 'displayName': req.body.userInfo.displayName})
  User.find({'username': req.body.userInfo.userName})
  .then(function(data) {
    if(data.length == 0){
      return User.find({'email' : req.body.userInfo.email})
    } else {
      res.json({err : 'user exist'})
      throw 'The user already exists.'
    }
  })
  .then(function(data) {
    if(data.length == 0){
      return User.create({'username': req.body.userInfo.userName, 'password': req.body.userInfo.password, 'email' : req.body.userInfo.email, 'displayName': req.body.userInfo.displayName})
    } else {
      res.json({err : 'email registered'})
      throw 'The email already exists.'
    }
  }).then(function(data){
    console.log(data)
    res.json({success : 'registered!'})
  })
  .catch((e) => console.error(e))
})


module.exports = router;
