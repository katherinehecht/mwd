class UserModel {
  constructor(Parse) {
    this.Parse = Parse;
    this.data = {};
    this.collection = [];
    this.name = 'User';
    this.fields = [];
  }
}

angular
  .module('common')
  .service('UserModel', UserModel);
