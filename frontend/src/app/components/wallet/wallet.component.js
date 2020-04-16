var wallet = {
    templateUrl: './wallet.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function(WalletItemModel) {
        var ctrl = this;

        this.$onInit = function () {

          WalletItemModel.getAllWalletItems(ctrl.data['curr_user']).then(function(results) {
            ctrl.items = results;
            console.log('walletItems for user', ctrl.items);
          })

        };
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

      //refresh
      this.refreshPage = function () {
          console.log('refreshing');
          WalletItemModel.getAllWalletItems(ctrl.data['curr_user']).then(function(results) {
            ctrl.items = results;
            console.log('walletItems for user', ctrl.items);
          })
      };
    }
};

angular
    .module('components.wallet')
    .component('wallet', wallet)
    .config(function($stateProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('wallet', {
                parent: 'app',
                url: '/wallet',
                component: 'wallet'
            });
});
