var explore = {
    templateUrl: './explore.html'
};

angular
    .module('explore')
    .component('explore', explore)
    .config(function($stateProvider, $urlRouteProvider) {
        $stateProvider
            .state('explore', {
                url: '/explore',
                component: 'explore'
            });   
});