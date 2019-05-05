const express = require("express");
const permissions = require("./permissions");
const errorHandler = require('./helpers/error-handler');
const jwt = require('./helpers/jwt');
const cors = require('./cors');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require('morgan');

const path = require("path");
const lumie = require("lumie");

const app = express();
//Server Configuration
const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];


//Parsing Request Body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//JWT Secure

app.use(morgan('combined'));

app.use('/static', express.static(path.join(__dirname, 'public')))

app.use(jwt());

cors(app);

//DB Connection
mongoose.connect(config.database.uri, { useNewUrlParser: true });
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DB Connected!!..')
});

//API Tool
lumie.load(app, {
    preURL: "api",
    verbose: true,
    permissions,
    ignore: ["*.spec", "*.action"],
    controllers_path: path.join(__dirname, "controllers")
});

app.use(errorHandler);

const server = app.listen(config.server.port, config.server.host, () => {
    const { address, port } = server.address();
    console.log("Example app listening at http://%s:%s", address, port);
});

module.exports = app;