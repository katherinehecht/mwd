var deal = {
    templateUrl:'./deal.html',
    bindings: {
        list:'<',
        data:'<',
        onUpdate: '&'
    },
	controller: function ($state) {
        var ctrl = this;

        this.$onInit = function () {
          console.log(ctrl.list);

        };

        //responde to data changes
        this.$onChanges = function (changes) {
    			if (changes.data) {
    				this.data = angular.copy(this.data);

    			}
        };

        //update parent of changes to data
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
	.config(function ($stateProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
		$stateProvider
			.state('deal', {
                parent: 'app',
                url: '/deal/:deal_id',
				component: 'deal',
				params: {
					deal_id: null
                },

                // we can use resolve here because we know that the request is local
                // and will take < 200 ms
                resolve: {
                    list: function($transition$){
                        return $transition$.params().deal_id;
                    }
                }
			});
	});
