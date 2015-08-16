(function(){
  angular.module('MeganAndTyler', ['ngAnimate', 'ngRoute']);

  // Config
  angular.module('MeganAndTyler').config(function($routeProvider, $locationProvider){
    $locationProvider.html5Mode(false);
    $routeProvider
      .when('/about', { templateUrl: 'about.html' })
      .when('/party', { templateUrl: 'party.html' })
      .when('/rsvp', { templateUrl: 'rsvp.html', controller: 'RsvpController' })
      .when('/registry', { templateUrl: 'registry.html' })
      .when('/information', { templateUrl: 'information.html' })
      .when('/thanks', { templateUrl: 'thanks.html' })
      .when('/', { templateUrl: 'home.html' })
      .otherwise({ redirectTo: '/' });
  });

  // RSVP Controller
  angular.module('MeganAndTyler').controller('RsvpController', function($scope, $http, $location) {

    var init = function() {
      $scope.email = '';
      $scope.gotcha = '';
      $scope.guests = 2;
      $scope.names = '';
      $scope.song_requests = 'None';
      $scope.allergies = 'None';
    };

    init();

    $scope.submit = function() {
      $http({
        url: "http://formspree.io/megangiroir2+rsvp@gmail.com",
        data: $.param({
          email: $scope.email,
          guests: $scope.guests,
          names: $scope.names,
          song_requests: $scope.song_requests,
          allergies: $scope.allergies,
          _gotcha: $scope.gotcha,
          _cc: 'kelsin+rsvp@valefor.com',
          _subject: 'Wedding RSVP'
        }),
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }).then(function(response) {
        // TODO: Check response to show errors
        init();
        $location.path('/#/thanks');
      });
    };
  });

})();
