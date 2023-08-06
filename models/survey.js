let mongoose = require('mongoose');

// create a model class
let gameModel = mongoose.Schema({
    qid: String,
    question: String,
    answer: String
},
{
    collection: 'survey'
});

module.exports = mongoose.model('Game', gameModel);