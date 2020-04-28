var nearme = {
    templateUrl: './nearme.html',
    controller: function($http) {
      this.$onInit = function(){
        var ctrl = this;
        var data = {
          'location': 'South_Bend,IN'
        }

        $http.post("http://localhost:3000/api/locations",  JSON.stringify(data)).then(function(response){
          var responseData = response.data[0];
          console.log('Response Data from API: ' + response);
          ctrl.name = responseData.name;
          console.log(response.statusText);
        });
      };
    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
