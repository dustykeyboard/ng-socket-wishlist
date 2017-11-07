'use strict';

var angular = require('angular');

angular.module('giftsApp').component('listsComponent', {
  template: `
    <h2>{{title}}</h2>
    <ul>
      <li ng-repeat='(index, list) in lists' ng-click='select(index, list)'>{{list.name}}</li>
      <form ng-submit="createList()">
        <input type='text' placeholder='Create a list' ng-model='newListName' />
      </form>
    </ul>

    <items-component></items-component>
  `,
  controller: 'ListsController'
});
