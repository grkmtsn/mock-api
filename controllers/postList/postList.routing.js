const PostPostList = require("./postList-post.action");
const GetPostList = require("./postList-get.action");

module.exports = {
  "/": {
    get: {
      action: GetPostList.getAll,
      level: "member"
    },
    post: {
      action: PostPostList.create,
      level: "public"
    }
  },
  "/:id": {
    get: {
      action: GetPostList.getOne,
      level: "member"
    }
  }
};
