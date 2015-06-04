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
  
  mainApp.config(function($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/home');
    $stateProvider
        .state('home', {
			url: '/home',
			templateUrl: 'views/main.html',
			controller: 'MainCtrl'
        })
        // ABOUT STATE =================================
        .state('about', {
			url: '/about',
			templateUrl: 'views/about.html',
			controller: 'AboutCtrl'
        })
        // ABOUT CONTACT =================================
        .state('contact', {
			url: '/contact',
			templateUrl: 'views/contact.html',
			controller: 'ContactCtrl'
        });		
});