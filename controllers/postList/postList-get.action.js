const PostList = require("../../models/postList");

module.exports.getAll = (req, res) => {
  var query = PostList.find();
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};

module.exports.getOne = (req, res) => {
  var id = req.params.id;
  var query = PostList.findById(id);
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};
