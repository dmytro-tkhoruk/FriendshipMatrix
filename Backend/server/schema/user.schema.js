'use strict';

let crypto = require('crypto');
let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    gender:{
        type: String,
        required: true,
        enum: ['male', 'female']
    },

    email: {
        type: String,
        sparse: true,
        lowercase: true,
        required: true
    },

    password: { type: String,
        required: true,
        set: function(password) {
            this.salt = this.makeSalt();
            return this.encryptPassword(password);
        }
    },

    salt: { type: String }
});

Schema.methods.authenticate = function (password) {
    return this.encryptPassword(password) === this.password;
};

Schema.methods.encryptPassword = function (password) {
    if (!password || !this.salt) {
        return '';
    }
    let salt = new Buffer(this.salt, 'base64');
    return crypto.pbkdf2Sync(password, salt, 10000, 64).toString('base64');
};

Schema.methods.makeSalt = function () {
    return crypto.randomBytes(16).toString('base64');
};

try {
    module.exports = mongoose.model('User', Schema, 'Users');
}
catch(e) {
    module.exports = mongoose.model('User');
}
