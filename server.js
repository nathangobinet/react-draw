const http = require('http');
const { Server } = require('socket.io');

const hostname = '127.0.0.1';
const port = 3004;

const server = http.createServer();
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3445",
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on('engine', (data) => {
    socket.broadcast.emit('engine', data);
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

