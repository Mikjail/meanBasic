angular.module('MainApp', []).directive('hotel', function() {
    return {
      restrict: 'E',
      templateUrl: 'directivas/hotel.html'
    };
  });