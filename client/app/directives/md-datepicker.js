angular.module('flashbookApp')
  .directive('fbDatepicker', function() {
    return {
      restrict: 'A',
      link: function(scope, element, attrs) {
        $(element).bootstrapMaterialDatePicker({ weekStart : 0, time: false });
      }
    };
  });