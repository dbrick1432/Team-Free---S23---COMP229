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
},
{
    collection: 'survey'
});

module.exports = mongoose.model('survey', surveyModel);