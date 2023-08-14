let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Survey Model
let Survey = require('../models/survey');

function requireAuth(req, res, next)
{
    if(!req.isAuthenticated())
    {
        return res.redirect('/login');
    }
    next();
}

// Get Route for the Survey List page
router.get('/', async (req, res, next)=>{
    try {
        let surveyList = await Survey.find();
        res.json(surveyList)
        //res.render('survey', {title: 'Survey List', SurveyList: surveyList})
    } catch (err){
        res.json(err)
    }
});

//Get route for create survey pages
router.get('/create', (req, res, next)=>{
    res.render('createSurvey', {title: 'Create Survey'});
});

router.post('/create', (req, res, next)=>{
    console.log('yes')
    res.json();
});

module.exports = router;