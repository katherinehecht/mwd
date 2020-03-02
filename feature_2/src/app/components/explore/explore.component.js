var explore = {
    templateUrl: './explore.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function($state) {
        this.$onChanges = function (changes) {
			if (changes.data) {
				this.data = angular.copy(this.data);
			}
		};
		this.updateUser = function () {
			this.onUpdate({
				$event: {
					data: this.data
				}
			});
        };
        this.addToWallet = function (userId, deal) {
            this.data['wallets'][0].push(angular.copy(deal));
            deal.valid =0;
            this.updateUser();
            // $ctrl.data['wallets'][0].push(deal);
            // $mdToast.show(
            //     $mdToast.simple()
            //         .textContent('Added ' + deal.name + ' to wallet!')
            //         .hideDelay(3000))
            //     .then(function() {
            //         console.log('Toast dismissed.');
            //     }).catch(function() {
            //         console.log('Toast failed or was forced to close early by another toast.');
            // });
        };
        this.goToDeal = function(deal){
            $state.go('deal', {
                deal_id: deal.deal_id,
            });
            //this.deal_id = deal.deal_id;
            //console.log("deal id");
            //console.log(deal.deal_id);
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