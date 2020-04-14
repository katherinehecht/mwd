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
          console.log('deals from explore', ctrl.deals);
          console.log('single deal from explore init', ctrl.deals[1].attributes);
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

      //go to new component
      this.goToDeal = function(deal){
        console.log('intermediate deal', deal, deal.deal.id);
          $state.go('deal', {
              deal_id: deal.deal.id,
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
