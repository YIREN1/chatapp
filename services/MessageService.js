const MessageModel = require('../models/message');
const userService = require('../services/UserService');
const MessageView = require('../presentations/MessageView');

const MessageService = {};

MessageService.deleteMessage = async (userId, messageId) => {
  const message = await MessageModel.findOne({ _id: messageId, userId });
  const update = await message.delete();
  const user = await userService.getUser(userId);
  return MessageView(update, user);
};

MessageService.updateMessage = async (userId, messageId, text) => {
  const message = await MessageModel.findOne({ _id: messageId, userId });
  message.text = text;
  const update = await message.save();
  const user = await userService.getUser(userId);
  return MessageView(update, user);
};

MessageService.createMessageView = async message => {
  const rawMessage = await MessageService.createMessage(message);
  const user = await userService.getUser(message.userId);
  return MessageView(rawMessage, user);
};

MessageService.getMessageViews = async channelId => {
  const messages = await MessageService.getMessages(channelId);
  const userIds = messages.map(message => message.userId);
  const users = await userService.getUsers(userIds);

  return messages.map(message => {
    const targetUser = users.find(user => user.id === message.userId);
    return MessageView(message, targetUser);
  });
};

MessageService.createMessage = message => {
  return new MessageModel(message).save();
};

MessageService.getMessageView = async messageId => {
  const message = await MessageService.getMessage(messageId);
  const user = await userService.getUser(message.userId);
  return MessageView(message, user);
};

MessageService.getMessageById = messageId => {
  return MessageModel.findById(messageId);
};

MessageService.getChannelMessages = channelId => {
  return MessageModel.find({ channelId });
};

MessageService.getMessage = messageId => {
  return MessageModel.findById(messageId);
};

MessageService.getMessages = channelId => {
  return MessageModel.find({ channelId });
};
module.exports = MessageService;
