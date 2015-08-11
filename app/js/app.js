/* App Module */

var productListApp = angular.module('productListApp', [
  'ngRoute',
  'ProductListCtrl',
  'ProductDetailCtrl'
]);

productListApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/productList', {
        templateUrl: 'partials/product-list.html'
      }).
      when('/productList/:productId', {
        templateUrl: 'partials/product-detail.html'
      }).
      otherwise({
        redirectTo: '/productList'
      });
  }]);