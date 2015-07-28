(function(){
  angular.module('MeganAndTyler', ['ngRoute']);
  angular.module('MeganAndTyler').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/about', { templateUrl: 'about.html' })
      .when('/party', { templateUrl: 'party.html' })
      .when('/rsvp', { templateUrl: 'rsvp.html' })
      .when('/', { templateUrl: 'home.html' })
      .otherwise({ redirectTo: '/' });
  });

})();
