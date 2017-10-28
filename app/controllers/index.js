'use strict';

var angular = require('angular');

angular
  .module('giftsApp')
  .controller('AppCtrl', ['$scope', 'SocketService', require('./AppCtrl')]);
