var mongoose = require('mongoose');
var videogame = mongoose.model('VideoGames');

//GET - Return all videogames in the DB
exports.findAllvideogames = function (req, res) {
    videogame.find(function (err, videogames) {
        if (err) res.send(500, err.message);
        
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
exports.addvideogame = function (req, res) {
    console.log('POST');
    console.log(req.body);
    
    var videogame = new videogame({
        title: req.body.title,
        year: req.body.year,
        country: req.body.country,
        poster: req.body.poster,
        seasons: req.body.seasons,
        genre: req.body.genre,
        summary: req.body.summary
    });
    
    videogame.save(function (err, videogame) {
        if (err) return res.send(500, err.message);
        res.status(200).jsonp(videogame);
    });
};

//PUT - Update a register already exists
exports.updatevideogame = function (req, res) {
    videogame.findById(req.params.id, function (err, videogame) {
        videogame.title = req.body.petId;
        videogame.year = req.body.year;
        videogame.country = req.body.country;
        videogame.poster = req.body.poster;
        videogame.genre = req.body.genre;
        videogame.summary = req.body.summary;
        
        videogame.save(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200).jsonp(videogame);
        });
    });
};

//DELETE - Delete a videogame with specified ID
exports.deletevideogame = function (req, res) {
    videogame.findById(req.params.id, function (err, videogame) {
        videogame.remove(function (err) {
            if (err) return res.send(500, err.message);
            res.status(200);
        })
    });
};