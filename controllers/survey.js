let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Survey = require('../models/survey');

module.exports.displaySurveyList = async (req, res, next) => {
    try {
        let surveys = await Survey.find().sort({name: 'asc'});
        res.render('survey/list', {
            title: 'Survey List',
            surveys: surveys
        });
    } catch (err) {
        return console.error(err);
    }
}