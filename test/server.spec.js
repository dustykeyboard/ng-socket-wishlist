var should = require('should');
var io = require('socket.io-client');

var socketURL = 'http://0.0.0.0:3000';

var options = {
  transports: ['websocket'],
  'force new connection': true
};

describe('Chat Server', function() {
  it('Broadcasts count of connected users', function(done) {
    var client1 = io.connect(socketURL, options);

    client1.on('connect', () => {
      var client2 = io.connect(socketURL, options);

      client2.on('connect', () => {
        client2.on('connections', function(connections) {
          connections.should.equal(2);
          client2.disconnect();
          done();
        });
      });
    });
  });
});
