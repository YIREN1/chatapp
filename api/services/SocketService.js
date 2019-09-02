const socketIo = require('socket.io');
const channelService = require('../services/ChannelService');
const messageService = require('../services/MessageService');

const socketServiceInit = server => {
  const io = socketIo(server);
  console.log('init socket service');

  io.on('connection', async socket => {
    console.log('a user connected');

    socket.on('init', async userId => {
      const channels = await channelService.getChannels(userId);

      channels.forEach(channel => {
        socket.join(channel._id); // ! fix this
      });
      socket.join(userId, () => {
        // const rooms = Object.keys(socket.rooms);
        // console.log(rooms);
      });
    });

    socket.on('first-direct-message', message => {
      const { userId, channelId } = message;
      socket.emit('first-direct-message', channelId);
      socket.to(userId).emit('first-direct-message', channelId);
    });

    socket.on('message', async message => {
      if (!message.userId) {
        message.userId = message.user.id;
      }
      const createdMessage = await messageService.createMessageView(message);

      io.in(message.channelId).emit('message', createdMessage);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('started-typing', message => {
      const { user, channelId } = message;
      socket.to(channelId).emit('started-typing', { user, channelId });
    });

    socket.on('stopped-typing', message => {
      const { user, channelId } = message;
      socket.to(channelId).emit('stopped-typing', { user, channelId });
    });

    socket.on('join', async channelId => {
      socket.join(channelId);
    });

    socket.on('leave', async channelId => {
      socket.leave(channelId);
    });
  });
};

module.exports = {
  socketServiceInit,
};
