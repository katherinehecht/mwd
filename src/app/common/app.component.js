var app = {
    templateUrl: './app.html',
    bindings: {
      data: '<'
    },
    controller: function () {
      this.updateData = function (event) {
        this.data = event.data;
      };
	}
  };
  
  angular
    .module('common')
    .component('app', app)
    .config(function ($stateProvider,$locationProvider) {
      $locationProvider.hashPrefix('');
      $stateProvider
        .state('app', {
          redirectTo: 'home',
          url: '/app',
          component: 'app',

          // use resolve because we are reading a local json file
          // this request will complete in < 200ms
          resolve: {
            data: function (AppService) {
                return AppService.getData();
            }
          }
        })
    });