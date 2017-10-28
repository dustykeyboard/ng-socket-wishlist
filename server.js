var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

var clients = {};

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  console.log(`connected (${socket.id})`);

  clients[socket.id] = {
    socket
  };

  console.log('connections', Object.keys(clients).length);
  io.sockets.emit('connections', Object.keys(clients).length);

  socket.on('disconnect', () => {
    console.log(`disconnected (${socket.id})`);
    console.log('connections', Object.keys(clients).length);
    delete clients[socket.id];
  });
});

http.listen(port, function() {
  console.log('listening on *:' + port);
});
