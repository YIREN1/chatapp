const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

const EmailSecret = process.env.EMAIL_CONFIRM_SECRET;

// const transporter = nodemailer.createTransport({
//   pool: true,
//   host: 'smtp-mail.outlook.com',
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: process.env.EMAIL_ACCOUNT, // generated ethereal user
//     pass: process.env.EMAIL_PASSWORD, // generated ethereal password
//   },
// });

// https://mailtrap.io/inboxes/679070/messages
const transporter = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: 'bf50416c67a203',
    pass: '86199e5f4f56b3',
  },
});

const handlebarsOptions = {
  viewEngine: {
    partialsDir: path.resolve(__dirname, '../templates'),
    defaultLayout: false,
  },
  viewPath: path.resolve(__dirname, '../templates'),
  extName: '.html',
};

transporter.use('compile', hbs(handlebarsOptions));

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
  const templatePath = `${__dirname}/../views/emailTemplate.html`;

  fs.readFile(templatePath, 'utf8', (err, data) => {
    if (err) console.error(err);

    try {
      sendPlainEmail(recipient, data, url);
    } catch (error) {
      console.error(error);
    }
  });
};

const sendEmailWithTemplate = async emailData =>
  new Promise((resolve, reject) => {
    const mailOptions = emailData;
    mailOptions.from = '"Fred Foo 👻" <norepltop@outlook.com>';
    return transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(`Email sent: ${info.response}`);
        resolve();
      }
    });
  });

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
      const url = `${process.env.BASE_URL}/users/confirmation/${emailToken}`;
      sendEmail(user, url);
    },
  );
};

module.exports = {
  sendConfirmEmail,
  sendEmailWithTemplate,
};
