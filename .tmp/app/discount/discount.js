'use strict';

angular.module('alfreskoApp').config(function ($stateProvider) {
  $stateProvider.state('discount', {
    url: '/discount',
    templateUrl: 'app/discount/discount.html',
    controller: 'DiscountController'
  });
});
//# sourceMappingURL=discount.js.map
