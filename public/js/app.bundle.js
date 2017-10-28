webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* app.js */



var angular = __webpack_require__(4);
angular.module('giftsApp', []);

__webpack_require__(24);
__webpack_require__(49);
__webpack_require__(54);


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(4);

angular.module('giftsApp').factory('SocketService', __webpack_require__(25));


/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var io = __webpack_require__(10);

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


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(4);

angular
  .module('giftsApp')
  .controller('AppController', [
    '$scope',
    'SocketService',
    __webpack_require__(52)
  ]);

angular
  .module('giftsApp')
  .controller('ListsController', [
    '$scope',
    'SocketService',
    __webpack_require__(53)
  ]);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ }),

/***/ 54:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(55);


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var angular = __webpack_require__(4);

angular.module('giftsApp').component('listsComponent', {
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li ng-repeat='list in lists'>{{list.name}}</li>
      <form ng-submit="createList()">
        <input type='text' placeholder='Create a list' ng-model='newListName' />
      </form>
    </ul>
  `,
  controller: 'ListsController'
});


/***/ })

},[22]);