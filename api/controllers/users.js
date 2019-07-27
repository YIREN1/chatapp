const jwt = require('jsonwebtoken');

const config = require('../config/database');

const signToken = user => {
  return jwt.sign(user.toJSON(), config.secret, {
    expiresIn: 604800, // 1 week in seconds
  });
};

module.exports = {};
