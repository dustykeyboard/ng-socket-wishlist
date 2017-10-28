'use strict';

var angular = require('angular');

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
