const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');


const User = require('../models/user');
const config = require('../config/database');

// Resigter
router.post('/register', (req, res, next) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    profileName: req.body.profileName,
    password: req.body.password,
    confirmations: {
      tos: req.body.confirmations.tos,
      email: req.body.confirmations.email,
    },
  });
  User.addUser(newUser, (err, user) => {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: 'Error: failed to register' });
    } else {
      res.json({ success: true, msg: 'Registration complete' });
    }
  });
  // res.send('REGISTER');
})

// Authenticate
router.post('/authenticate', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'Invalid email or password' });
    }

    User.comparePassword(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (isMatch) {
        const token = jwt.sign(user.toJSON(), config.secret, {
          expiresIn: 604800 // 1 week in seconds
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
            profileName: user.profileName,
          }
        });
      } else {
        return res.json({ success: false, msg: 'Invalid email/password' });
      }
    })
  })
})

// Profile
router.get('/profile', passport.authenticate('jwt', { session:false }), (req, res, next) => {
  res.json({ user: req.user });
})


module.exports = router;