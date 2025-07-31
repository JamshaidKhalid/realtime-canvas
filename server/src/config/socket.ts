import { Server as SocketIOServer } from 'socket.io';
import { Server as HTTPServer } from 'http';
import { registerRectangleHandlers } from '../events/rectangleHandlers';

let io: SocketIOServer;

export const initSocket = (server: HTTPServer) => {
  io = new SocketIOServer(server, {
    cors: {
      origin: '*', // Adjust this in production
      methods: ['GET', 'POST'],
    },
  });

  io.on('connection', (socket) => {
    console.log(`🔌 New client connected: ${socket.id}`);

    registerRectangleHandlers(io, socket);

    socket.on('disconnect', () => {
      console.log(`Client disconnected: ${socket.id}`);
    });
  });
};

export const getIO = () => io;
