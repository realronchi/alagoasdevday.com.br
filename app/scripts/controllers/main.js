'use strict';

/**
 * @ngdoc function
 * @name alagoasdevdaycombrApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the alagoasdevdaycombrApp
 */
var app = angular.module('alagoasdevdaycombrApp', ['ngResource']);
var baseURL = 'http://admin.alagoasdevday.com.br/api/v1/:action';

app.controller('MainCtrl', function () {
});

/**
 * @ngdoc function
 * @name alagoasdevdaycombrApp.controller:SpeakersCtrl
 * @description
 * # SpeakersCtrl
 * Controller of the alagoasdevdaycombrApp
 */
app.controller('SpeakersCtrl', function ($scope, $resource) {
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
});

/**
 * @ngdoc function
 * @name alagoasdevdaycombrApp.controller:SponsorsCtrl
 * @description
 * # SponsorsCtrl
 * Controller of the alagoasdevdaycombrApp
 */
app.controller('SponsorsCtrl', function ($scope, $resource) {

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

