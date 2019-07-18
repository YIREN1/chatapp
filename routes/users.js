const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const User = require('../models/user');
const config = require('../config/database');
const EmailSecret = require('../config/confirmation.js').secret;
const EmailService = require('../broker/EmailService.js');
const sms = require('../broker/SMSService.js');

router.get('/confirmation/:token', async (req, res) => {
    try {
      const { user: { id } } = jwt.verify(req.params.token, EmailSecret);
      User.getUserById(id, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'Invalid email or password' });
        }
        user.confirmed = true;
        user.save();
        res.send('Thank you for confirming your email');
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
router.post('/register', (req, res, next) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        profileName: req.body.profileName,
        password: req.body.password,
        confirmed: false,
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
                jwt.sign(
                    {
                      user: _.pick(user, 'id'),
                    },
                    EmailSecret,
                    {
                      expiresIn: '1d',
                    },
                    (err, emailToken) => {
                      const url = `${process.env.BASE_URL}/users/confirmation/${emailToken}`;
                      EmailService.sendEmail(user, url);
                    })

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
router.post('/authenticate', (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.getUserByEmail(email, (err, user) => {
        if (err) throw err;
        if (!user) {
            return res.json({ success: false, msg: 'Invalid email or password' });
        }

        if (!user.confirmed) {
            return res.json({ success: false, msg: 'Please confirm your email to login' });
        }

        User.comparePassword(password, user.password, (err, isMatch) => {
            if (err) throw err;
            if (isMatch) {
                const token = jwt.sign(user.toJSON(), config.secret, {
                    expiresIn: 604800 // 1 week in seconds
                });
                // req.flash('successfully logged in');
                res.json({
                    success: true,
                    token: 'JWT ' + token,
                    user: {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        profileName: user.profileName
                    }
                });
            } else {
                return res.json({ success: false, msg: 'Invalid email/password' });
            }
        });
    });
});

router.get('/2fa', (req, res, next) => {

});

router.get('/2fa', (req, res, next) => {

});

// Profile
router.get('/profile', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    res.json({ user: req.user });
});

module.exports = router;
