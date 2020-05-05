function AppService($http) {
    var ctrl = this;
    ctrl.deals = [];
	   this.getData = function () {
		return $http
			.get('./data.json')
			.then(function (res) {
                console.log(res);
                return res.data;
			})
            .catch(function(data){
                console.log(data);
            });;
	};
}

angular
	.module('common')
	.service('AppService', AppService);
