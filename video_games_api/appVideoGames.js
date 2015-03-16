var mongoose = require("mongoose");

var videoGamesController = require("./controllers/videoGamesController.js");

var router = require("express").Router();

// Connection to DB
mongoose.connect('mongodb://localhost/videogames', function (err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});

router.route("/videoGames")
.get(videoGamesController.findAllVideoGames)
.post(videoGamesController.addVideoGame);

router.route("/videoGames/:id")
.get(videoGamesController.findById)
.put(videoGamesController.updateVideoGame)
.delete(videoGamesController.deleteVideoGame);

exports.videoGamesRoutes = router;