const ChannelModel = require('../models/channel');
const ChannelView = require('../presentations/ChannelView');

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

  if (isInChannel) return new ChannelView(channel);

  channel.usersInChannel.push(userId);

  const savedChannel = await channel.save();
  return new ChannelView(savedChannel);
};

ChannelService.getChannel = channelId => {
  return ChannelModel.findById(channelId);
};

ChannelService.getChannelView = async channelId => {
  const channel = await ChannelService.getChannel(channelId);
  return new ChannelView(channel);
};

ChannelService.getChannelByName = name => {
  return ChannelModel.findOne({ name });
};

ChannelService.joinChannel = async (userId, channelId) => {
  const channel = await ChannelModel.findById(channelId);
  if (!userId) {
    return new ChannelView(channel);
  }
  const isInChannel = channel.usersInChannel.find(id => id === userId);

  if (isInChannel) return new ChannelView(channel);

  channel.usersInChannel.push(userId);

  const savedChannel = await channel.save();
  return new ChannelView(savedChannel);
};

ChannelService.leaveChannel = async (userId, channelId) => {
  const channel = await ChannelModel.findById(channelId);
  const users = channel.usersInChannel.filter(id => id !== userId);

  channel.usersInChannel = users;

  return channel.save();
};

ChannelService.getChannels = async userId => {
  const channels = await ChannelModel.find({ usersInChannel: userId });
  return channels.map(channel => new ChannelView(channel));
};

ChannelService.getPublicChannels = async () => {
  const channels = await ChannelModel.find({ type: 'channel' });
  return channels.map(channel => new ChannelView(channel));
};

module.exports = ChannelService;
