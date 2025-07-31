import express from 'express';
import http from 'http';
import cors from 'cors';
import { initSocket } from './config/socket';

export const createServer = () => {
  const app = express();
  const server = http.createServer(app);

  app.use(cors());

  app.get('/', (_, res) => res.send('Realtime Canvas Server Running'));

  initSocket(server);

  return server;
};
