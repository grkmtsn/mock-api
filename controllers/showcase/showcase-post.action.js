const Showcase = require("../../models/showcase");

module.exports.create = (req, res) => {
  const showcaseBody = { ...req.body };
  const newShowcase = new Showcase(showcaseBody);
  newShowcase.save(function(err, result) {
    if (err) return console.log(err);
    res.json(201, result);
  });
};
