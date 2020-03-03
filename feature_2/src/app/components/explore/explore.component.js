var explore = {
    templateUrl: './explore.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function($state) {
        //respond to changes in parent data
        this.$onChanges = function (changes) {
			if (changes.data) {
				this.data = angular.copy(this.data);
			}
        };
        //update parent with changes
		this.updateUser = function () {
			this.onUpdate({
				$event: {
					data: this.data
				}
			});
        };

        //add deal to your wallet. will eventually be a database call
        this.addToWallet = function (userId, deal) {
            this.data['wallets'][0].push(angular.copy(deal));
            deal.valid =0;
            this.updateUser();
           
        };
        //go to new component
        this.goToDeal = function(deal){
            $state.go('deal', {
                deal_id: deal.deal_id,
            });
        };
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
                component: 'explore'
            });   
});