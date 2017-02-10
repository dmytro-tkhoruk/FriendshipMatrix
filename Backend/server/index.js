'use strict';

const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const app            = express();
const config         = require('../config');

const port = config.app.port;
app.use(bodyParser.urlencoded({ extended: true }));
require('./routes')(app, {});

app.listen(port, () => {
    console.log('We are live on ' + port);
});