'use strict';

angular.module('Authentication')

.controller('LoginController',
    ['$scope','$http', '$rootScope', '$location', 'AuthenticationService',
    function ($scope, $http, $rootScope, $location, AuthenticationService) {
        // reset login status
        //AuthenticationService.ClearCredentials();

		// to co jest ponizej dziala z logowaniem dpd
		/*
		$scope.authenticate = function (user, pass) {
			$http.post('http://localhost:5500/users/login', {
				username: 'admin',
				password: 'admin'
			}, {
				withCredentials: true
			}).success(function (data) {
				$location.path("/main");
			}).error(function (error) {
				$scope.authenticationError = error;
			});
		};
		*/
		$scope.authenticate = function (user, pass) {
			$http.post('http://localhost:8080/user', {
				username: user,
				password: pass
			}, {
				withCredentials: false
			}).success(function (data) {
				$location.path("/main");
			}).error(function (error) {
				$scope.authenticationError = error;
			});
		};		
		/*
			  		$http.get('http://api.worldoftanks.ru/2.0/account/info/?application_id=171745d21f7f98fd8878771da1000a31&account_id=19213,461').
				success(function(data) {
					$scope.wardatahttp = data;
			});
		*/
		
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function (response) {
                if (response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
    }]);