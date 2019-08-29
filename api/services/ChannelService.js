const ChannelModel = require('../models/channel');

const ChannelService = {};

ChannelService.getChannelsUserIsIn = async userId => {
  const channels = await ChannelModel.find({ usersInChannel: userId });
  return channels.map(channel => channel.id);
};

ChannelService.createChannel = async (userId, name, type, usersInChannel) => {
  const fingerprint = Buffer.from(
    name
      .split('')
      .sort()
      .join(''),
  ).toString('base64');
  const channel = await ChannelModel.findOne({ fingerprint });

  if (!channel) {
    return new ChannelModel({
      name,
      fingerprint,
      type,
      usersInChannel,
    }).save();
  }

  const isInChannel = channel.usersInChannel.find(id => id === userId);

  if (isInChannel) return channel;

  channel.usersInChannel.push(userId);

  return channel.save();
};

ChannelService.getChannel = channelId => {
  return ChannelModel.findById(channelId);
};

ChannelService.getChannelByName = name => {
  return ChannelModel.findOne({ name });
};

ChannelService.joinChannel = async (userId, channelId) => {
  const channel = await ChannelModel.findById(channelId);
  if (!userId) {
    return channel;
  }
  const isInChannel = channel.usersInChannel.find(id => id === userId);

  if (isInChannel) return channel;

  channel.usersInChannel.push(userId);

  return channel.save();
};

ChannelService.leaveChannel = async (userId, channelId) => {
  const channel = await ChannelModel.findById(channelId);
  const users = channel.usersInChannel.filter(id => id !== userId);

  channel.usersInChannel = users;

  return channel.save();
};

ChannelService.getChannels = userId => {
  return ChannelModel.find({ usersInChannel: userId });
};

ChannelService.getPublicChannels = () => {
  return ChannelModel.find({ type: 'channel' });
};

module.exports = ChannelService;
