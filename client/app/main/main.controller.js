'use strict';

angular.module('flashbookApp')
  .controller('MainCtrl', function ($scope, $state) {
      console.log($state);
      $scope.isActive = function(viewState) {
        return $state.current.name === viewState;
      };

      $scope.menuItems = [
        {
          label: 'Main',
          url: '/',
          state: 'main'
        },
        {
          label: 'Recipe',
          url: '/recipe',
          state: 'main.recipe'
        }
      ];


  });