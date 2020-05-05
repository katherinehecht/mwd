class AuthService {
  constructor(Parse){
    this.Parse = Parse;
  }

  signUp(username, password, email){
    var user = new this.Parse.User();
    user.set("username", username);
    user.set("password", password);
    user.set("email", email);
    // var ret = {};
    user.signUp().then(function success (user) {
      console.log("Signed up:", user);
      return
    }, function error(err) {
      console.log("Error signing up", err);
      return
    })
  }

  logIn(username, password){
    return this.Parse.User.logIn(username, password).then(function success (user) {
      console.log("Logged in: ", user);
    }), function error(err){
      console.log("Error logging in: ", err);
      return
    }
  }
  logOut(){
    this.Parse.User.logOut().then( function(user){
      console.log("logged out");
    });
  };

}


angular
  .module("components.auth")
  .service("AuthService", AuthService);
