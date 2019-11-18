var config = {
    development: {
        database: {            
            uri: 'mongodb://<dbuser>:<dbpass>@ds139435.mlab.com:39435/gamestore',
        },
        server: {
            host: '127.0.0.1',
            port: '8080'
        },
        secret: '<secretkey>'
    }
    // production: {
    //     //mongodb connection settings
    //     database: {
    //         host: '127.0.0.1',
    //         port: '27017',
    //         db: 'site'
    //     },
    //     //server details
    //     server: {
    //         host: '127.0.0.1',
    //         port: '3421'
    //     }
    // }
};
module.exports = config;
