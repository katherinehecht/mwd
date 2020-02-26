function ExploreService($http) {
    var ctrl = this;
    ctrl.deals = [];
	this.getData = function () {
		return $http
			.get('./data.json')
			.then(function (res) {
                return res.data;
                ctrl.deals = res;
			})
            .catch(function(data){
                console.log(data);
            });;
	};
}

angular
	.module('components.explore')
	.service('ExploreService', ExploreService);