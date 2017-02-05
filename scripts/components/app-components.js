(function () {
    'use strict';

    class AppComponent {
        constructor() {
            this.templateUrl = '/scripts/components/app-component.html';
            this.controller = AppController;
        }
    }

    class AppController {
        constructor(ProductsService){
            this.title = 'Witamy na WarsawJS'

            ProductsService.$get().then(products => {
              this.products = products;
            })
        }

        onTitleClick () {
          console.log('heyka');
        }
    }

    angular.module('shop').component('app', new AppComponent);

    angular.module('shop').filter('more', function() {
      return function (value, len) {
        if(value && value.lenght > len) {
        return value.substr(0, len) + '...czytaj więcej';
      }
    }
  });
}());
