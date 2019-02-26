const User = require('../../models/user');

module.exports.getAll = (req, res) => {
    console.log(req.user);
    var query = User.find().select('username email');
    query.exec(function (err, result) {
        if (err) console.log(err);
        res.json(200, result);
    });
};

module.exports.getOne = (req, res) => {
    var id = req.params.id;
    var query = User.findById(id).select('username email');
    query.exec(function (err, result) {
        if (err) console.log(err);
        res.json(200, result)
    })
};