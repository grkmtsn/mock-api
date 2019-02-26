var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    email: String,
    createdAt: { type: Date, default: Date.now },
    isActive: Boolean
});

module.exports = mongoose.model('User', UserSchema)