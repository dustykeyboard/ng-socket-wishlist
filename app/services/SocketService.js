'use strict';

var io = require('socket.io-client');

function SocketService($rootScope) {
  var socket = io.connect();
  return {
    id: () => socket.id,
    on: (eventName, callback) => {
      socket.on(eventName, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          callback.apply(socket, args);
        });
      });
    },
    emit: (eventName, data, callback) => {
      socket.emit(eventName, data, function() {
        var args = arguments;
        $rootScope.$apply(function() {
          if (callback) {
            callback.apply(socket, args);
          }
        });
      });
    }
  };
}

module.exports = SocketService;
