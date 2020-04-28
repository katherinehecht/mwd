var app = {
    templateUrl: './app.html'
    ,
    controller: function (UserModel) {
      var ctrl = this;

      this.$onInit = function () {

        // TODO, add authentication
        UserModel.login('dom_test', 'dominic').then(function(results) {
          ctrl.data = {'curr_user': results};
          console.log('initial get of user', ctrl.data);
          console.log(ctrl.data['curr_user'].username);
        });

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
          component: 'app'
        })
    });
