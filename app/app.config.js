'use strict';

angular.
  module('phonecatApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/phones', {
          templateUrl:'phone-list/phone-list.template.html',
          controller: 'phoneList',
          controllerAs: '$ctrl'
        }).
        when('/phones/:phoneId', {
          templateUrl: 'phone-detail/phone-detail.template.html',
          controller: 'phoneDetail',
          controllerAs: '$ctrl'
        }).
        otherwise('/phones');
    }
  ]);
