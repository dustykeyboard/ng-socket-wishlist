'use strict';

var assert = require('assert');
var ngMock = require('angular-mocks');

describe('ListsController', function() {
  beforeEach(module('giftsApp'));

  it(
    'should initialise a ListsController',
    inject(function($controller) {
      var scope = {};
      $controller('ListsController', { $scope: scope });
      assert.deepEqual(scope, {
        title: 'Lists',
        lists: [],
        newListName: ''
      });
    })
  );
});
