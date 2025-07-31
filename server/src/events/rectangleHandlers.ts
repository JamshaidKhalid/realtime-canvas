import { Server, Socket } from 'socket.io';

export const registerRectangleHandlers = (io: Server, socket: Socket) => {
  socket.on('rectangle:add', (data) => {
    console.log(`🟩 rectangle:add from ${socket.id}`, data);
    socket.broadcast.emit('rectangle:add', data);
  });

  socket.on('rectangle:move', (data) => {
    console.log(`↔️ rectangle:move from ${socket.id}`, data);
    socket.broadcast.emit('rectangle:move', data);
  });
};
