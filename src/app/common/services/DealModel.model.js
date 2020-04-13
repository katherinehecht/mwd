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
      'location',
      'occurAt'
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

  getById(id) {
    return new this.Parse.Query(this.New())
        .get(id)
        .then(result => {
            // console.log('result', result);
            this.Parse.defineAttributes(result, this.fields);
            this.data = result;
            return Promise.resolve(result);
        })
        .catch(error => Promise.reject(error));
  }

  getAllDeals() {
    return new this.Parse.Query(this.New())
      .find()
      .then(result => {
        // console.log("before anything :", result);
        this.Parse.defineAttributes(result, this.fields);
        this.data = result;
        // console.log("getAllDeals here:", result);
        return Promise.resolve(result)
      })
      .catch(error => Promise.reject(error));
  }

  addToWallet(deal) {
    const newItem = new this.Parse.Object(this.name);
  }

}


angular
  .module('common')
  .service('DealModel',DealModel);
