let mongoose = require('mongoose');

// create a model class
let questionMCModel = mongoose.Schema({
    survey_Id : String,
    qNumber : Number,
    question : String,
    choice1Count : Number,
    choice2Count : Number,
    choice3Count : Number,
    choice4Count : Number
},
{
    collection: 'questionMC'
});

module.exports = mongoose.model('questionMC', questionMCModel);