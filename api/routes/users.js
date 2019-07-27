const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');

const router = express.Router();

const User = require('../models/user');
const jwtSecret = process.env.JWT_SECRET;

const EmailSecret = process.env.EMAIL_CONFIRM_SECRET;
const EmailService = require('../broker/EmailService.js');
const UsersController = require('../controllers/users');

const passportJWT = passport.authenticate('jwt', { session: false });
const passportGoogle = passport.authenticate('googleToken', { session: false });
// const sms = require('../broker/SMSService.js');

const signToken = user => {
  return jwt.sign(user.toJSON(), jwtSecret, {
    expiresIn: 604800, // 1 week in seconds
  });
};

router.get('/confirmation/:token', async (req, res) => {
  try {
    const {
      user: { id },
    } = jwt.verify(req.params.token, EmailSecret);

    return User.getUserById(id, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: 'Invalid email or password' });
      }
      const confirmedUser = user;
      confirmedUser.confirmed = true;
      confirmedUser.save();
      return res.send('Thank you for confirming your email');
    });
    //   await User.update({ confirmed: true }, { where: { id } }, (err, result) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log(result);
    //         res.send('Thank you for confirming your email');
    //     }

    //   });

    //   return res.redirect(process.env.BASE_URL);
  } catch (e) {
    console.error(e);

    return res.send('error verifying email token, maybe expired');
  }
});

// Resigter
router.post('/register', (req, res) => {
  const { name, email, profileName, password, phone } = req.body;
  const newUser = new User({
    method: 'local',
    name,
    email,
    profileName,
    password,
    confirmed: false,
    phone,
    // confirmations: {
    // 	tos: req.body.confirmations.tos,
    // 	email: req.body.confirmations.email
    // }
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: 'Error: failed to register' });
    } else {
      try {
        EmailService.sendConfirmEmail(user);
      } catch (error) {
        console.error(error);
      }
      console.log('Registration complete');
      res.json({ success: true, msg: 'Registration complete' });
    }
  });
  // res.send('REGISTER');
});

// Authenticate
router.post('/authenticate', (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'Invalid email or password' });
    }

    if (!user.confirmed) {
      try {
        EmailService.sendConfirmEmail(user);
      } catch (error) {
        console.error(error);
      }
      return res.json({
        success: false,
        msg: 'Please confirm your email to login, resending email',
      });
    }

    return User.comparePassword(password, user.password, (error, isMatch) => {
      if (error) throw err;
      if (isMatch) {
        const token = signToken(user);
        // req.flash('successfully logged in');
        return res.json({
          success: true,
          token: `JWT ${token}`,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            profileName: user.profileName,
          },
        });
      }
      return res.json({ success: false, msg: 'Invalid email/password' });
    });
  });
});

router.post('/oauth/google', passportGoogle, (req, res) => {
  const token = `JWT ${signToken(req.user)}`;
  res.status(200).json({ token });
});

// router.get('/2fa', (req, res, next) => {

// });

// router.post('/2fa:token', (req, res, next) => { });

// Profile
router.get('/profile', passportJWT, (req, res) => {
  return res.json({ user: req.user });
});

module.exports = router;
