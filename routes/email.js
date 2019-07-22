const express = require('express');

const User = require('../models/user');
const EmailService = require('../broker/EmailService.js');

const router = express.Router();

router.post('/resend', (req, res) => {
  const { email } = req.body;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({
        success: false,
        msg: 'Please input correct email, did you register',
      });
    }

    if (user.confirmed) {
      return res.json({
        success: false,
        msg: 'Already confirmed',
      });
    }

    try {
      EmailService.sendConfirmEmail(user);
    } catch (error) {
      console.error(error);
    }
    return res.json({ success: true, msg: 'Email resend' });
  });
});

module.exports = router;
