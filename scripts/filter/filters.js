
    angular.module('shop').filter('more', function() {
      return function (value, len) {
        if(value && value.lenght > len) {
        return value.substr(0, len) + '...czytaj więcej';
      }
    }
  });
