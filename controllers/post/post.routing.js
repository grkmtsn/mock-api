const PostPost = require("./post-post.action");
const GetPost = require("./post-get.action");

module.exports = {
  "/": {
    get: {
      action: GetPost.getAll,
      level: "member"
    },
    post: {
      middlewares: PostPost.middlewares,
      action: PostPost.create,
      level: "public"
    }
  },
  "/:id": {
    get: {
      action: GetPost.getOne,
      level: "member"
    }
  },
  "/get/news": {
    get: {
      action: GetPost.findByPostListId,
      level: "member"
    }
  },
  "/get/list": {
    get: {
      action: GetPost.list,
      level: "member"
    }
  }
};
