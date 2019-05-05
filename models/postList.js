var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostListSchema = new Schema({
  name: String,
  code: String
});

module.exports = mongoose.model("PostList", PostListSchema);
