const http = require('http');
const { Server } = require('socket.io');

const app = require('./app');

const server = http.createServer(app);

const io = new Server(server);

const port = process.env.PORT || 3001;

io.on('connection', () => { console.log('foi'); });

server.listen(port, () => console.log(`Api rodando na porta ${port}`));
