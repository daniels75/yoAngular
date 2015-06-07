'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
 
// declare modules
angular.module('Authentication', []);
angular.module('Home', []); 
 
angular
  .module('yoAngularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'Authentication',
    'Home'	
  ])
  .config(function ($routeProvider) {
    $routeProvider
		.when('/', {
			controller: 'HomeController',
			templateUrl: 'views/home.html'
		})	
		.when('/login', {
			controller: 'LoginController',
			templateUrl: 'views/authentication/login.html'
		})
		/*
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  */
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  
  .run(['$rootScope', '$location', '$cookieStore', '$http',
    function ($rootScope, $location, $cookieStore, $http) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

		/*
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
		
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
		
        });
		*/
    }]);