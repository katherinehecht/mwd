var wallet = {
    templateUrl: './wallet.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function() {
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
        
        this.removeFromWallet = function (userId, deal) {

            // update array element to get it back on explore
            angular.forEach(this.data['deals'], function(value, key){
                if (value.deal_id === deal.deal_id){
                    value.valid = 1;
                    console.log(value);
                }
            });
            //update reference so it doesnt show in wallet
            deal.valid =0;
            this.updateUser();
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
    }
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