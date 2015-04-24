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
  .controller('MainCtrl', ['$scope', '$location', '$anchorScroll', '$interval',
          function($scope, $location, $anchorScroll, $interval) {
    $scope.slides = [
	    {
        title: 'Apparel catalog photography made simple',
        description: 'Replace your traditional photo-shoot with tech driven photography.'
      },{
        title: 'Improve sales',
        description: 'Act on which models sell more - make use of analytics.'
      },{
        title: 'Reduce costs',
        description: 'You will never need to hire a model or a high end photographer again.'
	    }
    ];

    $scope.gotoSolution = function(){
      $location.hash('solution');
      $anchorScroll();
    };

    $scope.images = [
      "images/solution/model1.jpg",
      "images/solution/model2.jpg",
      "images/solution/model3.jpg"
    ];

    $scope.garment = "images/solution/garment1.png";

    /*
     * Testimonials
     */

    $scope.testimonials = [
      {
        testimonial: "Doing photo-shoots involved a lot of coordination, and investing a fair bit of time setting up everything. Now, after working with Flixstock, things are a lot easier, as we don't wait for the stock to build up. We just shoot small batches, and send it over tiwice a week to Flixstock team. It certainly saves a lot of hassle, and there are no complaints on quality.",
        person: "Gwen Jones, COO",
        company: "Adisa, A California Based Marketplace",
        url: "www.adasa.com",
        image: "images/portfolio/Adasa.jpg"
      },{
        testimonial: "We work with a lot of brands, and shot pictures barring a few times when brands were able to give pictures. The item lots arrived every now and then, and optimizing stock for a photo shoot was very difficult, but that is only until we started working with Flixstock. We also got hold of this subtle model with a friendly face who has turned out to be our favorite. More importantly, the whole process is devoid of the usual running around I used to do at the photoshoots!",
        person: "Melanie Harris, Fashion Designer, NYC",
        company: "Stylebug Inc",
        url: "www.stylebug.com",
        image: "images/portfolio/Stylebug.jpg"
      },{
        testimonial: "For a single designer owned couture line, I used to invest a lot of time getting my collection's photos ready. Catalog shots are the only way my far away clients assess my collection, and I don't want to miss on any detail there. I am so happy with the results of this new technology, can't thank the Flixstock team enough. They have made life so easy.",
        person: "Melanie Harris, Fashion Designer, NYC",
        company: "Melanie Harris Collection",
        url: "www.melanieharriscollection.com",
        image: "images/portfolio//MelaineHarris.png"
      }
    ];
  }]);
