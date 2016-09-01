angular.module('landingPage')
    .controller('heroesController', heroCtrl)

heroCtrl.$inject = ['apiFactory']

function heroCtrl (apiFactory){
    var hCtrl = this;
    hCtrl.newHero = {
        email     : '', // starting with an empty array element so the ngRepeat will show HTML
        phone : ''
    };


    hCtrl.retrieveHeroes = function(){
        apiFactory
            .getHeroes()
            .then(function(response){
                hCtrl.heroList = response.data;
            });
    }
    hCtrl.retrieveHeroes();
    // console.log(apiFactory)
    hCtrl.message = '';
    hCtrl.makeAHero = function () {
        apiFactory
            .createHero(hCtrl.newHero)
            .then(function(response){
                console.log(response);
                hCtrl.retrieveHeroes();
hCtrl.message = 'We will reach out to you shortly.';

            });

    }

    hCtrl.pwExtra = function (which) {
        hCtrl.newHero[which].push('');
    }

}
