# Migrating your AngularJS to Angular 2+ via ng-metadata

The ng-metadata (https://github.com/ngParty/ng-metadata) decorators allow you to develop with Angular 2+ syntax 
in your AngularJS (1.x) framework.

In this repository, we'll guide you through how to convert from JS to TS, and eventually to Angular 2+



Phase 0 - Master branch. 
Phonecat project with AngularJS 1.4, no webpack or npm, running with http-server:
node .\node_modules\http-server\bin\http-server ./app -a localhost -p 8000

Phase 1 - Webpack the JS files into a single bundle

Phase 2 - Add ng-metadata and start creating TS files

Next Phase - Using TS in legacy JS files