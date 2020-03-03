var dealitem = {
    templateUrl: './dealitem.html',
    bindings:{
        deal: '<',
        addWallet: '&',
        shareEvent: '&'
    },
    controller: function() {
        // add to wallet of parent
        this.addToWallet = function () {
			this.addWallet({
				$deal: {
					deal: this.deal
				}
			});
        };

        //call share function from parent
        this.share = function () {
            this.shareEvent({
                $deal: {
                    deal: this.deal
                }
            })
        }
    }
};

angular
    .module('components.explore')
    .component('dealitem', dealitem);