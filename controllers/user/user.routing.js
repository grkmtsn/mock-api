const PostUser = require('./user-post.action');
const GetUser = require('./user-get.action');

module.exports = {
    '/': {
        get: {
            action: GetUser.getAll,
            level: 'member'
        }
    },
    '/:id': {
        get: {
            action: GetUser.getOne,
            level: 'member'
        }
    },
    '/register': {
        post: {
            middlewares: PostUser.middlewares,
            action: PostUser.create,
            level: 'public'
        },
    }
};