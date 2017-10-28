webpackJsonp([0],{

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* app.js */



var angular = __webpack_require__(4);
angular.module('giftsApp', []);

__webpack_require__(24);
__webpack_require__(49);


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
  .controller('AppCtrl', ['$scope', 'SocketService', __webpack_require__(50)]);


/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


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


/***/ })

},[22]);