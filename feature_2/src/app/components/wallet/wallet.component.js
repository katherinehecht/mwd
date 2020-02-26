var wallet = {
    templateUrl: './wallet.html'
};

angular
    .module('components.wallet')
    .component('wallet', wallet)
    .config(function($stateProvider) {
        $stateProvider
            .state('wallet', {
                parent: 'app',
                url: '/wallet',
                component: 'wallet'
            });   
});