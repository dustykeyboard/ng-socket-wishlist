var express = require('express');
var app = express();
this.http = require('http').Server(app);
var io = require('socket.io')(this.http);

var clients = {};
var lists = [];

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

io.on('connection', socket => {
  clients[socket.id] = { socket };
  io.sockets.emit('connections', Object.keys(clients).length);

  socket.emit('lists', lists);

  socket.on('disconnect', () => {
    delete clients[socket.id];
    io.sockets.emit('connections', Object.keys(clients).length);
  });

  socket.on('createList', ({ name }) => {
    console.log('createList', name);
    lists.push({
      name,
      items: []
    });
    io.sockets.emit('lists', lists);
  });
});

exports.listen = function() {
  this.http.listen.apply(this.http, arguments);
};

exports.close = function(callback) {
  this.http.close(callback);
};
