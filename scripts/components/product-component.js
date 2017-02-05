(function () {
  'use strict';

  const PRODUCT = `
  <div class="card small blue-grey darken-1">
            <div class="card-content white-text">
                <h6 class="card-title">{{ $ctrl.product.name }}</h6>
                <img
                    class="circle left"
                    ng-src="{{ $ctrl.product.image }}" alt=""/>
                <p>{{ $ctrl.product.description }}</p>
            </div>
            <div class="card-action">
            <button class="btn" ng-click="$ctrl.addToCart( { $product: $ctrl.product } )">dodaj</button>
            <button class="btn" ng-click="$ctrl.onDelete({$product:$ctrl.product}); $event.stopPropagation()">delete</button>
            <input type="number" ng-model="$ctrl.amount" />
            </div>
        </div>

  `;

  class ProductComponent {
        constructor() {
            this.bindings = {
                product: '<',
                onDelete: '&'
            };
            this.require = {
                productList: '^^'
            };
            this.controller = ProductComponentController;
            this.template = PRODUCT;

        }


    }

    class ProductComponentController {
        constructor(CartService) {
            this.product = null;
            this.cartService = CartService;

        }

        addToCart (product) {
          console.log('product', product);
          console.log('service', this.cartService);
          this.cartService.appendCart(product, amount);
          this.amount = 1;
        }

        $onInit() {
          //  this.product = this.productList.getProductByIndex(this.productIndex);
        }


    }

    angular.module('shop')
        .component('product', new ProductComponent);
}());
