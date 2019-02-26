const postGames = require('./game-post.action');
const getGames = require('./game-get.action');

module.exports = {
    '/': {
        post: {
            middlewares: postGames.middlewares,
            action: postGames.action,
            level: 'member'
        },
        get: {
            action: getGames.getAll,
            level: 'member'
        }
    },
    '/:id': {
        get: {
            action: getGames.getOne,
            level: 'member'
        }
    }
};