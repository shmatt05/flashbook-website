'use strict';

angular.module('flashbookApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);

    $stateProvider.state('main', {
      url: '/',
      templateUrl: "app/main/main.html",
      controller: 'MainCtrl'
    });


  });