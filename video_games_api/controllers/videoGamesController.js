var mongoose = require('mongoose');
var VideoGame = require('./../models/VideoGamesModel.js');

//GET - Return all videogames in the DB
exports.findAllVideoGames = function (req, res) {
    VideoGame.find(function (err, videogames) {
        if(err)
            return res.status(500).body(err.message);    
        console.log('GET /VideoGames')
        res.status(200).jsonp(videogames);
    });
};

//GET - Return a videogame with specified ID
exports.findById = function (req, res) {
    VideoGame.findById(req.params.id, function (err, videogame) {
        if (err)
            return res.status(500).body(err.message);
        
        console.log('GET /videogame/' + req.params.id);
        res.status(200).jsonp(videogame);
    });
};

//POST - Insert a new videogame in the DB
exports.addVideoGame = function (req, res) {
    console.log('POST');
    console.log(req.body);

    var videoGame = new VideoGame({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        summary: req.body.summary
    });

    videoGame.save(function (err, game) {
        if (err)
            return res.status(500).body(err.message);
        res.status(200).jsonp(videoGame);
    });
};

//PUT - Update a register already exists
exports.updateVideoGame = function (req, res) {
    var videoGame = new VideoGame({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        summary: req.body.summary
    });

    VideoGame.findByIdAndUpdate(req.params.id, videoGame, function (err) {
        if (err)
            return res.status(500).body(err.message);
    });

};

//DELETE - Delete a videogame with specified ID
exports.deleteVideoGame = function (req, res) {
    VideoGame.findByIdAndRemove(req.params.id, function (err) {
        if (err)
            return res.status(500).body(err.message);
        res.status(200);
        res.end();
    });
};