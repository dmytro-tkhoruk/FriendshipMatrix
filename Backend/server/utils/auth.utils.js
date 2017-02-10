'use strict';
const co = require('co');
//const passport = require('../index.js').passport;

const passportJWT = require('passport-jwt');
const ExtractJwt = passportJWT.ExtractJwt;
const JwtStrategy = passportJWT.Strategy;
const LocalStrategy = require('npm i').Strategy;

const config = require('../../config.json');
const User = require('../schema/user.schema');

module.exports = function(passport) {
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    passport.use(new LocalStrategy((email, password, done)  => {
        co(function* auth() {
            User.findOne({email: email}).then((user) => {
                done(null, user && user.authenticate(password) ? user : false, { message: 'Incorrect password.' });
            })
        })
        .catch(function onError(e) {
            console.error('Something went terribly wrong!');
            console.error(e.stack);
            done(e, null);
        })
    }));

    const jwtOptions = {
        secretOrKey: config.jwtSecret,
        jwtFromRequest: ExtractJwt.fromHeader('x-wsse')  //Custom header
    };

    passport.use(new JwtStrategy(jwtOptions, function(jwt_payload, done) {
        User.findOne({_id: jwt_payload._id}, function(err, user) {
            if (err) {
                return done(err, false);
            }
            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }))

};
