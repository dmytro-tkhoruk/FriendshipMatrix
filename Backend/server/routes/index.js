'use strict';

const loginRoute = require('./login.route');
const registerRoute = require('./register.route');
const friendshipRoute = require('./friendship.route');

module.exports = function(app, db) {

    app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    loginRoute(app, db);
    registerRoute(app, db);
    friendshipRoute(app, db);
};