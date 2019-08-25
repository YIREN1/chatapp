const socketIo = require('socket.io');

const socketServiceInit = server => {
  const io = socketIo(server);
  console.log('init socket service');

  io.on('connection', socket => {
    console.log('a user connected');
    socket.on('message', msg => {
      // console.log('[server](message): %s', JSON.stringify(msg));
      io.emit('message', msg);
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected');
    });
  });
};

module.exports = {
  socketServiceInit,
};
