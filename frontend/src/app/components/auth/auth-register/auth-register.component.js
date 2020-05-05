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
        AuthService.signUp(ctrl.user.username, ctrl.user.password,  ctrl.user.email);
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
