'use strict';

/**
 * @ngdoc overview
 * @name flixstockApp
 * @description
 * # flixstockApp
 *
 * Main module of the application.
 */
angular
  .module('flixstockApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-flexslider',
    'br.fullpage'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/solution', {
        templateUrl: 'views/solution.html',
        controller: 'SolutionCtrl'
      })
      .when('/demo', {
        templateUrl: 'views/demo.html',
        controller: 'DemoCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .when('/partners', {
        templateUrl: 'views/partners.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
