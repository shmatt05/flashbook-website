'use strict';

angular.module('flashbookApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
    'angularMoment'
])
  .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    // animations
    $.material.init();

    $locationProvider.html5Mode(true);

    $stateProvider.state('main', {
      url: '/',
      templateUrl: "app/main/main.html",
      controller: 'MainCtrl'

    }).state('main.recipe', {
      url: 'recipe',
      templateUrl: "app/recipe/recipe.html",
      controller: 'RecipeCtrl'
    });


  });