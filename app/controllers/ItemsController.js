'use strict';

ItemsController.$inject = ['SocketService'];
function ItemsController($scope, SocketService) {
  $scope.title = 'Items';
  $scope.items = [];
  $scope.newItemName = '';

  $scope.addItem = () => {
    SocketService.emit('addItem', { name: $scope.newItemName, done: false });
    $scope.newItemName = '';
  };

  SocketService.on('items', (list, items) => {
    console.log('items', items);
    $scope.items = items;
  });
}

module.exports = ItemsController;
