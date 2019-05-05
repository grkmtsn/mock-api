const User = require("../../models/user");
const encrypt = require("../../helpers/encrypt");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, "public/images/uploads/");
  },
  filename: function(req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({
  storage: storage
});

module.exports.middlewares = [upload.single("avatarPath")];

module.exports.create = (req, res) => {
  const avatarPath = req.file && req.file.filename;
  const { password, ...rest } = req.body;
  const cryptedPassword = encrypt(password);
  const userBody = { password: cryptedPassword, avatarPath, ...rest };
  const newUser = new User(userBody);
  newUser.save(function(err, result) {
    if (err) return console.log(err);
    res.json(201, result);
  });
};
