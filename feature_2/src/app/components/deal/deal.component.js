var deal = {
    templateUrl:'./deal.html',
    bindings: {
        list:'<',
        data:'<',
        onUpdate: '&'        
    },
	controller: function ($state) {
        this.$onChanges = function (changes) {
			if (changes.data) {
				this.data = angular.copy(this.data);

			}           
		};
        this.updateUser = function () {
			this.onUpdate({
				$event: {
                    data: this.data
				}
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
                parent: 'app',
                url: '/deal/:deal_id',
				component: 'deal',
				params: {
					deal_id: null
				},
                resolve: {   
                    list: function($transition$){
                        return $transition$.params().deal_id;
                    }
                }
			});
	});