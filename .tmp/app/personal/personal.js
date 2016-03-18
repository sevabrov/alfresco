'use strict';

angular.module('alfreskoApp').config(function ($stateProvider) {
  $stateProvider.state('personal', {
    url: '/personal',
    templateUrl: 'app/personal/personal.html',
    controller: 'PersonalController'
  });
});
//# sourceMappingURL=personal.js.map
