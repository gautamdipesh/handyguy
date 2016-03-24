var app = angular.module('handy', []);
app
  .controller('handyController', ['$scope', function ($scope, $http, $location) {
    $scope.fieldValue = {};
    $scope.services = [];
    $scope.editIndex = false;

	$scope.addService = function(serviceName, serviceAmount){
		console.log(serviceName);
		console.log(serviceAmount);
		console.log($scope.fieldValue);
		if (!angular.isUndefined(serviceName) && !angular.isUndefined(serviceAmount)){
			$scope.services.push({'name' : serviceName, 'amount' : serviceAmount})
		}
	}
    $scope.editService = function (index) {
      $scope.service = $scope.services[index].service;
      $scope.editIndex = index;
    }
    $scope.deleteService = function (index) {
      $scope.services.splice(index, 1);
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

  }])
