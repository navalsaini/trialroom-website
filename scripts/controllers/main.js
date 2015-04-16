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
  .controller('MainCtrl', ['$scope', '$location', '$anchorScroll', function($scope, $location, $anchorScroll) {
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

    $scope.gotoBenefits = function(){
      $location.hash('benefits');
      $anchorScroll();
    };
  }]);
