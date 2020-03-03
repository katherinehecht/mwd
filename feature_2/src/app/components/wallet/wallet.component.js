var wallet = {
    templateUrl: './wallet.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function() {
        // respond to changes in parent data
        this.$onChanges = function (changes) {
			if (changes.data) {
				this.data = angular.copy(this.data);
			}
        };
        
        // update parent about data update
		this.updateUser = function () {
			this.onUpdate({
				$event: {
					data: this.data
				}
			});
        };
        
        //remove from wallet. will eventually make a database call
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