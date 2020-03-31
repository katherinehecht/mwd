class DealModel {
  constructor(Parse){
    this.Parse = Parse;
    this.data = {};
    this.collection = [];
    this.name = 'Deal';
    this.fields = [
      'name',
      'description',
      'img',
      'location'
      'occurAt'
    ];
  }
  New(obj) {
      if (angular.isUndefined(obj)) {
          const parseObject = new this.Parse.Object(this.name)
          this.Parse.defineAttributes(parseObject, this.fields);
          return parseObject;
      } else {
          this.Parse.defineAttributes(obj, this.fields);
          return obj;
      }
  }
  getbyId(id) {
    return new this.Parse.Query(this.New())
        .get(id)
        .then(result => {
            console.log('result', result)
            this.Parse.defineAttributes(result, this.fields);
            this.data = result;
            return Promise.resolve(result);
        })
        .catch(error => Promise.reject(error));
  }
  getAllDeals() {
    return new this.Parse.Query()
      .find()
      .then(resut => {
        this.Parse.defineAttributes(result, this.fields);
        this.data = result;
        console.log("getAllDeals", result)
        return Promise.resolve(result)
      })
      .catch(error => Promise.reject(error));
  }
}


angular
  .module('common')
  .service('DealModel',DealModel)
