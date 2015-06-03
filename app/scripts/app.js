'use strict';

/**
 * @ngdoc overview
 * @name yoAngularApp
 * @description
 * # yoAngularApp
 *
 * Main module of the application.
 */
var mainApp = angular
  .module('yoAngularApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
	'ui.router'
  ]);
  
    // mainApp.config(function($routeProvider, $stateProvider, $urlRouterProvider) {
  mainApp.config(function($routeProvider, $stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
	//$urlRouterProvider.when('/home', '/home/index');
	
	
    $stateProvider
        // HOME STATES  ========================================
		        .state('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
        })
        .state('home', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
        })
        // ABOUT STATE =================================
        .state('about', {
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
        })
        // ABOUT CONTACT =================================
        .state('contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
        });		
});
/*
  mainApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
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
  });
*/