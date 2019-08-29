const UserModel = require('../models/user');

const UserService = {};

UserService.setLastVisitedChannel = async (userId, channelId) => {
  const user = await UserService.getUser(userId);
  user.lastVisitedChannel = channelId;
  return user.save();
};

UserService.createUser = name => {
  return new UserModel({ name }).save();
};

UserService.getUser = userId => {
  return UserModel.findById(userId);
};

UserService.getUsers = userIdArray => {
  return UserModel.find({ _id: { $in: userIdArray } });
};

module.exports = UserService;
