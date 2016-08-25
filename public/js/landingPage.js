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
        controller : 'heroesController as heroCtrl',
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


angular.module('landingPage')
    .controller('heroesController', heroCtrl)

heroCtrl.$inject = ['apiFactory']

function heroCtrl (apiFactory){
    var hCtrl = this;
    hCtrl.newHero = {
        powers     : [''], // starting with an empty array element so the ngRepeat will show HTML
        weaknesses : ['']
    };
    hCtrl.newHQ = {
        amenities : ['']
    }

    hCtrl.retrieveHeroes = function(){
        apiFactory
            .getHeroes()
            .then(function(response){
                hCtrl.heroList = response.data;
            });
    }
    hCtrl.retrieveHeroes();
    // console.log(apiFactory)

    hCtrl.makeAHero = function () {
        apiFactory
            .createHero(hCtrl.newHero)
            .then(function(response){
                console.log(response);
                hCtrl.retrieveHeroes();
            });
    }

    hCtrl.pwExtra = function (which) {
        hCtrl.newHero[which].push('');
    }


    hCtrl.retrieveHQs = function(){
        apiFactory
            .getHQs()
            .then(function(response){
                hCtrl.hqList = response.data;
            });
    }

    hCtrl.retrieveHQs();

    hCtrl.makeAnHQ = function () {
        apiFactory
            .createHQ(hCtrl.newHQ)
            .then(function(response){
                console.log(response);
            });
    }

    hCtrl.addAmenity = function(){
        hCtrl.newHQ.amenities.push('');
    }

}

angular.module('landingPage')
    .factory('apiFactory', apiFact)

apiFact.$inject = ['$http']

// Our factory will be the MAIN place we make calls to the backend
function apiFact ($http){

    function getHeroes () {
        return $http.get('/api/heroes')
    }
    function createHero (heroData) {
        return $http.post('/api/heroes', heroData)
    }

    function getHQs (hqID){
        var param = hqID ? `/${hqID}` : '';

        // var param = '';
        // if(hqID){
        //     param = `/${hqID}`;
        //     // '/' + hqID
        // }

        return $http.get(`/api/hqs${param}`)
        // '/api/hqs' + param
    }
    function createHQ (hqData){
        return $http.post('/api/hqs', hqData)
    }

    // This return value is exactly what we gain access to in the controller
    return {
        getHeroes : getHeroes,
        createHero: createHero,
        getHQs    : getHQs,
        createHQ  : createHQ,
    }
}
