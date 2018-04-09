'use strict';

require('angular');
require('angular-animate');
require('angular-route');
require('angular-resource');

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
]);

require('./imports.ts');