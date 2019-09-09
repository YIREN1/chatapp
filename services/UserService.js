const UserModel = require('../models/user');

const UserService = {};

UserService.setLastVisitedChannel = async (userId, channelId) => {
  const user = await UserService.getUser(userId);
  user.lastVisitedChannel = channelId;
  return user.save();
};

UserService.setUnreadMessages = async (userId, channelId, unreadMessages) => {
  const user = await this.getUser(userId);
  user.unreadMessages.set(channelId, unreadMessages);
  return user.save();
};

UserService.getUser = userId => {
  return UserModel.findById(userId);
};

UserService.getUsers = userIdArray => {
  return UserModel.find({ _id: { $in: userIdArray } });
};

UserService.getUsersInChat = () => {
  return UserModel.find({});
};

module.exports = UserService;
