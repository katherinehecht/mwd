var explore = {
    templateUrl: './explore.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function($state, DealModel) {
      var ctrl = this;

      this.$onInit = function () {
        DealModel.getAllDeals().then(function(results) {
          ctrl.deals = results;
        })
      };

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
      this.addToWallet = function (deal) {
          console.log("hello");
          console.log(deal.deal.valid);
          this.data['wallets'][0].push(angular.copy(deal.deal));
          angular.forEach(this.data['deals'], function(value, key){
              if (value.deal_id === deal.deal.deal_id){
                  value.valid = 0;

                  console.log(value);
              }
          });
          console.log(deal.deal.valid);
          this.data['wallets'][0].push(angular.copy(deal.deal));
          // deal.valid =0;
          this.updateUser();

      };
      
      //go to new component
      this.goToDeal = function(deal){
          $state.go('deal', {
              deal_id: deal.deal.deal_id,
          });
      };
    }
};

angular
    .module('components.explore')
    .component('explore', explore)
    .config(function($stateProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $stateProvider
            .state('explore', {
                parent: 'app',
                url: '/explore',
                component: 'explore'
            });
});
