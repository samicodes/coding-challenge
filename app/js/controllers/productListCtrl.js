var productListCtrl = angular.module('ProductListCtrl', []);
productListCtrl.controller('ProductListController', ['$scope', '$http',
  function($scope, $http) {
    $http.get('data/phones.json').success(function(data) {
      $scope.phonesList = data;
    });

}]);

