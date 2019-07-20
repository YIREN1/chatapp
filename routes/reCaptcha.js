const express = require('express');
const router = express.Router();
const request = require('request');

router.use(function (req, res, next) {
  if (!req.body.token) {
    return res.json({ success: false, msg: 'The request is invalid or malformed. Please select captcha' });
  }
  next();
})

router.post('/v3/subscribe', async (req, res) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY_V3;
  const token = req.body.token;
  const remoteAddress = req.body.remoteAddress;
  sendReqToReCaptcha(secretKey, token, remoteAddress);
});

router.post('/v2/subscribe', async (req, res) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY_V2;
  const token = req.body.token;
  const remoteAddress = req.body.remoteAddress;
  sendReqToReCaptcha(secretKey, token, remoteAddress, res);
});

const sendReqToReCaptcha = (secretKey, token, remoteAddress, res) => {
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${remoteAddress}`;

  request(verifyUrl, (err, response, body) => {
    if (err) {
      return res.json({ success: false, msg: 'Error during verifying' });
    }

    body = JSON.parse(body);
    console.log(body);
    if (!body.success) {
      return res.json({ success: false, msg: 'Failed reCaptcha verification' });
    }

    return res.json({ success: true, msg: 'reCaptcha passed' });
  });
}

module.exports = router;