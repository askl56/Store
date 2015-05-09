'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:StoreCtrl
 * @description
 * # StoreCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('StoreCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
