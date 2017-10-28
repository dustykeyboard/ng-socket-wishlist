'use strict';

AppCtrl.$inject = ['SocketService'];
function AppCtrl($scope, SocketService) {
  $scope.appName = 'GiftsApp';
  $scope.connections = 0;

  SocketService.on('connections', connections => {
    console.log('connections', connections);
    $scope.connections = connections;
  });
}

module.exports = AppCtrl;
