'use strict';

angular
  .module('flixstockApp')
  .factory('navService', function($timeout){
    var $navScope;

    return {
      registerHandlers: function(_$navScope){
        $navScope = _$navScope;
      },
      show: function(){
        $timeout(function(){
          $navScope.$emit('show');
        }, 0, false);
      },
      hide: function(){
        $timeout(function(){
          $navScope.$emit('hide');
        }, 0, false);
      }
    };
  });
