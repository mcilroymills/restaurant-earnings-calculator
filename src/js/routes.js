app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/details', {
      templateUrl: 'index.html',
      controller: 'CartCtrl'
    })
    .when('/charges', {
      templateUrl: 'index.html',
      controller: 'CartCtrl'
    })
    .when('/earnings', {
      templateUrl: 'index.html',
      controller: 'Ctrl'
    })
    .otherwise('/details');
});