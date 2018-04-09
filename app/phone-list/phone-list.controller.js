'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  controller('phoneList', ['Phone', 'newService',
      function(Phone, newService) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        this.searchText = newService.returnSearchText();
      }
    ]
  );
