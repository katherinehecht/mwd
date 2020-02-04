angular.module('app', ['ngMaterial', 'ngRoute', 'ngController']);

// Config
angular.module('app').config(function ($routeProvider, $locationProvider) {

    $locationProvider.hashPrefix('')

    $routeProvider
        .when('/', {
            templateUrl: 'pages/home.html',
            controller: 'MainController'
        })
        .when('/deals', {
            templateUrl: 'pages/deals.html',
            controller: 'DealsController'
        })
        .otherwise({
            templateUrl: 'pages/home.html',
            controller: 'MainController'
        })
})

// CONTROLLERS
// MainController
angular.module('app').controller('MainController', ['$scope', 'apiService', '$http',function ($scope, apiService, $http) {
    const data = {
        american: ['pizza', 'katherine', 'hotdogs'],
        desserts: ['ice cream', 'waffles']
    }
    $scope.data = data;
}]);

// DealsController
angular.module('app').controller('DealsController', ['$scope','apiService', '$http', function ($scope, apiService, $http) {
    const data = {
        american: ['pizza', 'katherine', 'hotdogs'],
        desserts: ['ice cream', 'waffles']
    }
    $scope.data = data;
}]);


// SERVICE
angular.module('app').service('apiService', ['$http', function($http){
    var self = this;
    $http.get(‘/apiService’)//TODO: input path to JSON here
        .success(function(result){
            $scope.rules = result;
        })
        .error(function (data, status){
             console.log(data);
        });
}]);

