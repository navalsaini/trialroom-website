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
  .controller('SolutionCtrl', ['$scope', '$location', '$anchorScroll', '$timeout',
        function($scope, $location, $anchorScroll, $timeout) {

    // $scope.variable does not work with fullpage directive.
    // I wasted half a day trying to randomly make it work.
    // Maybe because I need to implement it properly.
    // $scope.solution = [
    // ];
  }]);
