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
