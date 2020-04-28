var nearme = {
    templateUrl: './nearme.html',
    controller: function($http) {
      this.$onInit = function(){
        var ctrl = this;
        var data = {
          'location': 'South_Bend,IN'
        }

        if($http.post("http://localhost:3000/api/locations", data).then(function(response){
          var responseData = resoponse.data[0];
          console.log('Response Data from API: ' + response);
          ctrl.name = responseData.name;
        }, function(response){
          console.log(response.statusText);
        });)
      };
    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
