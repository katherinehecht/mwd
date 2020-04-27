var nearme = {
    templateUrl: './nearme.html',
    bindings:{
        deal: '<',
        addWallet: '&',
        shareEvent: '&'
    },
    controller: function($http) {
      this.$onInit() = function(){
        var ctrl = this;
        var data = {


        }
        $http.post("http://localhost:8001/api/locations", data).then(function(resp){
          var response = resp.data[0];
          console.log('Response Data from API: ' + response);

        }, function(resp){
          console.log(resp.statusText);
        });
      }
    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
