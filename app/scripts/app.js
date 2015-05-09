'use strict';

/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # storeApp
 *
 * Main module of the application.
 */
angular
    .module('storeApp', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch'
    ])
    .config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/store', {
                templateUrl: 'views/store.html',
                controller: 'StoreCtrl'
            })
            .when('/category', {
                templateUrl: 'views/category.html',
                controller: 'CategoryCtrl'
            })
            .when('/product', {
                templateUrl: 'views/product.html',
                controller: 'ProductCtrl'
            })
            .when('/cart', {
                templateUrl: 'views/cart.html',
                controller: 'CartCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
