const GameModel = require('../../models/game');

module.exports.getAll = (req, res) => {
    GameModel.find(function (err, result) {
        if (err) console.log(err);
        res.status(200).json(result);
    })
};

module.exports.getOne = (req, res) => {
    var id = req.params.id;
    GameModel.findById(id, function (err, result) {
        if (err) console.log(err);
        res.status(200).json(result)
    })
};