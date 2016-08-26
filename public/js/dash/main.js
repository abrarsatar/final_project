      angular.module('app.dashboard')
            .controller('dashCtrl', dashCtrl)

      function dashCtrl() {
          console.log('main dashCtrl is workin')

          var dash = this;

          dash.currentRep = {}
          dash.newRep = {}

          dash.Employees = [{
              name: "Jack",
              quota: 5000,
              actual: 2000,
              rotate : "transform: rotate("+ (2/5)*360    +"deg)",

              fifthTick: Math.max(5000, 3200) * 1.25,
              fourthTick: Math.max(5000, 3200) * 1,
              thirdTick: Math.max(5000, 3200) * .75,
              secondTick: Math.max(5000, 3200) * .5,
              firstTick: Math.max(5000, 3200) * .25,
              height: (2000 / 5000) * 240
          }, {
              name: "Jill",
              quota: 2000,
              actual: 900,
              rotate : "transform: rotate("+ (.9/2)*360  +"deg)",


              fifthTick: Math.max(2000, 1200) * 1.25,
              fourthTick: Math.max(2000, 1200) * 1,
              thirdTick: Math.max(2000, 1200) * .75,
              secondTick: Math.max(2000, 1200) * .5,
              firstTick: Math.max(2000, 1200) * .25,
              height: (800 / 2000) * 240
          }]

          function Salesrep(attributes) {
              this.name = attributes.name;
              this.quota = attributes.quota;
              this.actual = attributes.actual;

              this.fifthTick = Math.max(attributes.quota, attributes.actual) * 1.25;
              this.fourthTick = Math.max(attributes.quota, attributes.actual) * 1;
              this.thirdTick = Math.max(attributes.quota, attributes.actual) * .75;
              this.secondTick = Math.max(attributes.quota, attributes.actual) * .5;
              this.firstTick = Math.max(attributes.quota, attributes.actual) * .25;

              this.height = (attributes.actual / attributes.quota) * 240;
              this.rotate = "transform: rotate("+ (attributes.actual / attributes.quota) * 360 +"deg)";
          }

          dash.addRep = function() {
              dash.Employees.push(new Salesrep(dash.newRep))
              dash.newRep = {} // clears out the form
          }

          dash.showRep = function(rep, $index) {
              dash.currentRep = rep;

          }

          dash.editRep = function() {
          }

          dash.removeRep = function () {

          }

      }

      angular.module('app.dashboard')
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
