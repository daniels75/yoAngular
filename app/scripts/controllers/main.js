'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('MainCtrl',
    ['$scope', 'Base64', '$http', '$cookieStore', '$rootScope', '$timeout',
  function ($scope, Base64, $http, $cookieStore, $rootScope, $timeout) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
	
	
		$scope.retrieveGreetings = function() {
				
				console.log('greeting');
				var username = 'daniels';
				var password = '123';
				$scope.greetingResult = {}
				
				// try with incorrect credentials like: var password = '1234';
				// restart server and open Chrome browser with incognito mode
				var credentials = btoa(username + ":" + password);
				var headers =  {
					Authorization : "Basic " + credentials
				};
				
				console.log('Credentials: ' + credentials);
				/*
					$http.get('greeting', {
					headers : headers
				}).success(function(data) {
				*/
				
				$http.get('http://localhost:8080/greeting').success(function(data) {
					$scope.greetingResult = data;
					console.log('greeting ok. Result: ' + data)
				}).error(function(result) {
					$scope.greetingResult = 'Cannot retrieve data from greeting service - Unuthorized';
					console.log('greeting failure')
				});
				
				
			};		

            $scope.addedUser = {};
			$scope.addDefaultUser = function() {
                var data = {username : 'Pawel'}
                return $http.post('http://localhost:8080/addUser', data).success(function (response) {
                	$scope.addedUser = response;
					console.log('Default user added: ' + response);
                }).error(function() {
					console.log('Cannot add user');
				});

            };
	
	
  }]);
