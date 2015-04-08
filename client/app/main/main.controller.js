'use strict';

angular.module('flashbookApp')
  .controller('MainCtrl', function ($scope, $state) {
      console.log($state);
      $scope.isActive = function(viewState) {
        return $state.current.name === viewState;
      };

      $scope.menuItems = [

        {
          label: 'All Recipes',
          url: '/all',
          state: 'main.allrecipes'
        }
      ];


  });