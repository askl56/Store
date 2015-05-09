'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('ProductCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
