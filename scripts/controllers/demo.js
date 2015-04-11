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
  .controller('DemoCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.tests = [
    {
      img: 'images/turing/flix/pic001_tshirt.jpg',
      flix: true
    },{
      img: 'images/turing/flix/pic002_jersey.jpg',
      flix: true
    },{
      img: 'images/turing/flix/pic003_hood.jpg',
      flix: true
    },{
      img: 'images/turing/flix/pic004_billabongfront.jpg',
      flix: true
    },{
      img: 'images/turing/flix/pic005_giants.jpg',
      flix: true
    },{
      img: 'images/turing/flix/pic006_cardinal.jpg',
      flix: true
    },{
      img: 'images/turing/orig/pic001.jpg',
      flix: false
    },{
      img: 'images/turing/orig/pic002.jpg',
      flix: false
    },{
      img: 'images/turing/orig/pic003.jpg',
      flix: false
    }];
  }]);
