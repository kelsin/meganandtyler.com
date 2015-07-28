(function(){
  angular.module('MeganAndTyler', ['ngRoute']);
  angular.module('MeganAndTyler').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/about', {
        templateUrl: 'about.html'
      })
      .otherwise({
        templateUrl: 'home.html'
      });
  });

})();
