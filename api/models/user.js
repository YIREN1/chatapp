const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
const UserSchema = mongoose.Schema({
  method: {
    type: [String],
    // eslint-disable-next-line comma-dangle
    enum: ['local', 'google', 'facebook'],
    required: true,
  },
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  profileName: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  confirmed: {
    type: Boolean,
    defaultValue: false,
  },
  phone: {
    type: String,
  },
  google: {
    id: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
    },
  },
  facebook: {
    id: {
      type: String,
    },
    email: {
      type: String,
      lowercase: true,
    },
  },
});

const User = mongoose.model('User', UserSchema);
module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = (id, callback) => {
  User.findById(id, callback);
};

module.exports.getUserByPhone = (phone, callback) => {
  const query = { phone };
  User.findOne(query, callback);
};

module.exports.getUserByEmail = (email, callback) => {
  const query = { email };
  User.findOne(query, callback);
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch);
  });
};

module.exports.addUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (error, hash) => {
      if (error) throw err;
      const newUserSave = newUser;
      newUserSave.password = hash;
      newUserSave.save(callback);
    });
  });
};
// TODO
module.exports.updateUser = (newUser, callback) => {
  newUser.save(callback);
};
