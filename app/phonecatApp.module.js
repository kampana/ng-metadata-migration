import { bundle } from './panaya-decorators/panaya-decorators';
import { AppModule } from './next-gen/app-module'

'use strict';

// Define the `phonecatApp` module
angular.module('phonecatApp', [
  'ngAnimate',
  'ngRoute',
  'core',
  'phoneDetail',
  'phoneList',
  bundle(AppModule).name
]);