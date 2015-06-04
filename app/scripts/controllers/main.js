'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoAngularApp
 */
var mainApp = angular.module('yoAngularApp');

mainApp.controller('MainCtrl', function ($scope) {
	$scope.something1 = 'test1';
	$scope.awesomeThings = [
	  'HTML5 Boilerplate',
	  'AngularJS',
	  'Karma'
	];
	$scope.something2 = 'test2';
  });
