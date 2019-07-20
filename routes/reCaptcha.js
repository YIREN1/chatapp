const express = require('express');
const request = require('request');

const router = express.Router();

router.use((req, res, next) => {
  if (!req.body.token) {
    return res.json({
      success: false,
      msg: 'The request is invalid or malformed. Please select captcha',
    });
  }
  return next();
});

const sendReqToReCaptcha = (secretKey, token, remoteAddress, res) => {
  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${token}&remoteip=${remoteAddress}`;

  request(verifyUrl, (err, response, body) => {
    if (err) {
      return res.json({ success: false, msg: 'Error during verifying' });
    }

    const bodyObj = JSON.parse(body);
    console.log(bodyObj);
    if (!bodyObj.success) {
      return res.json({ success: false, msg: 'Failed reCaptcha verification' });
    }

    return res.json({ success: true, msg: 'reCaptcha passed' });
  });
};

router.post('/v3/subscribe', async (req, res) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY_V3;
  const { token } = req.body;
  const { remoteAddress } = req.body;
  sendReqToReCaptcha(secretKey, token, remoteAddress, res);
});

router.post('/v2/subscribe', async (req, res) => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY_V2;
  const { token } = req.body;
  const { remoteAddress } = req.body;
  sendReqToReCaptcha(secretKey, token, remoteAddress, res);
});

module.exports = router;
