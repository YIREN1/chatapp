const express = require('express');

const API_KEY = process.env.AUTHY_API_KEY;
const authy = require('authy')(API_KEY);

const router = express.Router();

router.get('/status', (req, res) => {
  // or body
  authy.check_approval_status(req.header('authyToken'), (err, authResponse) => {
    if (err) {
      console.error(err);
      res.status(400).send('Bad Request.');
    } else {
      if (authResponse.approval_request.status === 'approved') {
        console.log('approved');
      }
      res.status(200).send({ status: authResponse.approval_request.status });
    }
  });
});

module.exports = router;
