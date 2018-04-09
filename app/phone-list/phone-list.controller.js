'use strict';

// Register `phoneList` component, along with its associated controller and template
angular.
  module('phoneList').
  controller('phoneList', ['Phone',
      function(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
      }
    ]
  );
