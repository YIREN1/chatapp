const jwt = require('jsonwebtoken');

const jwtSecret = process.env.JWT_SECRET;

const signToken = user => {
  return jwt.sign(user.toJSON(), jwtSecret, {
    expiresIn: 604800, // 1 week in seconds
  });
};

module.exports = {};
