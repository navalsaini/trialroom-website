'use strict';

angular
  .module('flixstockApp')
  .directive('imagepoll', [ '$window', function($window){
    return {
      restrict : 'E',
      replace: true,
      templateUrl: 'views/templates/ff-imagepoll.html',
      link: function($scope, $element, $attr){
        var ion_unknown = "icon ion-help";
        var ion_correct_answer = "icon ion-checkmark-round ff-correct";
        var isAnswered = false;
        var correctMessage = "You caught us";
        var wrongMessage = "Flixstock";

        var data = JSON.parse($attr.data);
        var onPoll = $scope[$attr.onPoll];

        $scope.leftSrc = data.leftSmall;
        $scope.rightSrc = data.rightSmall;
        
        $scope.overlayLeftIconCls = ion_unknown;
        $scope.overlayRightIconCls = ion_unknown;
        $scope.overlayLeftMessage = "enlarge";
        $scope.overlayRightMessage = "enlarge";

        $scope._select = function(isLeft){
          if(isAnswered){
            return;
          }
          isAnswered = true;

          $scope.overlayLeftMessage = "";
          $scope.overlayRightMessage = "";
          $scope.overlayRightIconCls = "";
          $scope.overlayLeftIconCls = "";

          var isCorrect = (data.isLeft === isLeft);
          if(data.isLeft){
            $scope.overlayLeftIconCls = ion_correct_answer;
            $scope.overlayLeftMessage = (isCorrect) ? correctMessage : wrongMessage;
          }else{
            $scope.overlayRightIconCls = ion_correct_answer;
            $scope.overlayRightMessage = (isCorrect) ? correctMessage : wrongMessage;
          }

          $element.find('.imagepoll-overlay').css('opacity', '1');

          if(onPoll){
            onPoll(data.idx, isCorrect, false);
          }
        }

        $scope._enlarge = function(event, isLeft){
          event.preventDefault();
          event.stopPropagation();
          var link = (isLeft) ? (data.leftLarge) : (data.rightLarge);
          var target = (isLeft) ? '_leftblank' : '_rightblank';
          $window.open(link, target);
        }
      }
    };
  }]);
