function ExploreService($http) {
	this.getData = function () {
		return $http
			.get('../../../data.json')
			.then(function (res) {
				return res.data;
			})// catch errors
            .catch(function(data){
                console.log(data);
            });;
	};
}

angular
	.module('components.explore')
	.service('ExploreService', ExploreService);