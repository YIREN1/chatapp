const mongoose = require('mongoose');

const message = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  channelId: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    // required: true,
  },
  replyMessages: {
    type: Array,
    default: [],
  },
  text: {
    type: String,
  },
  files: {
    type: Array,
  },
  type: {
    type: String,
  },
  reply: {
    type: Boolean,
  },
  quote: {
    type: String,
  },
});

module.exports = mongoose.model('message', message);
