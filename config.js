var config = {
    development: {
        database: {            
            uri: `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@ds139435.mlab.com:39435/gamestore`,
        },
        server: {
            host: process.env.HOST,
            port: process.env.PORT
        },
        secret: process.env.SECRET
    }
};
module.exports = config;
