'use strict';

module.exports = function(app, db) {
    app.delete('/api/friendship/:currentUserId/:userId', (req, res) => {
        console.log(req.body);
        res.send('Hello');
    });

    app.post('/api/friendship', (req, res) => {
        console.log(req.body);
        res.send('Hello');
    });
};
