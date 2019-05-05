var mongoose = require("mongoose");
var mongoosePaginate = require("mongoose-paginate");

var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  content: String,
  publishDate: { type: Date, default: Date.now },
  isPublished: {type: Boolean, default: false},
  postedBy: { type: Schema.Types.ObjectId, ref: "User" },
  postLists : [{ type: Schema.Types.ObjectId, ref: 'PostList' }],
  viewCount: { type: Number, default: 0 },
  coverImagePath: String,
  tags: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model("Post", PostSchema);
