'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp').controller('ContactCtrl',['$scope','$http','httpDataResponse', function ($scope, $http, httpDataResponse) {
	  
	  
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
 
	  
	  /*
	  		$http.get('http://api.worldoftanks.ru/2.0/account/info/?application_id=171745d21f7f98fd8878771da1000a31&account_id=19213,461').
				success(function(data) {
					$scope.wardatahttp = data;
			});
	  
	     
        $http.post('http://localhost:8080', {
            username: 'user',
            password: 'password'
        }, {
            withCredentials: false
        }).success(function (data) {
            $location.path("/main");
        }).error(function (error) {
            $scope.authenticationError = error;
        });
		
		*/
	/*
            $http.post('http://localhost:8080/login', { username: 'username1', password: 'password' })
                .success(function (response) {
                    $scope.loged = response;
            });	  
	*/  
	/*
    httpDataResponse.success(function(data) {
        $scope.wardatasimple = data;
    });
	*/
	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
