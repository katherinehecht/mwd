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
        $scope.data = d;
    });
}]);


// SERVICE
app.service('apiService', ['$scope', '$http', function($http, $scope){
    var apiService = {
        getData: function(){    
            // $http returns a promise
            var promise = $http.get('data.json')
                //then also returns a promise
                .then(function(result){
                    console.log(result);
                    return result.data;
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