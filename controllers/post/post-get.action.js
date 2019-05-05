const Post = require("../../models/post");

module.exports.getAll = (req, res) => {
  var query = Post.find();
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};

module.exports.getOne = (req, res) => {
  var id = req.params.id;
  var query = Post.findById(id);
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};

exports.findByPostListId = (req, res) => {
  Post.find({ postLists: req.query.postListId }).exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};

exports.list = (req, res) => {
  const { offset, limit } = req.query;
  Post.paginate(
    {},
    { offset: parseInt(offset), limit: parseInt(limit) },
    function(err, result) {
      res.json(200, result);
    }
  );
};
