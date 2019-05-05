const PostShowcase = require("./showcase-post.action");
const GetShowcase = require("./showcase-get.action");

module.exports = {
  "/": {
    get: {
      action: GetShowcase.getAll,
      level: "member"
    },
    post: {
      action: PostShowcase.create,
      level: "public"
    }
  },
  "/:id": {
    get: {
      action: GetShowcase.getOne,
      level: "member"
    }
  }
};
