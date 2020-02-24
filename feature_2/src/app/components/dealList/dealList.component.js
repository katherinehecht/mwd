var explore = {
    templateUrl: './dealList.html'
};

angular
    .module('dealList')
    .component('exploreDealList', exploreDealList)
    .config(function($stateProvider, $urlRouteProvider) {
        $stateProvider
            .state('explore.dealList', {
                url: '/explore',
                component: 'exploreDealList'
            });   
});