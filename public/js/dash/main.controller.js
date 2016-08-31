
      angular.module('app.dashboard')
          .controller('heroesController', heroCtrl)

      heroCtrl.$inject = ['apiFactory']

      function heroCtrl (apiFactory){
        console.log('heroCtrl')

          var hCtrl = this;
          hCtrl.newHero = {
              email     : [''], // starting with an empty array element so the ngRepeat will show HTML
              phone : ['']
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

          hCtrl.call = {
          }

          hCtrl.calls=[{

          }]

            function newCall(attributes){
              this.type = attributes.type;
              this.note=attributes.note;
              this.date=attributes.date;
            }
          hCtrl.addCall = function (){
            hCtrl.calls.push(new newCall(hCtrl.call))
            hCtrl.call = { }
            console.log(hCtrl.calls)
          }

      }
