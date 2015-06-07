'use strict';


/*
angular.module('Home')

.controller('HomeController',
    ['$scope',
    function ($scope) {

    }]);
*/	
	
angular.module('yoAngularApp')
  .controller('HomeController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });	