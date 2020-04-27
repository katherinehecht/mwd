var nearme = {
    templateUrl: './nearme.html',
    bindings:{
        deal: '<',
        addWallet: '&',
        shareEvent: '&'
    },
    controller: function($http) {
      this.$onInit = function($http){
        var ctrl = this;
        /*
        $http.post("http://localhost:8882/api/locations", data).then(function(resp){
          var response = resp.data[0];
          console.log('Response Data from API: ' + response);

        }, function(resp){
          console.log(resp.statusText);
        });*/
      };
    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
