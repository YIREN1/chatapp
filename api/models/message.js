const mongoose = require('mongoose');

const message = new mongoose.Schema({
  userId: { type: String, required: true },
  channelId: { type: String, required: true },
  date: { type: Date, required: true },
  replyMessages: { type: Array, default: [] },
  text: { type: String, required: true },
});

module.exports = mongoose.model('message', message);
