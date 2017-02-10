'use strict';

let mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    userId: {
        type: Schema.schema.objectId,
        required: true
    },

    friendId:{
        type: String,
        required: true
    }
});

try {
    module.exports = mongoose.model('Friendship', Schema, 'Friendships');
}
catch(e) {
    module.exports = mongoose.model('Friendship');
}
