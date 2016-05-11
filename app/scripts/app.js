'use strict';

angular
	.module("auApp", ['ui.router'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	        	.state('login' , {
	        		url: '/',
	        		templateUrl: 'app/views/login.html',
							controller: 'logCtrl'
	        	})
						.state('profile' , {
							url: '/profile',
							templateUrl: 'app/views/profile.html'

						})
						.state('policy', {
							url: '/policy',
							templateUrl: 'app/views/policy.html',
							controller: 'policyCtrl'
						})
						.state('request', {
							url: '/request',
							templateUrl: 'app/views/request.html'
						});
	        }])
