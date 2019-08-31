const socketIo = require('socket.io');
const channelService = require('../services/ChannelService');
const messageService = require('../services/MessageService');

const socketServiceInit = server => {
  const io = socketIo(server);
  console.log('init socket service');

  io.on('connection', async socket => {
    socket.on('init', async userId => {
      socket.join(userId);
      const channels = await channelService.getChannels(userId);

      channels.forEach(channel => {
        socket.join(channel.id);
      });
    });
    console.log('a user connected');

    socket.on('first-direct-message', message => {
      const { userId, channelId } = message;
      socket.to(userId).emit('first-direct-message', channelId);
    });
    // socket.on('message', msg => {
    //   // console.log('[server](message): %s', JSON.stringify(msg));
    //   io.emit('message', msg);
    // });
    socket.on('message', async message => {
      if (!message.userId) {
        message.userId = message.user.id;
      }
      // const createdAt = Date.now();
      const createdMessage = await messageService.createMessageView(message);

      // await searchService.saveMessage(createdMessage);
      // socket.emit('message', createdMessage);
      // socket.to(channelId).send(createdMessage);

      socket.emit('message', createdMessage);
      socket.to(message.channelId).send(createdMessage);
      // io.emit('message', createdMessage);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });

    socket.on('started-typing', message => {
      const { user, channelId } = message;
      io.emit('started-typing', { user, channelId });
    });

    socket.on('stopped-typing', message => {
      const { user, channelId } = message;
      socket.to(channelId).emit('stopped-typing', { user, channelId });
    });
    socket.on('joined', msg => {
      // console.log('[server](message): %s', JSON.stringify(msg));
      io.emit('joined', msg);
    });
  });
};

module.exports = {
  socketServiceInit,
};
