const GameModel = require('../../models/game');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/images/uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({
    storage: storage
});

module.exports.middlewares = [
    upload.single('cover')
];

module.exports.action = (req, res) => {
    const imagePath = req.file.filename;
    const data = { imagePath, ...req.body };
    const newGame = new GameModel(data);
    newGame.save(function (err, result) {
        if (err) return console.log(err);
        res.status(201).json(result);
    });
};