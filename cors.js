'use strict';
module.exports = function (app) {
    const cors = require('cors');
    const whiteList = ['http://localhost:3000', 'http://localhost:5000', 'http://localhost:8080', 'http://localhost:8081'];
    const corsOptions = {
        origin: function (origin, callback) {
            if (whiteList.indexOf(origin) !== -1) {
                callback(null, true);
            } else {
                callback(new Error('Not Allowed by CORS configuration.'));
            }
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    }

    app.options('*', cors(corsOptions));
    app.use(cors(corsOptions));
};