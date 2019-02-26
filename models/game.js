var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var gameSchema = new Schema({
    title: String,
    imagePath: String,
    studio: String,
    desc: String,
    releaseDate: { type: Date, default: Date.now },
    createdAt: { type: Date, default: Date.now},    
    isActive : Boolean
});

module.exports = mongoose.model('Game', gameSchema)