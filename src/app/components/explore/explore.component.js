var explore = {
    templateUrl: './explore.html',
    bindings: {
        data: '<',
        onUpdate: '&'
    },
    controller: function($state, DealModel, PagerService) {
      var ctrl = this;
      ctrl.curr_page = 1;
      ctrl.page_size= 3;
      ctrl.pager = {};
      ctrl.setPage = setPage;

      this.$onInit = function () {

        // DealModel.getAllDeals(ctrl.page_size ,ctrl.curr_page).then(function(results) {
        //   ctrl.deals = results;
        //   console.log('deals from explore', ctrl.deals);
        // })
        // get total number of deals
        DealModel.getNumDeals(ctrl.pageSize ,ctrl.curr_page).then(function(results) {
          ctrl.num_deals = results;
          console.log('numdeals', ctrl.num_deals);
          ctrl.setPage(1);
        })



      };

      this.refreshPage = function () {

        DealModel.getAllDeals(ctrl.pager.pageSize ,ctrl.pager.currentPage).then(function(results) {
          ctrl.deals = results;
          console.log('deals refreshed to page', ctrl.pager.currentPage, ctrl.deals);
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

      // set Page of Results
      function setPage(page) {
    		if (page < 1 || page > ctrl.pager.totalPages) {
    			return;
    		}

    		// get pager object from service that returns page and such
    		ctrl.pager = PagerService.GetPager(ctrl.num_deals, page, ctrl.page_size);
        console.log(ctrl.pager);
    		// get current page of items
    		// ctrl.items = ctrl.dummyItems.slice(ctrl.pager.startIndex, ctrl.pager.endIndex + 1);
        this.refreshPage();
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
