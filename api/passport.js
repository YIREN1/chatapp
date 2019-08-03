const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const GooglePlusTokenStrategy = require('passport-google-plus-token');

const User = require('./models/user');

const jwtSecret = process.env.JWT_SECRET;

module.exports = passport => {
  // JWT
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: jwtSecret,
    passReqToCallback: true,
  };

  passport.use(
    new JwtStrategy(opts, async (req, jwtPayload, next) => {
      User.getUserById(jwtPayload._id, (err, user) => {
        try {
          if (err) {
            console.error(err);
            return next(err, false);
          }
          if (user) {
            req.user = user;
            return next(null, user);
          }
          console.log(11111);
          return next(null, false);
        } catch (error) {
          console.error(error);
          return next(error, false);
        }
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
        passReqToCallback: true,
      },
      async (req, accessToken, refreshToken, profile, next) => {
        // console.log('accessToken', accessToken);
        // console.log(profile);
        try {
          if (req.user) {
            // We're already logged in, time for linking account!
            // Add Google's data to an existing account
            req.user.methods.push('google');
            req.user.google = {
              id: profile.id,
              email: profile.emails[0].value,
            };

            await req.user.save();
            console.log('has user');
            return next(null, req.user);
          }
          // else
          let existingUser = await User.findOne({ 'google.id': profile.id });
          if (existingUser) {
            return next(null, existingUser);
          }

          // Check if we have someone with the same email
          existingUser = await User.findOne({
            email: profile.emails[0].value,
          });
          if (existingUser) {
            // We want to merge google's data with local auth
            existingUser.methods.push('google');
            existingUser.google = {
              id: profile.id,
              email: profile.emails[0].value,
            };
            await existingUser.save();
            return next(null, existingUser);
          }

          const newUser = new User({
            methods: ['google'],
            google: {
              id: profile.id,
              email: profile.emails[0].value,
            },
          });

          await newUser.save();
          return next(null, newUser);
        } catch (error) {
          console.error(error);
          return next(error, false, error.message);
        }
      },
    ),
  );
};
