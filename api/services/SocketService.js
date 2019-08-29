const socketIo = require('socket.io');
// const channelService = require('../services/ChannelService');
const messageService = require('../services/MessageService');

const socketServiceInit = server => {
  const io = socketIo(server);
  console.log('init socket service');

  io.on('connection', socket => {
    console.log('a user connected');
    // socket.on('message', msg => {
    //   // console.log('[server](message): %s', JSON.stringify(msg));
    //   io.emit('message', msg);
    // });
    socket.on('message', async message => {
      const { userId, channelId, text, date } = message;
      // const createdAt = Date.now();
      const createdMessage = await messageService.createMessageView(
        userId,
        channelId,
        date,
        text,
      );

      // await searchService.saveMessage(createdMessage);
      socket.emit('message', createdMessage);
      socket.to(channelId).send(createdMessage);
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
  });
};

module.exports = {
  socketServiceInit,
};
