const Tag = require("../../models/tag");

module.exports.getAll = (req, res) => {
  var query = Tag.find();
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};

module.exports.getOne = (req, res) => {
  var id = req.params.id;
  var query = Tag.findById(id);
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};
