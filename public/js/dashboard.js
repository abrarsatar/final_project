angular.module('app.dashboard', ['ngRoute'])
angular.module('app.dashboard').config(function ($routeProvider) {
    $routeProvider.when( '/', {
        templateUrl: '/dashPartials/main.html',
        controller: 'dashCtrl as dash',
    });
    $routeProvider.when( '/other', {
        templateUrl: '/dashPartials/other.html',
        controller : 'heroesController as hCtrl',
    });
    $routeProvider.when( '/callLog', {
        templateUrl: '/dashPartials/log.html',
        controller : 'heroesController as hCtrl',
    });
    // the default route
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });
  })
;

angular.module('app.dashboard').controller('NavCtrl', ['$scope', '$location', NavCtrl])
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
