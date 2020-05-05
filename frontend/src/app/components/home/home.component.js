var home = {
    templateUrl: './home.html',
    controller: function($state){
      var ctrl = this;
      ctrl.$onInit = function() {
        console.log("made it to home");
      }
    }
};

angular
    .module('components.home')
    .component('home', home)
    .config(function($stateProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('home', {
                parent: 'app',
                url: '/',
                component: 'home',
                data: {
                  requiredAuth: true
                }
            });
});
