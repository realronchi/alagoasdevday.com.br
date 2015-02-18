'use strict';

/**
 * @ngdoc function
 * @name alagoasdevdaycombrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alagoasdevdaycombrApp
 */
angular.module('alagoasdevdaycombrApp', ['ngResource'])
  .controller('MainCtrl', function ($scope, $resource) {
    var baseURL = 'http://admin.alagoasdevday.com.br/api/v1/:action';

    // get speakers
    $scope.speakers = $resource(
      baseURL,
      {
        action: 'speakers.json',
        callback: 'JSON_CALLBACK'
      },
      {
        get: {
          method: 'JSONP'
        }
      }
    );
    $scope.speakerResults = $scope.speakers.get();

    // get sponsors
    $scope.sponsors = $resource(
      baseURL,
      {
        action: 'sponsors.json',
        callback: 'JSON_CALLBACK'
      },
      {
        get: {
          method: 'JSONP'
        }
      }
    );
    $scope.sponsorResults = $scope.sponsors.get();
  });
