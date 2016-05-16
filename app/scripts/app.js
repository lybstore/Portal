'use strict';

angular
	.module("auApp", ['ui.router', 'ngStorage'])
	.config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {
	        $urlRouterProvider.otherwise('/');

	        $stateProvider
	        	.state('login' , {
	        		url: '/',
	        		templateUrl: 'app/views/login.html',
							controller: 'logCtrl',
							authRequired: false

	        	})
						.state('profile' , {
							url: '/profile',
							templateUrl: 'app/views/profile.html',
							authRequired: true

						})
						.state('settings', {
							url: '/settings',
							templateUrl: 'app/views/settings.html',
							authRequired: true

						})
						.state('policy', {
							url: '/policy',
							templateUrl: 'app/views/policy.html',
							controller: 'policyCtrl',
							authRequired: true

						})
						.state('request', {
							url: '/request',
							templateUrl: 'app/views/request.html',
							authRequired: true
						});
	        }])
	.run(['$location', '$rootScope', '$state', 'auth', function($location, $rootScope, $state,auth){

		 $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {

        if (toState.authRequired && !auth.isLoggedIn()){
        	e.preventDefault();
        	$state.go('login');
        }
        if (!toState.authRequired && auth.isLoggedIn()){
        	e.preventDefault();
        	$state.go('profile');
        }
    });



	}])
