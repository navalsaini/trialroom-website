'use strict';

/**
 * @ngdoc function
 * @name flixstockApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the flixstockApp
 */
angular.module('flixstockApp')
  .controller('AboutCrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
