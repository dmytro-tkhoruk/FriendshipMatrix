'use strict';
const mongoose = require('mongoose');
const Promise = require('bluebird');
const config = require('../../config.json');

module.exports = function () {
    return new Promise(function(resolve, reject) {
        const user = process.env.hasOwnProperty('USER') ? process.env.USER : config.mongo.user;
        const pass = process.env.hasOwnProperty('PASS') ? process.env.PASS : config.mongo.password;
        const host = process.env.HOST || config.mongo.host;
        const port = process.env.PORT || config.mongo.port;
        const db_name = process.env.DBNAME || config.mongo.db_name;

        const credentials = (user && pass) ? `${user}:${pass}@` : '';
        const dbUri = `mongodb://${credentials}${host}:${port}/${db_name}`;

        mongoose.connection
            .on('error', function (err) {
                reject('mongodb connection error: ' + err.message);
            })
            .on('close', function () {
                reject('mongodb connection is closed from ' + process.pid);
            })
            .once('open', function () {
                console.log('mongodb connected from ' + process.pid);
                resolve(mongoose.connection);
            });

        console.log('Trying to connect database: ', dbUri);
        mongoose.connect(dbUri);
        mongoose.Promise = Promise;
    });
};

