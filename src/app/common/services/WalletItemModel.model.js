class WalletItemModel {
  constructor(Parse,DealModel,UserModel) {
    this.Parse = Parse;
    this.DealModel = DealModel;
    this.UserModel = UserModel;
    this.data = {};
    this.collection = [];
    this.name = 'WalletItem';
    this.fields = [
      'user',
      'deal'
    ];
  }
  New(obj) {
      if (angular.isUndefined(obj)) {
          const parseObject = new this.Parse.Object(this.name);
          this.Parse.defineAttributes(parseObject, this.fields);
          parseObject.deal = new this.Parse.Object(this.DealModel.name);
          this.Parse.defineAttributes(parseObject.deal, this.DealModel.fields);
          parseObject.user = new this.Parse.Object(this.UserModel.name)
          this.Parse.defineAttributes(parseObject.user, this.UserModel.fields);
          return parseObject;
      } else {
          this.Parse.defineAttributes(obj, this.fields);
          this.Parse.defineAttributes(obj.deal, this.DealModel.fields);
          return obj;
      }
  }

  getById(id) {
      return new this.Parse.Query(this.New())
          .get(id)
          .then(result => {
              console.log('result', result);
              this.Parse.defineAttributes(result, this.fields);
              this.data = result;
              return Promise.resolve(result);
          })
          .catch(error => Promise.reject(error));
  }

  getAllWalletItems(User) {
    return new this.Parse.Query(this.New())
      .equalTo('user',User)
      .find( results => {
        results.forEach(result =>
          {
            this.Parse.defineAttributes(result,this.fields);
            this.Parse.defineAttributes(result.deal, this.DealModel.fields);
            this.Parse.defineAttributes(result.user, this.UserModel.fields);
          }
          // this.Parse.defineAttributes(result,this.fields);
        );
        this.data = results;
        return Promise.resolve(results);
      })
      .catch(error => Promise.reject(error));
  }

  // TODO IMPLEMENT FUNCTIONS
  addWalletItem(deal, user){
    console.log('adding', deal,' to ', user , ' wallet');
    const walletItem = this.New();
    walletItem.user = user;
    walletItem.deal = deal;
    console.log(walletItem);
    return walletItem.save();

  }

  removeWalletItem(item){
    return item.destroy();
  }

}

angular
    .module('common')
    .service('WalletItemModel', WalletItemModel);
