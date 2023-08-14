let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let passport = require('passport');

// connect to our Survey Model
let Survey = require('../models/survey');

let QuestionMC = require('../models/questionMC');

let QuestionTF = require('../models/questionTF');

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
    console.log('call')
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

router.post('/create', async (req, res, next)=>{
    let survey;
    try {
        survey = await Survey.create({'title': req.body.survey.title, 'submitCount': 0, 'thumbnail' : req.body.survey.thumbnail, 'expire': req.body.survey.expire})
    } catch (e) {
        res.json({err : "error"});
    }  
    for (let i = 0; i < req.body.survey.question.length ; i++){
        if (req.body.survey.question[i].type == "mc") {
            try {
                await QuestionMC.create({"survey_Id" : survey._id, "qNumber" : req.body.survey.question[i].queNum, "question" : req.body.survey.question[i].question, "choice1Count" : 0, "choice2Count" : 0,"choice3Count" : 0,"choice4Count" : 0,})
            }catch (e) {
                res.json({err : "error"});
            }  
        } else {
            try{
                await QuestionTF.create({"survey_Id" : survey._id, "qNumber" : req.body.survey.question[i].queNum, "question" : req.body.survey.question[i].question, "trueCount" : 0, "falseCount" : 0})
            }catch (e) {
                res.json({err : "error"});
            } 
        }
    }
    res.json({success : "success"});
});

router.get('/:uid', async (req, res, next) => {
    let survey = {};
    let questionMC;
    let questionTF;
    try {
        survey = await Survey.findOne({_id: req.params.uid})
        survey = JSON.parse(JSON.stringify(survey))
        questionMC = await QuestionMC.find({survey_Id: survey._id})
        questionTF = await QuestionTF.find({survey_Id: survey._id})
    } catch (e) {
        res.json({err : "error"});
    }  
    try {
    } catch (e) {
        res.json({err : "error"});
    }  
    survey.question = []
    for (let x in questionMC){
        survey.question.push(questionMC[x])
    }
    for (let x in questionTF){
        survey.question.push(questionTF[x])
    }
    res.json(survey);
});

router.post('/:uid', async (req, res, next) => {
    console.log(req.body.data.question)
    try {
        await Survey.findOneAndUpdate({_id: req.params.uid}, {$inc: {submitCount : 1}})
        for (let x in req.body.data.question) {
            let bool = req.body.data.question[x].mcChoice != undefined
            if (bool){
                switch (req.body.data.question[x].mcChoice) {
                    case "choice1Count":
                        await QuestionMC.findOneAndUpdate({_id: req.body.data.question[x].id}, {$inc: {choice1Count : 1}})
                        break;
                    case "choice2Count":
                        await QuestionMC.findOneAndUpdate({_id: req.body.data.question[x].id}, {$inc: {choice2Count : 1}})
                        break;
                    case "choice3Count":
                        await QuestionMC.findOneAndUpdate({_id: req.body.data.question[x].id}, {$inc: {choice3Count : 1}})
                        break;
                    case "choice4Count":
                        await QuestionMC.findOneAndUpdate({_id: req.body.data.question[x].id}, {$inc: {choice4Count : 1}})
                        break;
                }
            } else{
                switch (req.body.data.question[x].mcChoice) {
                    case "True":
                        await QuestionTF.findOneAndUpdate({_id: req.body.data.question[x].id}, {$inc: {trueCount : 1}})
                        break;
                    case "False":
                        await QuestionTF.findOneAndUpdate({_id: req.body.data.question[x].id}, {$inc: {falseCount : 1}})
                        break;
                }
            }
        }
    } catch (e) {
        res.json({err : "error"});
    }
    res.json({success : "success"})
});

module.exports = router;