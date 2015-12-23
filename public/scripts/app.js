'use strict';

/**
 * @ngdoc overview
 * @name filterLAdyApp
 * @description
 * # merchantPanelApp
 *
 * Main module of the application.
 */
angular
  .module('filterLadyApp', [
    'ngRoute',
    'Ctrls',
    'Directives'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/views/home.html',
        controller: 'HomeCtrl'
      })
      .when('/search', {
        templateUrl: '/views/search.html',
        controller: 'SearchCtrl'
      })
      .when('/product/:productId', {
        templateUrl: '/views/singleProduct.html',
        controller: 'SingleProductCtrl'
      })
      .when('/merchant/:merchantId', {
        templateUrl: '/views/merchant.html',
        controller: 'SingleMerchantCtrl'
      })

      .otherwise({
        redirectTo: '/'
      });

  })

  // Django integration. 
  .config( 
    ['$interpolateProvider', '$httpProvider','$locationProvider',
    function($interpolateProvider, $httpProvider,$locationProvider){
      $interpolateProvider
        .startSymbol("{[")
        .endSymbol("]}");

      // $httpProvider.defaults.withCredentials = true;
      // $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      // // $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
      // $httpProvider.defaults.useXDomain = true;
      // delete $httpProvider.defaults.headers.common['X-Requested-With'];

      //routing DOESN'T work without html5Mode
      // $locationProvider.html5Mode(true);

      $httpProvider.defaults.useXDomain = true;
      // $httpProvider.defaults.withCredentials = true;
      delete $httpProvider.defaults.headers.common["X-Requested-With"];
      $httpProvider.defaults.headers.common["Accept"] = "application/json";
      $httpProvider.defaults.headers.common["Content-Type"] = "application/json";
  }])

