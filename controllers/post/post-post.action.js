const Post = require("../../models/post");

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

module.exports.middlewares = [upload.single("coverImagePath")];

module.exports.create = (req, res) => {
  const coverImagePath = req.file && req.file.filename;

  const postBody = {coverImagePath, ...req.body };
  const newPost = new Post(postBody);
  newPost.save(function(err, result) {
    if (err) return console.log(err);
    res.json(201, result);
  });
};
