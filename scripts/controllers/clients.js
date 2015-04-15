'use strict';

/**
 * @ngdoc function
 * @img flixstockApp.controller:ClientsCtrl
 * @description
 * # MainCtrl
 * Controller of the flixstockApp
 */
angular
  .module('flixstockApp')
  .controller('ClientsCtrl', ['$scope', function($scope) {
    $scope.clients = [
	  {
        img: "Adasa.jpg" 
      },{
        img: "Stylebug.jpg"
      },{
        img: "Fanatics.jpg"
	  },{
        img: "Navabi.png"
      },{
        img: "CoutureCandy.jpg"
      }
    ];
  }]);
