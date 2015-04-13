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

    var flix = [
      'images/flix_turing/pic004_billabongfront.jpg',
      'images/flix_turing/pic005_giants.jpg',
      'images/flix_turing/pic006_cardinal.jpg'
    ];
    shuffle(flix);
    
    var orig = [ 
      'images/orig_turing/pic001.jpg',
      'images/orig_turing/pic002.jpg',
      'images/orig_turing/pic003.jpg'
    ];
    shuffle(orig);

    var i = 0;
    var max = Math.min(flix.length, orig.length);
    $scope.tests = [];
    for(i=0; i<max; i++){
      var direction = ( Math.round(Math.random()*20) % 2 === 0 );
      $scope.tests.push({
        idx: i,
        isLeft: direction,
        left: (direction) ? flix[i] : orig[i],
        right: (direction) ? orig[i] : flix[i],
        isCorrect: null
      });
    }

    $scope.pass = 0;
    $scope.correct = 0;
    $scope.wrong = 0;
    
    // demo first page

    $scope.demoHeaderLImg = flix[0];
    $scope.demoHeaderRImg = orig[1];
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

    $scope.onPoll = function(idx, isCorrect, isPass){
        console.log('laksh');
      var test = $scope.tests[idx];
      test.isCorrect = isCorrect; 
      if(isPass){
        $scope.pass++;
        $scope.doNextPage();
      }else if(isCorrect){
        $scope.correct++; 
        $scope.doNextPage(1000);
      }else{
        $scope.wrong++;
        $scope.doNextPage(1000);
      }
    };

    $scope.doNextPage = function(delta){
      setTimeout(function(){
        $scope.$broadcast('br-nextpage');
      }, delta || 0);
    };
    
    $scope.onPageChange = function(idx){
      // Todo - hide navigation
    };

  }]);
