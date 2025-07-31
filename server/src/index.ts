import { createServer } from './server';

const PORT = process.env.PORT || 4000;
const server = createServer();

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
