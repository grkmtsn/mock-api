const PostAuth = require('./auth-post.action');

module.exports = {
    '/login': {
        post: {
            action: PostAuth.login,
            level: 'public'
        }
    }
};