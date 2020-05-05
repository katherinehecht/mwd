var app = {
    templateUrl: './app.html'
    ,
    controller: function ($state, AuthService) {
      var ctrl = this;
      ctrl.data={};
      ctrl.user = AuthService.getUser();
      ctrl.logout = function () {
        // call logout service
        AuthService.logOut().then(function() {
          $state.go('auth.login');
        })
      }

      this.$onInit = function () {
        console.log('APP USER', ctrl.user);
        ctrl.data = {'curr_user': ctrl.user};
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
          component: 'app',
          data: {
            requiredAuth: true
          }
        })
    });
