var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TagSchema = new Schema({
  name: String,
  code: String,
  posts: [{type: mongoose.Schema.Types.ObjectId, ref: 'Post'}]
});

module.exports = mongoose.model("Tag", TagSchema);
