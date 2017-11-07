'use strict';

var angular = require('angular');

angular.module('giftsApp').component('itemsComponent', {
  template: `
    <h2>{{title}} (lists)</h2>
    <ul>
      <li ng-repeat='item in items'>{{list.name}}</li>
      <form ng-submit="addItem()">
        <input type='text' placeholder='New item' ng-model='newItemName' />
      </form>
    </ul>
  `,
  controller: 'ItemsController'
});
