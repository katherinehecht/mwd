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
    .config(function ($stateProvider) {
      $stateProvider
        .state('app', {
          redirectTo: 'home',
          url: '/app',
          component: 'app',
          resolve: {
            data: function (AppService) {
                return AppService.getData();
            }
          }
        })
    });