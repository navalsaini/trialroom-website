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

    var flix = [
      'images/flix_turing/pic001_tshirt.jpg',
      'images/flix_turing/pic002_jersey.jpg',
      'images/flix_turing/pic003_hood.jpg',
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
      var direction = (Math.random() < 0.5);
      $scope.tests.push({
        idx: i,
        left: (direction) ? flix[i] : orig[i],
        right: (direction) ? orig[i] : flix[i]
      });
    }

    $scope.demoLImg = flix[0];
    $scope.demoRImg = flix[1];

    $scope.turing = false;
    $scope.showDemo = function(){
      $scope.turing = true;
    };

    $scope.changePage = function(idx){
      console.log(idx);
    };

    $scope.nextPage = function(){
      $scope.$broadcast('br-nextpage');
    };
  }]);
