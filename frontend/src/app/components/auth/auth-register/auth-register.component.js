const authRegister = {
    templateUrl: "./auth-register.html",
    controller: ($state, AuthService) =>{
      const ctrl = this;

      ctrl.$onInit = () => {
        ctrl.error = null;
        // initialize form data
        ctrl.user = {
          firstName: "",
          lastName: "",
          email: "",
          password: ""
        }
      }
      ctrl.createUser = function(event){
        console.log("event: ", event);

      }
    }
};
angular
  .module("components.auth")
  .component("authRegister", authRegister)
  .config(($stateProvider) => {
    $stateProvider.state("auth.register", {
      url: "/register",
      component: "authRegister"
    });
  });
