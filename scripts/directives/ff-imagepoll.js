'use strict';

angular
  .module('flixstockApp')
  .directive('imagepoll', function(){
    return {
      restrict : 'E',
      replace: true,
      scope:{
        imageLeftSrc: '@',
        imageRightSrc: '@',
        onLeftClick: '&',
        onRightClick: '&',
        overlayIconCls: '@',
        overlayMessage: '@'
      },
      templateUrl: 'views/templates/ff-imagepoll.html'
    };
  });
