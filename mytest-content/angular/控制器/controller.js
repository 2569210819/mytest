
var app = angular.module('myApp', []);
			app.controller('myCtrl', function($scope) {
				$scope.firstName = function() {
					return "a";
				}
				$scope.lastName = "Doe";
			
			});
