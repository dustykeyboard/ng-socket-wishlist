var assert = require('assert');
var io = require('socket.io-client');

var server = require('./index');

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
          assert.equal(connections, 2);
          client1.disconnect();
          client2.disconnect();
          done();
        });
      });
    });
  });

  it('Creates and Broadcasts lists', function(done) {
    var testListName = 'test list name';
    var testList = { name: testListName };
    var expectedResponse = [{ name: testListName, items: [] }];
    var client4 = io.connect(socketURL, options);
    client4.on('connect', () => {
      client4.emit('createList', testList);
      client4.on('lists', data => {
        assert.deepEqual(data, []);
        client4.disconnect();

        var client5 = io.connect(socketURL, options);
        client5.on('connect', () => {
          client5.on('lists', data => {
            assert.deepEqual(data, expectedResponse);
            client5.disconnect();
            done();
          });
        });
      });
    });
  });
});
