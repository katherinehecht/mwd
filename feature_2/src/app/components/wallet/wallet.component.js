var wallet = {
    templateUrl: './wallet.html'
};

angular
    .module('wallet')
    .component('wallet', wallet)
    .config(function($stateProvider, $urlRouteProvider) {
        $stateProvider
            .state('wallet', {
                url: '/wallet',
                component: 'wallet'
            });   
});