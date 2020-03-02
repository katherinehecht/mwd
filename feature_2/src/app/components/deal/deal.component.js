var deal = {
    templateUrl:'./deal.html',
	controller: function ($state) {
		this.renderDeal = function () {
			$state.go('deal', {
				deal_id: this.id
			});
		};
	}
};

angular
	.module('components.deal')
	.component('deal', deal)
	.config(function ($stateProvider) {
		$stateProvider
			.state('deal', {
				url: '/deal/:deal_id',
                parent: 'app',
				component: 'deal',
				params: {
					deal_id: null
				}
			});
	});