
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
          function getCall () {
              return $http.get('/api/calls')
          }
          function createCall (callData) {
              console.log(callData);
              return $http.post('/api/calls', callData)
          }


          return {
              getHeroes : getHeroes,
              createHero: createHero,
              getCall   : getCall,
              createCall: createCall,
          }
      }
