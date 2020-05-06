var navbar = {
    templateUrl: './navbar.html',
    bindings : {
      user: '<',
      onLogout: '&'
    },
    controller: function($state, AuthService){
      var ctrl = this;
      ctrl.title = "Log out"
      ctrl.$onInit = function() {
        if(!(AuthService.isAuthenticated())){
          ctrl.title = "Log in"
        }
        else{
          ctrl.title = "Log out"
        }
      }
    }
};

angular
    .module('common')
    .component('navbar', navbar);
