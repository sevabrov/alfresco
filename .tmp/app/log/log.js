'use strict';

angular.module('alfreskoApp').config(function ($stateProvider) {
  $stateProvider.state('log', {
    url: '/log',
    templateUrl: 'app/log/log.html',
    controller: 'LogController'
  });
});
//# sourceMappingURL=log.js.map
