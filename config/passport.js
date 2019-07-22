const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const GooglePlusTokenStrategy = require('passport-google-plus-token');

const User = require('../models/user');
const config = require('../config/database');

module.exports = passport => {
  // JWT
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = config.secret;
  // console.log(opts.jwtFromRequest());
  passport.use(
    new JwtStrategy(opts, async (jwtPayload, done) => {
      User.getUserById(jwtPayload._id, (err, user) => {
        if (err) {
          console.error(err);
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }

        return done(null, false);
      });
    }),
  );

  // Oauth
  // Google OAuth Strategy
  passport.use(
    'googleToken',
    new GooglePlusTokenStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      },
      async (accessToken, refreshToken, profile, done) => {
        console.log('accessToken', accessToken);
        console.log(profile);

        try {
          const existingUser = await User.findOne({ 'google.id': profile.id });
          if (existingUser) {
            return done(null, existingUser);
          }

          const newUser = new User({
            method: 'google',
            google: {
              id: profile.id,
              email: profile.emails[0].value,
            },
          });

          await newUser.save();
          return done(null, newUser);
        } catch (error) {
          return done(error, false, error.message);
        }
      },
    ),
  );
};
