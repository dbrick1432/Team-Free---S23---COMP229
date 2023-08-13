let mongoose = require('mongoose');

// create a model class
let questionTFModel = mongoose.Schema({
    survey_Id : String,
    qNumber : Number,
    question : String,
    trueCount : Number,
    falseCount : String
},
{
    collection: 'questionTF'
});

module.exports = mongoose.model('questionTF', questionTFModel);