'use strict';

angular.module('alfreskoApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('setings', {
        url: '/setings',
        templateUrl: 'app/setings/setings.html',
        controller: 'SetingsController'
      });
  });
