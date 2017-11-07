'use strict';

ListsController.$inject = ['SocketService'];
function ListsController($scope, SocketService) {
  $scope.title = 'Lists';
  $scope.lists = [];
  $scope.selectedIndex = null;
  $scope.newListName = '';

  $scope.createList = () => {
    SocketService.emit('createList', { name: $scope.newListName });
    $scope.newListName = '';
  };

  $scope.select = (index, list) => {
    console.log('ListsController.select', {index, list})
    $scope.selectedIndex = index
  }

  $scope.selected = () => $scope.lists[$scope.selectedIndex]

  SocketService.on('lists', lists => {
    console.log('lists', lists);
    $scope.lists = lists;
  });
}

module.exports = ListsController;
