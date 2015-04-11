'use strict';

angular
  .module('flixstockApp')
  .controller('HeaderCtrl',  ['$scope', '$location', function ($scope, $location) {
      $scope.isActive = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
      };
      $scope.navClass = function (page){
        var currentRoute = $location.path().substring(1) || 'home';
        return currentRoute;
      };
  }]);
