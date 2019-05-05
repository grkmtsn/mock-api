const Tag = require("../../models/tag");

module.exports.create = (req, res) => {
  const tagBody = { ...req.body };
  const newTag = new Tag(tagBody);
  newTag.save(function(err, result) {
    if (err) return console.log(err);
    res.json(201, result);
  });
};
