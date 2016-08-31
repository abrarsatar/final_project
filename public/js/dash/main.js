      angular.module('app.dashboard')
            .controller('dashCtrl', dashCtrl)

      function dashCtrl() {
          console.log('main dashCtrl is workin')

          var dash = this;

          dash.currentRep = {}
          dash.newRep = {}

          dash.Employees = [{
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



      //     name: "Jack",
      //     quota: 5000,
      //     actual: 2000,
      //     rotate : "transform: rotate("+ (2/5)*360    +"deg)",
      //
      //     fifthTick: Math.max(5000, 3200) * 1.25,
      //     fourthTick: Math.max(5000, 3200) * 1,
      //     thirdTick: Math.max(5000, 3200) * .75,
      //     secondTick: Math.max(5000, 3200) * .5,
      //     firstTick: Math.max(5000, 3200) * .25,
      //     height: (2000 / 5000) * 240
      // }, {
      //     name: "Jill",
      //     quota: 2000,
      //     actual: 900,
      //     rotate : "transform: rotate("+ (.9/2)*360  +"deg)",
      //
      //
      //     fifthTick: Math.max(2000, 1200) * 1.25,
      //     fourthTick: Math.max(2000, 1200) * 1,
      //     thirdTick: Math.max(2000, 1200) * .75,
      //     secondTick: Math.max(2000, 1200) * .5,
      //     firstTick: Math.max(2000, 1200) * .25,
      //     height: (800 / 2000) * 240
