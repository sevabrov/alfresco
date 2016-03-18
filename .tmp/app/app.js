'use strict';

angular.module('alfreskoApp', ['alfreskoApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ngScrollbars']).config(function ($urlRouterProvider, $locationProvider, ScrollBarsProvider) {
  ScrollBarsProvider.defaults = {
    autoHideScrollbar: false,
    theme: 'light',
    advanced: {
      updateOnContentResize: true
    },
    scrollInertia: 700
  };

  $urlRouterProvider.otherwise('/');

  $locationProvider.html5Mode(true);
});
//# sourceMappingURL=app.js.map
