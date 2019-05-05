const PostList = require("../../models/postList");

module.exports.create = (req, res) => {
  const postListBody = { ...req.body };
  const newPostList = new PostList(postListBody);
  newPostList.save(function(err, result) {
    if (err) return console.log(err);
    res.json(201, result);
  });
};
