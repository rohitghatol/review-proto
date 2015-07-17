'use strict';

/**
 * @ngdoc overview
 * @name cbApp
 * @description
 * # cbApp
 *
 * Main module of the application.
 */
angular
  .module('app', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'ui.router',
    'ui.router.breadcrumbs',
    'ngJSONPath',
    'ngStorage',
    'cfp.loadingBar',
    'firebase',
    'nav',
    'login',
    'home'

  ])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
      .state('public', {
        url: '/'
      })
      .state('home', {
        templateUrl: 'modules/home/views/home.html',
        url: '/home',
        controller: 'HomeCtrl',
      });

  }])
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .config(function($modalProvider) {
    $modalProvider.options.animation = false;
  })
  .run(['$rootScope', '$state', '$location', '$localStorage', function($rootScope, $state, $location, $localStorage) {
    $rootScope.$state = $state;
    $state.go('public');
  }]);
