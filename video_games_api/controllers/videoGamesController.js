var mongoose = require('mongoose');
var videogame = require('./../models/VideoGamesModel.js');

//GET - Return all videogames in the DB
exports.findAllVideoGames = function (req, res) {
    videogame.find(function (err, videogames) {
        if(err)
            res.send(500, err.message);
        
        console.log('GET /VideoGames')
        res.status(200).jsonp(videogames);
    });
};

//GET - Return a videogame with specified ID
exports.findById = function (req, res) {
    videogame.findById(req.params.id, function (err, videogame) {
        if (err) return res.send(500, err.message);
        
        console.log('GET /videogame/' + req.params.id);
        res.status(200).jsonp(videogame);
    });
};

//POST - Insert a new videogame in the DB
exports.addVideoGame = function (req, res) {
    console.log('POST');
    console.log(req.body);

    var game = new videogame({
        title: req.body.title,
        year: req.body.year,
        genre: req.body.genre,
        summary: req.body.summary
    });

    game.save(function (err, game) {
        if (err)
            return res.status(500).body(err.message);
        res.status(200).jsonp(game);
    });
};

//PUT - Update a register already exists
exports.updateVideoGame = function (req, res) {
    videogame.findById(req.params.id, function (err, videogame) {
        videogame.title = req.body.petId;
        videogame.year = req.body.year;
        videogame.genre = req.body.genre;
        videogame.summary = req.body.summary;
        
        videogame.save(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(videogame);
        });
    });
};

//DELETE - Delete a videogame with specified ID
exports.deleteVideoGame = function (req, res) {
    videogame.findByIdAndRemove(req.params.id, function (err) {
        if (err) return res.send(500, err.message);
        res.status(200);
        res.end();
    });
};