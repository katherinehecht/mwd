angular
.module('components.auth',[
  'ui.router',
  'ngParse'
])
.run(function ($transitions, $state, AuthService) {

  $transitions.onStart({
    to: function(state){
      console.log("checking if auth needed");
      return !!(state.data && state.data.requiredAuth);
    }
  }, function () {
    console.log("about to make switch state");
    return AuthService
      .requireAuthentication()
      .catch(function () {
        return $state.target('auth.login');
      });
    // return true;
  });

  $transitions.onStart({
    to: 'auth.*'
  }, function () {
    if(AuthService.isAuthenticated()){
      return $state.target('app');
    }
  });

} );
