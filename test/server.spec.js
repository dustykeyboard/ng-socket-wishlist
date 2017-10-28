var should = require('should');
var io = require('socket.io-client');

var server = require('../server');

var port = process.env.PORT || 8000;

var socketURL = `http://0.0.0.0:${port}`;

var options = {
  transports: ['websocket'],
  'force new connection': true
};

describe('Chat Server', function() {
  before(function() {
    server.listen(port);
  });

  after(function() {
    server.close();
  });

  it('Broadcasts count of connected users', function(done) {
    var client1 = io.connect(socketURL, options);

    client1.on('connect', () => {
      var client2 = io.connect(socketURL, options);

      client2.on('connect', () => {
        client2.on('connections', function(connections) {
          connections.should.equal(2);
          client1.disconnect();
          client2.disconnect();
          done();
        });
      });
    });
  });
});
