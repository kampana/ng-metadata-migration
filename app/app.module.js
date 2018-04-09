import { bundle } from './panaya-decorators/panaya-decorators';
import { AppModule } from './next-gen/app-module'
import 'angular';
import 'angular-animate';
import 'angular-route';
import 'angular-resource';

'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'ngResource',
  bundle(AppModule).name
]);

require('./app.config');