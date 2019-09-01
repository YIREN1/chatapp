class ChannelView {
  constructor(channel) {
    this.id = channel._id;
    this.name = channel.name;
    this.usersInChannel = channel.usersInChannel;
    this.fingerprint = channel.fingerprint;
    this.type = channel.type;
  }
}

module.exports = ChannelView;
