
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


          hCtrl.makeACall = function () {
              apiFactory
                  .createCall(hCtrl.call)
                  .then(function(error, response){
                      if(error){console.log(error)}
                      else{
                      console.log('hCtrl.call post', response.data)}  })};

          hCtrl.retrieveCalls = function(){
              apiFactory
                  .getCall()
                  .then(function(response){
                      hCtrl.callList = response.data;
                  });
          }
          hCtrl.retrieveCalls();

}
