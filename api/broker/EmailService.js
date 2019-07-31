const nodemailer = require('nodemailer');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const EmailSecret = process.env.EMAIL_CONFIRM_SECRET;

const transporter = nodemailer.createTransport({
  pool: true,
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_ACCOUNT, // generated ethereal user
    pass: process.env.EMAIL_PASSWORD, // generated ethereal password
  },
});

const date = new Date();

const sendPlainEmail = (recipient, data, url = 'google.com') => {
  const defaultD = `<h1>Hi Yi👻</h1><p>${date}</p> 
  <img src="http://pages.litmus.com/l/31032/2017-02-07/bppnlg/31032/107149/litmuslive_tix.png" width="167" height="167" alt="" style="display: block; margin: 0 auto; padding: 0;" class="fadeimg" border="0" />`;
  const htmlData = data || defaultD;

  const mailOptions = {
    from: '"Fred Foo 👻" <norepltop@outlook.com>',
    // if want to change this 'from', go to http://tiny.cc/sagu9y
    // and add a email
    to: recipient.email,
    subject: 'confirm email',
    text: `please confirm your email`,
    html: `Hi, ${recipient.name}. Please click this email to confirm your email: <a href="${url}">${url}</a>
    ${htmlData}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
const sendEmail = async (recipient, url) => {
  const path = `${__dirname}/../public/assets/template.html`;

  fs.readFile(path, 'utf8', (err, data) => {
    if (err) console.error(err);

    try {
      sendPlainEmail(recipient, data, url);
    } catch (error) {
      console.error(error);
    }
  });
};

const sendConfirmEmail = user => {
  jwt.sign(
    {
      user: _.pick(user, 'id'),
    },
    EmailSecret,
    {
      expiresIn: '1d',
    },
    (error, emailToken) => {
      const url = `http://localhost:3050/api/users/confirmation/${emailToken}`;
      sendEmail(user, url);
    },
  );
};

module.exports = {
  sendConfirmEmail,
};
