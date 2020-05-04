const authLogin = {
    templateUrl: "./auth-login.html",
    controller: ($state, AuthService) =>{
      const ctrl = this;
      ctrl.$onInit = () => {
        ctrl.error = null;
        ctrl.user = {
          email: "",
          password: ""
        };
      }
      ctrl.createUser = function(event){
        console.log("event: ", event);

      }
    }
};
angular
  .module("components.auth")
  .component("authLogin", authLogin)
  .config(($stateProvider) => {
    $stateProvider
    .state("auth", {
      redirectTo: "auth.login",
      url: "/auth",
      template: "<div ui-view></div>"
    })
    .state("auth.login", {
      url: "/login",
      component: "authLogin"
    });
    $urlRouterProvider.otherwise("/auth/login");
  });
