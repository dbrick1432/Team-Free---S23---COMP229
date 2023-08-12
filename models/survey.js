let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    qid: String,
    question: String,
    answer: String
},
{
    collection: 'survey'
});

module.exports = mongoose.model('survey', surveyModel);