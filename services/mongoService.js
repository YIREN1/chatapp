const mongoose = require('mongoose');

const dbConfig = require('../config/database');

const mongooseInit = () => {
  mongoose.set('useCreateIndex', true);
  // Connect To Database
  mongoose.connect(dbConfig.database, { useNewUrlParser: true });

  // On Connection
  mongoose.connection.on('connected', () => {
    console.log('Connected to database');
  });

  // On Error
  mongoose.connection.on('error', err => {
    console.log(`Database error: ${err}`);
  });
};

module.exports = {
  mongooseInit,
};
