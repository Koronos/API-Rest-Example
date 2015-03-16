var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var videoGamesSchema = new Schema({
    title: { type: String },
    year: { type: Number },
    plataform: { type: String },
    genre: {
        type: String, enum: 
 ["FPS", "Adventures", "RPG", "MOBA", "MORPG", "Sports", "Rancing","Estrategy"]
    },
    summary: {type: String}
});

module.exports = mongoose.model("VideoGames", videoGamesSchema);