const authLogin = {
    templateUrl: "./auth-login.html",
    controller: function($state, AuthService) {
      const ctrl = this;
      ctrl.$onInit = function () {
        ctrl.error = null;
        ctrl.user = {
          username: "",
          password: ""
        };
      };
      ctrl.loginUser = function(event){
        return AuthService.logIn(ctrl.user.username, ctrl.user.password);
      };
    }
};
angular
  .module("components.auth")
  .component("authLogin", authLogin)
  .config(function($stateProvider, $urlRouterProvider) {
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
