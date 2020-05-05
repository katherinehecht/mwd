var walletitem = {
    templateUrl: './walletitem.html',
    bindings:{
        data: '<',
        item: '<',
        refreshPage: '&'
    },
    controller: function(WalletItemModel) {
        var ctrl = this;

        this.$onInit = function() {
            console.log(ctrl.item);
            console.log(ctrl.item.deal);
        };

        this.removeFromWallet = function () {

          console.log('about to remove to wallet:', ctrl.item);
          WalletItemModel.removeWalletItem(ctrl.item).then((myObject) => {
            // The object was deleted from the Parse Cloud.
            console.log('object removed from wallet');
            this.refreshPage();
          }, (error) => {
            // The delete failed.
            console.log('delete error');
            // error is a Parse.Error with an error code and message.
          });

        };

    }
};

angular
    .module('components.explore')
    .component('walletitem', walletitem);
