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
        title: 'Product Photography Made Simple',
        description: 'We are an important part of your vision of selling online.'
      },{
        title: 'Improve sales with analytics',
        description: 'Change models in catalog images with click of a button.'
      },{
        title: 'Reduce costs with automation',
        description: 'Let cloud do most of the work of a photo-studio.'
	    }
    ];

    $scope.gotoBenefits = function(){
      $location.hash('benefits');
      $anchorScroll();
    };
  }]);
