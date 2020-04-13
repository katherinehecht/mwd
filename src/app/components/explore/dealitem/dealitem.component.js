var dealitem = {
    templateUrl: './dealitem.html',
    bindings:{
        data: '<',
        deal: '<',
        addWallet: '&',
        shareEvent: '&'
    },
    controller: function(WalletItemModel) {
        var ctrl = this;

        this.$onInit = function() {

        };

        // add to wallet of parent
        this.addToWallet = function () {
          
          console.log('about to add to wallet:', ctrl.deal);

          WalletItemModel.addWalletItem(ctrl.deal, ctrl.data['curr_user'])
          .then((walletItem) => {
            // Execute any logic that should take place after the object is saved.
            console.log('New object created with objectId: ' + walletItem.id);
          }, (error) => {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and message.
            console.log('Failed to create new object, with error code: ' + error.message);
          });
        };

        //call share function from parent
        this.share = function () {
            this.shareEvent({
                $deal: {
                    deal: ctrl.deal
                }
            })
        }
    }
};

angular
    .module('components.explore')
    .component('dealitem', dealitem);
