'use strict';

module.exports = function(app, db) {
    app.post('/api/login', (req, res) => {
        console.log(req.body);
        res.send('Hello');
    });
};
