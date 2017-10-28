'use strict';

AppController.$inject = ['SocketService'];
function AppController($scope, SocketService) {
  $scope.appName = 'GiftsApp';
  $scope.connections = 0;

  SocketService.on('connections', connections => {
    console.log('connections', connections);
    $scope.connections = connections;
  });
}

module.exports = AppController;
