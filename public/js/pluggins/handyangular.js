angular.module('handy', [])
.controller('handyService', function($scope, $http, $location){
	$scope.fieldValue = {};
	$scope.services = [];

	$scope.addService = function(serviceName, serviceAmount){
		console.log(serviceName);
		console.log(serviceAmount);
		console.log($scope.fieldValue);
		if (!angular.isUndefined(serviceName) && !angular.isUndefined(serviceAmount)){
			$scope.services.push({'name' : serviceName, 'amount' : serviceAmount})
		}
	}
	$scope.saveService = function(){
		$http.post('/saveServices', {
			data : $scope.services
		}).success(function (resp){
			if(resp == 'Success'){
				window.location = '/dashboard';
			}
		});
	}
});