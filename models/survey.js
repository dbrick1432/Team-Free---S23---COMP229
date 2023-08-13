let mongoose = require('mongoose');

// create a model class
let surveyModel = mongoose.Schema({
    title: String,
    submitCount: String,
    thumbnail: String,
    created:
    {
        type: Date,
        default: Date.now
    },
    expire:
    {
        type: Date,
        default: Date.now() + 7*24*60*60*1000
    }
},
{
    collection: 'survey'
});

module.exports = mongoose.model('survey', surveyModel);