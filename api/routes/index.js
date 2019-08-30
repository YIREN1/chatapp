const express = require('express');
const path = require('path');
const cors = require('cors');
const passport = require('passport');
const cookieParser = require('cookie-parser');

const routes = express.Router();

const users = require('./users');
const reCaptcha = require('./reCaptcha');
const email = require('./email');
const uploads = require('./uploads');
const authy = require('./authy');
const channels = require('./channels');
const messages = require('./messages');

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
routes.use('/', [channels, messages]);

routes.get('/status/health', (req, res) => {
  res.send('GOOD');
});

// If the app uses the Angular router, you must configure
// the server to return the application's host page (index.html)
// when asked for a file that it does not have.
routes.get('*', (req, res) => {
  res.sendFile('index.html', { root: path.join(__dirname, '../../public') });
});

// should never get here
routes.use((req, res, next) => {
  res.status(404).end('404 not found');
});

// routes.use((error, req, res, next) => {
//   res.status(error.statusCode || 500).json({ error: error.message });
// });

module.exports = routes;
