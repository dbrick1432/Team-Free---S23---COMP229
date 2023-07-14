let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect to our Game Model
let Game = require('../models/game');

// Get Route for the Game List page
router.get('/', async (req, res, next)=>{
    try {
        let gameList = await Game.find();
        //console.log(gameList);

        res.render('game', {title: 'Game List', GameList: gameList})
    } catch (err){
        console.log(err);
    }
});

//Get route for create survey pages
router.get('/create', async (req, res, next)=>{
    res.render('createGame', {title: 'Create Survey'});
});

module.exports = router;