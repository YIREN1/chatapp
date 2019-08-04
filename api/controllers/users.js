const jwt = require('jsonwebtoken');
const path = require('path');
const EmailService = require('../broker/EmailService');
const AuthyService = require('../broker/AuthyService');
const User = require('../models/user');

const jwtSecret = process.env.JWT_SECRET;
const EmailSecret = process.env.EMAIL_CONFIRM_SECRET;

const signToken = user => {
  const jwtUser = user;
  jwtUser.password = undefined;
  return jwt.sign(jwtUser.toJSON(), jwtSecret, {
    expiresIn: 604800, // 1 week in seconds
  });
};

const register = async (req, res) => {
  const { name, email, profileName, password, phone } = req.body;

  // Check if there is a user with the same email
  let foundUser = await User.findOne({ email });
  if (foundUser) {
    return res.status(403).json({ error: 'Email is already in use' });
  }

  // Is there a Google account with the same email?
  foundUser = await User.findOne({
    $or: [{ 'google.email': email }, { 'facebook.email': email }],
  });

  if (foundUser) {
    // Let's merge them?
    foundUser.methods.push('local');
    const localSettings = {
      email,
      password,
    };
    foundUser = Object.assign(foundUser, localSettings);
    await foundUser.save();

    return res
      .status(200)
      .json({ success: true, msg: 'Registration complete' });
  }

  const newUser = new User({
    methods: ['local'],
    name,
    email,
    profileName,
    password,
    confirmed: false,
    phone,
    // confirmations: {
    // 	tos: req.body.confirmations.tos,
    // 	email: req.body.confirmations.email
    // }
  });
  return User.addUser(newUser, (err, user) => {
    if (err) {
      console.log(err);
      res.json({ success: false, msg: 'Error: failed to register' });
    } else {
      try {
        EmailService.sendConfirmEmail(user);
      } catch (error) {
        console.error(error);
      }
      console.log('Registration complete');
      res.json({ success: true, msg: 'Registration complete' });
    }
  });
  // res.send('REGISTER');
};

const authenticate = (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  User.getUserByEmail(email, (err, user) => {
    if (err) throw err;
    if (!user) {
      return res.json({ success: false, msg: 'Invalid email or password' });
    }

    if (!user.confirmed) {
      try {
        EmailService.sendConfirmEmail(user);
      } catch (error) {
        console.error(error);
      }
      return res.json({
        success: false,
        msg: 'Please confirm your email to login, resending email',
      });
    }

    return User.comparePassword(password, user.password, (error, isMatch) => {
      if (error) throw err;
      if (isMatch) {
        return AuthyService.sendApprovalRequest(user).then(authyToken => {
          const token = signToken(user);
          return res.json({
            success: true,
            token: `JWT ${token}`,
            authyToken,
            user: {
              id: user._id,
              name: user.name,
              email: user.email,
              profileName: user.profileName,
            },
          });
        });
      }
      return res.json({ success: false, msg: 'Invalid email/password' });
    });
  });
};

const confirmEmail = async (req, res) => {
  try {
    const {
      user: { id },
    } = jwt.verify(req.params.token, EmailSecret);

    return User.getUserById(id, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ success: false, msg: 'Invalid email or password' });
      }
      const confirmedUser = user;
      confirmedUser.confirmed = true;
      confirmedUser.save();
      return res.send('Thank you for confirming your email');
    });
    //   await User.update({ confirmed: true }, { where: { id } }, (err, result) => {
    //     if (err) {
    //         console.error(err);
    //     } else {
    //         console.log(result);
    //         res.send('Thank you for confirming your email');
    //     }

    //   });

    //   return res.redirect(process.env.BASE_URL);
  } catch (e) {
    console.error(e);

    return res.send('error verifying email token, maybe expired');
  }
};

const googleAuth = (req, res) => {
  const token = `JWT ${signToken(req.user)}`;
  res.status(200).json({ token });
};

const linkGoogle = (req, res) => {
  res.json({
    success: true,
    methods: req.user.methods,
    message: 'Successfully linked account with Google',
  });
};

const unlinkGoogle = async (req, res) => {
  // Delete Google sub-object
  if (req.user.google) {
    req.user.google = undefined;
  }
  // Remove 'google' from methods array
  const googleStrPos = req.user.methods.indexOf('google');
  if (googleStrPos >= 0) {
    req.user.methods.splice(googleStrPos, 1);
  }
  await req.user.save();

  // Return something?
  res.json({
    success: true,
    methods: req.user.methods,
    message: 'Successfully unlinked account from Google',
  });
};

const getProfile = (req, res) => {
  console.log('I managed to get here!');
  res.json({ success: true });
};

const forgotPassword = async (req, res) => {
  const { email } = req.body;
  const reqUser = await User.findOne({ email });

  if (!reqUser) {
    return res.status(404).json({ success: false });
  }

  const token = await signToken(reqUser);

  const data = {
    to: email,
    template: 'forgot-password-email',
    subject: 'Password help has arrived!',
    context: {
      url: `http://localhost:5000/users/reset-password?token=${token}`,
      name: reqUser.name,
    },
  };
  try {
    EmailService.sendEmailWithTemplate(data);
    return res.json({
      message: 'Kindly check your email for further instructions',
      success: true,
    });
  } catch (e) {
    console.log(e, '111111');
    return res.status(500).json({ success: false });
  }
};

const renderResetPasswordTemplate = (req, res) => {
  try {
    const user = jwt.verify(req.query.token, jwtSecret);

    if (user) {
      return res.sendFile(path.resolve('../views/reset-password.html'));
    }
  } catch (error) {
    console.log(error);
    return res.status(401);
  }
};

const resetPassword = (req, res) => {
  const { user } = req;
  const { newPassword } = req.body;
  if (user) {
    user.password = newPassword;
    User.updatePassword(user, err => {
      if (err) {
        return res.status(422).send({
          message: err,
        });
      }
      const data = {
        to: user.email,
        template: 'reset-password-email',
        subject: 'Password Reset Confirmation',
        context: {
          name: user.name,
        },
      };

      try {
        EmailService.sendEmailWithTemplate(data);
        return res.json({
          message: 'password reset',
        });
      } catch (e) {
        return res.status(500).json({ success: false });
      }
    });
  }
  return res.status(400).send({
    message: 'Password reset token is invalid or has expired.',
  });
};

module.exports = {
  register,
  authenticate,
  confirmEmail,
  googleAuth,
  getProfile,
  linkGoogle,
  unlinkGoogle,
  forgotPassword,
  resetPassword,
  renderResetPasswordTemplate,
};
