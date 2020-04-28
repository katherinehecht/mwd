var nearme = {
    templateUrl: './nearme.html',
    controller: function($http) {
      var ctrl = this;
      this.$onInit = function(){
        var data = {
          'location': 'South_Bend,IN'
        }

        // make http request to local server that is hosting foursquare api call
        // this request gets local restaurants for the user to explore from foursquare API
        // $http.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";
        $http.get("http://localhost:3000/api/location").then(function(response){
          console.log('Response Data from API: ' + response);
          console.log(response.statusText);
          ctrl.recs = response.data.response.groups[0].items
          console.log('data:', response.data.response.groups[0].items)
        });

        // sample hard-coded data that doesn't get used, but served as a placeholder
        ctrl.venues = [{'name': 'PEGGS eggs', 'address': '127 S Michigan St, South Bend, IN 46601'},
        {'name': 'Yellow Cat Cafe', 'address': '808 E Colfax Ave, South Bend, IN 46617'},
        {'name': 'Woochi Japanese Fushion', 'address': '119 N Michigan St, South Bend, IN 46601'}]
      };
    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
