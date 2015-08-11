var productDetailCtrl = angular.module('ProductDetailCtrl', ['ngRoute']);
productDetailCtrl.controller('ProductDetailController', ['$scope', '$routeParams', '$http',
  function($scope, $routeParams, $http) {
    $http.get('data/' + $routeParams.productId + '.json').success(function(data) {
      $scope.phone = data;
    });
	
	$scope.comment = [];
    $scope.btn_add = function() {
    if($scope.txtcomment !=''){
        $scope.comment.push($scope.txtcomment);
        $scope.txtcomment = "";
		}
    }
 
    $scope.remItem = function($index) {
        $scope.comment.splice($index, 1);
    }
  }]);