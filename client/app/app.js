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
      abstract: true,
      templateUrl: "app/main/main.html",
      controller: 'MainCtrl'

    }).state('main.welcome', {
      url: '',
      templateUrl: "app/welcome/welcome.html",
      controller: 'WelcomeCtrl'
    }).state('main.recipe', {
        url: 'recipe',
        templateUrl: "app/recipe/recipe.html",
        controller: 'RecipeCtrl'
      }).state('main.allrecipe', {
        url: 'all',
        templateUrl: "app/all-recipes/all-recipes.html",
        controller: 'AllRecipesCtrl'
      })
      .state('main.login', {
        url: 'login',
        templateUrl: "app/login/login.html",
        controller: 'LoginCtrl'
      });


  });