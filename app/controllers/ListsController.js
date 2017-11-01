'use strict';

ListsController.$inject = ['SocketService'];
function ListsController($scope, SocketService) {
  $scope.title = 'Lists';
  $scope.lists = [];
  $scope.newListName = '';

  $scope.createList = () => {
    SocketService.emit('createList', { name: $scope.newListName });
    $scope.newListName = '';
  };

  SocketService.on('lists', lists => {
    console.log('lists', lists);
    $scope.lists = lists;
  });
}

module.exports = ListsController;
