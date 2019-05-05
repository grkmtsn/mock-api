const Showcase = require("../../models/showcase");

module.exports.getAll = (req, res) => {
  var query = Showcase.find();
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};

module.exports.getOne = (req, res) => {
  var id = req.params.id;
  var query = Showcase.findById(id);
  query.exec(function(err, result) {
    if (err) console.log(err);
    res.json(200, result);
  });
};
