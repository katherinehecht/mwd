class UserModel {
  constructor(Parse) {
    this.Parse = Parse;
    this.data = {};
    this.collection = [];
    this.name = '_User';
    this.fields = [
      'username',
      'password',
      'email'
    ];
  }

  New(obj) {
      if (angular.isUndefined(obj)) {
          // console.log(this.name);
          const parseObject = new this.Parse.Object(this.name);
          this.Parse.defineAttributes(parseObject, this.fields);
          // console.log(parseObject);
          return parseObject;
      } else {
          this.Parse.defineAttributes(obj, this.fields);
          return obj;
      }
  }

  login(username, password) {
    return this.Parse.User.logIn(username, password);
  }

  getById(id) {
    var person = this.New();
    return new this.Parse.Query(this.New())
        .get(id)
        .then(result => {
            this.Parse.defineAttributes(result, this.fields);
            this.data = result;
            return Promise.resolve(result);
        })
        .catch(error => Promise.reject(error));
  }

  getAllUsers() {
    // console.log('function called');
    return new this.Parse.Query(this.New())
      .find()
      .then(result => {
        // console.log("before anything :", result);
        this.Parse.defineAttributes(result, this.fields);
        this.data = result;
        // console.log("getAllDeals here:", result);
        // console.log(result);
        return Promise.resolve(result)
      })
      .catch(error => {
        console.log('query fail');
        return Promise.reject(error)
      });
  }
}

angular
  .module('common')
  .service('UserModel', UserModel);
