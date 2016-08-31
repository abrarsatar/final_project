
      angular.module('app.dashboard')
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
