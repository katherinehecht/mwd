var nearme = {
    templateUrl: './nearme.html',
    bindings:{
        deal: '<',
        addWallet: '&',
        shareEvent: '&'
    },
    controller: function() {

    }
};

angular
    .module('components.explore')
    .component('nearme', nearme);
