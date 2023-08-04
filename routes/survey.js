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
        //console.log(surveyList);
        /*
        testjson = [
            { title: 'Card 1', cols: 1, rows: 1 },
            { title: 'Card 2', cols: 1, rows: 1 },
            { title: 'Card 3', cols: 1, rows: 1 },
            { title: 'Card 4', cols: 1, rows: 1 }
          ];
        */
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

module.exports = router;