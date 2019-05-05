var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ShowcaseSchema = new Schema({
  name: String,
  code: String,
  title: String,
  postListId: {type: mongoose.Schema.Types.ObjectId, ref: 'PostList'}
});

module.exports = mongoose.model("Showcase", ShowcaseSchema);
