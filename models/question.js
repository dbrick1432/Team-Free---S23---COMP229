let mongoose = require('mongoose');

// create a model class
let questionModel = mongoose.Schema({
    qNumber : Number,
    question : String,
    qtype : String
},
{
    strict : false
},
{
    collection: 'question'
});

module.exports = mongoose.model('question', questionModel);