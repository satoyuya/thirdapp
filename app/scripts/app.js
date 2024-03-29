'use strict';

/**
 * @ngdoc overview
 * @name thirdappApp
 * @description
 * # thirdappApp
 *
 * Main module of the application.
 */
angular
  .module('thirdappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
