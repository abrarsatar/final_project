angular.module("landingPage", ['ngRoute']);

angular.module('landingPage').config(function ($routeProvider) {
    $routeProvider.when( '/', {
        templateUrl: '/landingPartials/main.html'
    });
    $routeProvider.when( '/contact', {
        templateUrl: '/landingPartials/contact.html'
    });
    $routeProvider.when( '/about', {
        templateUrl: '/landingPartials/about.html',
    });
    $routeProvider.when( '/signUp', {
        templateUrl: '/landingPartials/signUp.html',
        controller : 'heroesController as hCtrl',
    });
    // the default route
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  })
;

angular.module('landingPage').controller('NavCtrl', ['$scope', '$location', NavCtrl])
function NavCtrl( $scope, $location ) {
    var nc = this
    var foo = '' // by declaring this variable in an outer controller, I can guarantee that any inner controllers can access it too.
  // $routeChangeSuccess is an event that is fired,
  // when the app has switched from one route to another.
    $scope.$on('$routeChangeSuccess', function() {
        nc.locationPath = $location.path();
        console.log('locationPath: ' + nc.locationPath );
    });
}
