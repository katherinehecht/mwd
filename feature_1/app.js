var app = angular.module('app', ['ngMaterial', 'ngRoute']);

// Config
app.config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/', {
            templateUrl: './pages/home.html',
            controller: 'MainController'
        })
        .when('/deals', {
            templateUrl: './pages/deals.html',
            controller: 'DealsController'
        })
        .when('/wallet', {
            templateUrl: './pages/wallet.html',
            controller: 'DealsController'
        })
        .otherwise({
            templateUrl: './pages/home.html',
            controller: 'MainController'
        })
});

// CONTROLLERS
// MainController
app.controller('MainController', ['$scope', 'apiService', '$http',function($scope, apiService, $http) {
    const data = {
        american: ['pizza', 'katherine', 'hotdogs'],
        desserts: ['ice cream', 'waffles']
    }
    $scope.data = data;
}]);

// DealsController
app.controller('DealsController', ['$scope','apiService', '$http', function ($scope, apiService, $http) {
    
    // call service
    apiService.getData().then(function(d){
        $scope.data = d["data"];
        
        $scope.deals = $scope.data["deals"];
        console.log("scope.deals");
        console.log($scope.deals);
        
        
        
    });

    
}]);


// SERVICE
app.service('apiService', ['$http', function($http){
    var apiService = {
        getData: function(){    
            // $http returns a promise
            var promise = $http.get('data.json')
                //then also returns a promise
                .then(function(result){
                    console.log("Result of get request:");
                    console.log(result);
                    return result;
                })
                // catch errors
                .catch(function(data){
                    console.log(data);
                });
            return promise;
        }
    };
    return apiService;
}]);