var explore = {
    templateUrl: './explore.html',
    bindings: {
        data: '<'
    }
};

angular
    .module('components.explore')
    .component('explore', explore)
    .config(function($stateProvider) {
        $stateProvider
            .state('explore', {
                parent: 'app',
                url: '/explore',
                component: 'explore',
                resolve: {
                    data: function (ExploreService) {
                        return ExploreService.getData();
                        
                    }
                }
            });   
});