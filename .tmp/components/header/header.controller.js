'use strict';
angular.module('alfreskoApp').controller('headerController', function ($scope, $state) {
  $scope.menu = [{ "title": "Статистика",
    "href": "/",
    "active": false
  }, { "title": "Персонал",
    "href": "/personal",
    "active": false
  }, { "title": "Скидки",
    "href": "/discount",
    "active": false
  }, { "title": "Журнал событий",
    "href": "/log",
    "active": false
  }, { "title": "Настройки",
    "href": "/setings",
    "active": false
  }];
  for (var i = 0; i < $scope.menu.length; i++) {
    if ($scope.menu[i].href == $state.current.url) {
      $scope.menu[i].active = true;
      return;
    }
  }
});
//# sourceMappingURL=header.controller.js.map
