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
      console.log("signed up:", user);
    }, function error(err) {
      console.log("error signing up", err);
      return
    });

  }

  logIn(username, password){
    this.Parse.User.logIn(username, password).then( function(user){
      console.log(this.Parse.User.current());
    });

  }

  logOut(){
    this.Parse.User.logOut().then( function(user){
      console.log("logged out");
    });
  }

}


angular
  .module("components.auth")
  .service("AuthService",AuthService);
