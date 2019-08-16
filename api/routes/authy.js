const express = require('express');
const jwt = require('jsonwebtoken');

const API_KEY = process.env.AUTHY_API_KEY;
const authy = require('authy')(API_KEY);
const User = require('../models/user');

const jwtSecret = process.env.JWT_SECRET;
const router = express.Router();

const signToken = user => {
  const jwtUser = user;
  jwtUser.password = undefined;
  return jwt.sign(jwtUser.toJSON(), jwtSecret, {
    expiresIn: 604800, // 1 week in seconds
  });
};

router.get('/status', (req, res) => {
  // or body
  authy.check_approval_status(req.header('authyToken'), (err, authResponse) => {
    if (err) {
      console.error(err);
      res.status(400).send('Bad Request.');
    } else {
      if (authResponse.approval_request.status === 'approved') {
        console.log('approved');
        const email = req.header('userEmail');
        return User.getUserByEmail(email, (error, user) => {
          if (error) throw error;
          if (!user) {
            return res.json({
              success: false,
              msg: 'no such user',
            });
          }
          const token = signToken(user);
          return res.status(200).send({
            status: 'approved',
            token,
            user: {
              id: user.id,
            },
          });
        });
      }
      return res
        .status(200)
        .send({ status: authResponse.approval_request.status });
    }
  });
});

module.exports = router;
