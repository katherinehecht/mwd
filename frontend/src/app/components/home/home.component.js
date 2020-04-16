var home = {
    templateUrl: './home.html'
};
var foursquare = require('node-foursquare-venues')('clientId', 'secretId', 'version', 'mode');
console.log(foursquare.venues);
angular
    .module('components.home')
    .component('home', home)
    .config(function($stateProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('home', {
                parent: 'app',
                url: '/home',
                component: 'home'
            });
});
