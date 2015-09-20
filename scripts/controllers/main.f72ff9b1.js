'use strict';

/**
 * @ngdoc function
 * @name flixstockApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the flixstockApp
 */
angular
  .module('flixstockApp')
  .controller('MainCtrl', ['$scope', '$location', '$anchorScroll', '$interval',
          function($scope, $location, $anchorScroll, $interval) {
    $scope.slides = [
	    {
        title: 'Clothes that match.',
	    }
    ];

    $scope.gotoSolution = function(){
      $location.hash('solution');
      $anchorScroll();
    };

  }])
