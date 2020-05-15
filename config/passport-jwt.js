const passport = require('passport');

const JwtStrategy = require('passport-jwt').Strategy;
//module to extract JWT from the header part
const ExtractJwt = require('passport-jwt').ExtractJwt;


//we need doctor for authentication
const Doctor = require('../models/doctor');


let opts = {}

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
 opts.secretOrKey = 'hospitalapi';
// opts.issuer = 'accounts.examplesoft.com';
// opts.audience = 'yoursite.net';

passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    Doctor.findOne({email: jwt_payload.email}, function(err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    });
}));


module.exports = passport;