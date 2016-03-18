'use strict';

angular.module('alfreskoApp').config(function ($stateProvider) {
  $stateProvider.state('addPlace', {
    url: '/add-place',
    templateUrl: 'app/add-place/add-place.html',
    controller: 'addPlaceController'
  });
});
//# sourceMappingURL=add-place.js.map
