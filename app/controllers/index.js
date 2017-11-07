'use strict';

var angular = require('angular');

angular
  .module('giftsApp')
  .controller('AppController', [
    '$scope',
    'SocketService',
    require('./AppController')
  ]);

angular
  .module('giftsApp')
  .controller('ListsController', [
    '$scope',
    'SocketService',
    require('./ListsController')
  ]);

angular
  .module('giftsApp')
  .controller('ItemsController', [
    '$scope',
    'SocketService',
    require('./ItemsController')
  ]);
