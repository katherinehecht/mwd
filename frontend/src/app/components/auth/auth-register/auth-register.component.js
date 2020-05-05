const authRegister = {
    templateUrl: './auth-register.html',
    controller: function($state, AuthService){
      const ctrl = this;
      ctrl.$onInit = function () {
        ctrl.error = null;
        // initialize form data
        ctrl.user = {
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: ""
        };
      };

      ctrl.createUser = function(event){
        return AuthService.signUp(event.user.username, event.user.password,  event.user.email)
          .then( function(user) {
            //success
            console.log('USER', user);
            $state.go('app');
          }, function (reason) {
            //failure
            ctrl.error = reason.message;
          });
      };
    }
};
angular
  .module("components.auth")
  .component("authRegister", authRegister)
  .config(function($stateProvider){
    $stateProvider.state("auth.register", {
      url: "/register",
      component: "authRegister"
    });
  });
