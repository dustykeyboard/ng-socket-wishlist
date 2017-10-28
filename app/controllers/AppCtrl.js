'use strict';

AppCtrl.$inject = ['SocketService'];
function AppCtrl($scope) {
  $scope.appName = 'GiftsApp';
  $scope.connections = 0;

  $scope.on('connections', connections => {
    console.log('connections', connections);
    $scope.connections = connections;
  });
}

module.exports = AppCtrl;
