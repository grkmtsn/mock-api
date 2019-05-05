const PostTag = require("./tag-post.action");
const GetTag = require("./tag-get.action");

module.exports = {
  "/": {
    get: {
      action: GetTag.getAll,
      level: "member"
    },
    post: {
      action: PostTag.create,
      level: "public"
    }
  },
  "/:id": {
    get: {
      action: GetTag.getOne,
      level: "member"
    }
  }
};
