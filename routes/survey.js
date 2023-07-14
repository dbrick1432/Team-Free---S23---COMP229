let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Survey Model
let Survey = require('../models/survey');

// Get Route for the Survey List page
router.get('/', async (req, res, next)=>{
    try {
        let surveyList = await Survey.find();
        //console.log(surveyList);

        res.render('survey', {title: 'Survey List', SurveyList: surveyList})
    } catch (err){
        console.log(err);
    }
});

//Get route for create survey pages
router.get('/create', async (req, res, next)=>{
    res.render('createSurvey', {title: 'Create Survey'});
});

module.exports = router;