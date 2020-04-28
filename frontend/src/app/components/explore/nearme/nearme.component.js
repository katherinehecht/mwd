var nearme = {
    templateUrl: './nearme.html',
    controller: function($http) {
      this.$onInit = function(){
        var ctrl = this;
        var data = {
          'location': 'South_Bend,IN'
        }

        // make http request to local server that is hosting foursquare api call
        // this request gets local restaurants for the user to explore from foursquare API
        // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        // $http.post("http://localhost:3000/api/locations",  JSON.stringify(data)).then(function(response){
        //   var responseData = response.data[0];
        //   console.log('Response Data from API: ' + response);
        //   ctrl.name = responseData.name;
        //   console.log(response.statusText);
        // });

        ctrl.venues = [{'name': 'PEGGS eggs', 'address': '127 S Michigan St, South Bend, IN 46601'},
        {'name': 'Yellow Cat Cafe', 'address': '808 E Colfax Ave, South Bend, IN 46617'},
        {'name': 'Woochi Japanese Fushion', 'address': '119 N Michigan St, South Bend, IN 46601'}]
      };
    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
