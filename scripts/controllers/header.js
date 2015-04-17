'use strict';

angular
  .module('flixstockApp')
  .controller('HeaderCtrl',  ['$scope', '$location', 'navService',
          function ($scope, $location, navService) {

      $scope.isActive = function (page) {
        var currentRoute = $location.path().substring(1) || 'home';
        return page === currentRoute ? 'active' : '';
      };

      $scope.navClass = function (page){
        var currentRoute = $location.path().substring(1) || 'home';
        return currentRoute;
      };

      // register navService as a service

      var isHidden = false;
      $scope.$on('show', function() {
        $scope.$apply(function(){
          isHidden = false;
        });
      });
      $scope.$on('hide', function() {
        $scope.$apply(function(){
          isHidden = true;
        });
      });
      navService.registerHandlers($scope);

      $scope.getHidden = function(){
        return isHidden ? "hidden" : "";
      };

  }]);
