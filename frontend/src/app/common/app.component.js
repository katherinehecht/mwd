var app = {
    templateUrl: './app.html'
    ,
    controller: function (UserModel) {
      var ctrl = this;
      ctrl.user = AuthService.getUser();
      ctrl.logout = function () {
        // call logout service
      }

      this.$onInit = function () {

      };

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
          url: '',
          component: 'auth',
          data: {
            requiredAuth: true
          }
        })
    });
