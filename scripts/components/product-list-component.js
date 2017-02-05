(function () {
  'use strict';

  const LIST = `
  <div
      class="col l4"
      ng-repeat="product in $ctrl.products track by $index">
      <product
      ng-click="$ctrl.onProductComponentClick()"
      on-delete="$ctrl.onProductDelete($index)"
          class="row"
      product="product"></product>
  </div>

  `;

  class ProductList {
    constructor() {
      console.log('hey3');
      this.template = LIST;
      this.controller = ProductListComponentController;

    }
  }

  class ProductListComponentController {
    constructor(ProductsService) {
      console.log('jest')
        this.products = [];
        this.ProductsService = ProductsService;
        this.onProductComponentClick = () => {
                  console.log('kliknięte!');
                };
        this.onProductDelete = () => {
            console.log('delete');

        }
    }

    $onInit() {
        this.ProductsService.$get()
            .then((data) => {
            console.log('data', data);
                this.products = this.products.concat(data);
            });
    }

    getProductByIndex(index) {
        return this.products[index];
    }
}


  angular.module('shop')
    .component('productList', new ProductList);

    console.log('hey');
}());
