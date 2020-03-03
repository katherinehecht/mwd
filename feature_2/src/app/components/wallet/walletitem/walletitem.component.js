var walletitem = {
    templateUrl: './walletitem.html',
    bindings:{
        deal: '<',
        removeWallet: '&'
    },
    controller: function() {
        //call parent remove from wallet
        this.removeFromWallet = function () {
			this.removeWallet({
				$deal: {
					deal: this.deal
				}
			});
        };
    }
};

angular
    .module('components.explore')
    .component('walletitem', walletitem);