const PostAuth = require('./auth-post.action');

module.exports = {
    '/login': {
        post: {
            action: PostAuth.action,
            level: 'public'
        }
    }
};