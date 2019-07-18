const mongoose = require('mongoose');
const config = require('../config/database');

mongoose.set('useCreateIndex', true);
// Connect To Database
mongoose.connect(config.database, { useNewUrlParser: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database');
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: ' + err);
});