const expressJwt = require('express-jwt');
const config = require('../config');

module.exports = jwt;

function jwt() {
    const secret = config.development.secret;
    return expressJwt({ secret }).unless({
        path: [
            '/api/auth/login'
        ]
    });
}