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
app.controller('DealsController', ['$scope','apiService', '$http', '$mdToast', function ($scope, apiService, $http, $mdToast) {
    
    // call service
    apiService.getData().then(function(d){
        $scope.data = d["data"];
        
        $scope.deals = $scope.data["deals"];
        $scope.wallet = $scope.data["wallets"][0];
        console.log("scope.deals");
        console.log($scope.deals);
        console.log($scope.wallet);
        
        
        calculateValue();
        
     
    });
    
    
    $scope.addToWallet = function(userId, deal){
        console.log(userId);
        $scope.wallet.push(deal);
        console.log($scope.wallet);
        deal.valid =0;
        $mdToast.show(
            $mdToast.simple()
                .textContent('Added ' + deal.name + ' to wallet!')
                .hideDelay(3000))
              .then(function() {
                console.log('Toast dismissed.');
              }).catch(function() {
                console.log('Toast failed or was forced to close early by another toast.');
          });
    }
    
    $scope.removeFromWallet = function(userId, deal){
        console.log(userId);
        //Eventually this function will edit a database
        console.log($scope.wallet);
        deal.valid =0;
        $mdToast.show(
            $mdToast.simple()
                .textContent('Removed ' + deal.name + ' from wallet')
                .hideDelay(3000))
              .then(function() {
                console.log('Toast dismissed.');
              }).catch(function() {
                console.log('Toast failed or was forced to close early by another toast.');
          });
        calculateValue();
    }
    
    calculateValue = function(){
         // calculate value in wallet
        $scope.wallet_value = 0;
        for (var i in $scope.wallet){
            if ($scope.wallet[i].valid === 1){
                $scope.wallet_value += $scope.wallet[i].value_saved;
            }
        }
        console.log($scope.value);
    }
    
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