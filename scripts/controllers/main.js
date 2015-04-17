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
        title: 'Product photography made simple',
        description: 'Learn about an algorithm that converts mannequin photoshots into model photoshots.'
      },{
        title: 'Improve sales',
        description: 'Switch models on images to increase the appeal in your target audiences.'
      },{
        title: 'Reduce costs',
        description: 'You will never need to hire a model or a high-end photographer again.'
	    }
    ];

    $scope.gotoSolution = function(){
      $location.hash('solution');
      $anchorScroll();
    };

    $scope.images = [
      "images/solution/model1.jpg",
      "images/solution/model2.jpg",
      "images/solution/model3.jpg"
    ];

    $scope.garment = "images/solution/garment1.png";
  }]);
