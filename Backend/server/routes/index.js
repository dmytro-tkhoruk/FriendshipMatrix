'use strict';

const loginRoute = require('./login.route');
const registerRoute = require('./register.route');
const friendshipRoute = require('./friendship.route');

module.exports = function(app, db) {
    loginRoute(app, db);
    registerRoute(app, db);
    friendshipRoute(app, db);
};