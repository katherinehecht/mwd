function AuthService(Parse) {
  var parse = Parse;
  var authData = null;

  function storeAuthData(response){
    // this.authData = response;
    authData=response;
    console.log('set authData');
    return response;
  }

  function clearAuthData(){
    authData =null;
  }

  this.signUp = function(username, password, email){
    var user = new parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    // var ret = {};
    return user.signUp().then(function success (user) {
      console.log("Signed up:", user);
      return storeAuthData(user);
    }, function error(err) {
      console.log("Errors signing up", err);
      return null;
    })
  }

  this.logIn= function (username, password){
    return parse.User.logIn(username, password).then(function success (user) {
      console.log("Loggeddd in: ", user);
      return storeAuthData(user);
    }, function error(err){
      console.log("Error logging in: ", err);
      return null;
    });
  }

  this.logOut = function(){
    return parse.User.logOut().then(clearAuthData);
  };

  this.requireAuthentication = function() {
    // THIS IS THE FUNCTION I DONT KNOW WHAT TO DO IN
    return new Promise ( function (resolve, reject) {
      if (!!authData) {
        resolve("success")
      } else {
        reject("nothing")
      }
    });
  }

  function resolve(nothing){
    console.log("done");
    return true;
  }

  function reject(nothing) {
    console.log("not done");
    return false;
  }

  this.isAuthenticated = function(){
    return !!authData;
  }

  this.getUser = function () {
    if (authData){
      return authData;
    }
  }


}


angular
  .module("components.auth")
  .service("AuthService", AuthService);
