var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var videoGamesSchema = new Schema({
    title: { type: String },
    year: { type: Number },
    country: { type: String },
    poster: {type: String},
    plataform: { type: String },
    genre: {
        type: String, enum: 
 ["FPS", "Adventures", "RPG", "MOBA", "MORPG", "Sports", "Rancing"]
    },
    summary: {type: String}
});

module.exports = mongoose.model("VideoGames", videoGamesSchema);