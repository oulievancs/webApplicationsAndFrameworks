var app = angular.module("myApp", [])
	.controller("myCtrl", function($scope, operations) {
        	$scope.calc = function() {
                	$scope.result = operations.add($scope.a, $scope.b);
        	}
	})
	.service("operations", function() {
		this.add = function(x, y) {
			return (Number(x || 0) + Number(y || 0));
		}
	});
