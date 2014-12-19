'use strict';

/**
 * @ngdoc overview
 * @name alagoasdevdaycombrApp
 * @description
 * # alagoasdevdaycombrApp
 *
 * Main module of the application.
 */
angular
  .module('alagoasdevdaycombrApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
