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
  .controller('DemoCtrl', ['$scope', '$location', '$anchorScroll', 
          function($scope, $location, $anchorScroll) {

    function shuffle(a,b,c,d){//array,placeholder,placeholder,placeholder
      c=a.length;while(c)b=Math.random()*c--|0,d=a[c],a[c]=a[b],a[b]=d
    } 
    
    // setup vaiables

    var flixBaseSmall = '/images/demo/flix/small/';
    var flixBaseLarge = '/images/demo/flix/large/';
    var flix = [
      'pic004_billabongfront.jpg',
      'pic005_giants.jpg',
      'pic006_cardinal.jpg'
    ];
    shuffle(flix);
    
    var origBaseSmall = '/images/demo/orig/small/';
    var origBaseLarge = '/images/demo/orig/large/';
    var orig = [ 
      'pic001.jpg',
      'pic002.jpg',
      'pic003.jpg'
    ];
    shuffle(orig);

    var i = 0;
    var total = Math.min(flix.length, orig.length);
    $scope.tests = [];
    for(i=0; i<total; i++){
      var direction = ( Math.round(Math.random()*20) % 2 === 0 );
      var flixSmall = flixBaseSmall + flix[i];
      var flixLarge = flixBaseLarge + flix[i];
      var origSmall = origBaseSmall + orig[i];
      var origLarge = origBaseLarge + orig[i];

      $scope.tests.push({
        idx: i,
        isLeft: direction,
        leftSmall: (direction) ? flixSmall : origSmall,
        leftLarge: (direction) ? flixLarge : origLarge,
        rightSmall: (direction) ? origSmall : flixSmall,
        rightLarge: (direction) ? origLarge : flixLarge,
        isCorrect: null
      });
    }
    
    var pass = 0;
    var correct = 0;
    var wrong = 0;

    $scope.percentage = 0;
    $scope.showCounter = false;

    // demo first page

    $scope.demoHeaderLImg = flixBaseSmall + flix[0];
    $scope.demoHeaderRImg = origBaseSmall + orig[0];
    $scope.overlayIconCls = "icon ion-help";
    $scope.overlayMessage = "Bot or not";
    $scope.startTest = function(delta){
      $scope.overlayIconCls = "icon ion-arrow-down-a";
      $scope.overlayMessage = "Go";
      $scope.doNextPage(delta);
    };

    $scope.requestDemo = function(){
      // TODO skip the Turing test
    };

    $scope.onSkip = function(idx){
      var test = $scope.tests[idx];
      pass++;
      $scope.doNextPage();
    };

    $scope.onPoll = function(idx, isCorrect){
      var test = $scope.tests[idx];
      test.isCorrect = isCorrect; 
      if(isCorrect){
        correct++; 
      }else{
        wrong++;
      }
      $scope.doNextPage(1000);
    };

    $scope.doNextPage = function(delta){
      setTimeout(function(){
        $scope.$broadcast('br-nextpage');
      }, delta || 0);
    };
    
    $scope.onPageChange = function(idx){
      // Todo - hide navigation
      $scope.$apply(function(){
        if(idx == 0){
          $scope.showCounter = false;
        }else if(idx === total+1){
          $scope.percentage = Math.round(100 * correct / (correct+wrong+pass));
          $scope.showCounter = false;
        }else{
          $scope.indexStr = idx + " of " + total;
          $scope.showCounter = true;
        }
      });
    };

  }]);
