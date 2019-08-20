const express = require('express');
const routes = require('./routes/index');

const app = express();

//  Connect all our routes to our application
app.use('/', routes);

// Port Number
const port = process.env.PORT || 5000;

// Start Server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
