const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const routes = express.Router();

require('../config/bootstrap');

const users = require('./users');
const reCaptcha = require('./reCaptcha');
const email = require('./email');
const uploads = require('./uploads');
const authy = require('./authy');

// CORS Middleware // ! origin?
routes.use(
  cors({
    credentials: true,
    origin: true,
  }),
);

routes.use(cookieParser());

// Set static files
routes.use(express.static(path.join(__dirname, '../../public')));

// Passport Middleware
routes.use(passport.initialize());
routes.use(passport.session());
require('../policies/passport')(passport);

// bodyParser Middleware
routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.use('/users', users);
routes.use('/reCaptcha', reCaptcha);
routes.use('/email', email);
routes.use('/uploads', uploads);
routes.use('/authy', authy);

// // Index Route
// app.get('/', (req, res) => {
//   res.send('Invalid Endpoint');
// });

routes.get('/status/health', (req, res) => {
  res.send('GOOD');
});

routes.get('*', (req, res) => {
  res.sendFile(__dirname, '../public/index.html');
});

module.exports = routes;
