var home = {
    templateUrl: './home.html'
};

angular
    .module('home')
    .component('home', home)
    .config(function($stateProvider, $urlRouteProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                component: 'home'
            });   
});