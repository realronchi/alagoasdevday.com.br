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
    'ngTouch',
    'duScroll'
  ])
  .value('duScrollDuration', 2000)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
