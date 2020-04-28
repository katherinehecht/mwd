function init (ParseProvider) {
    ParseProvider.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
    ParseProvider.initialize(
      'daY7UKXBscge3FaVwlx2Yx8We0OqzXztdYLNpGsD', // This is your Application ID
      'R2nA2oU87qIXTGWrfMGzFKWh6HqP1Y4Fp9Aci586' // This is your Javascript key
    );
}
angular
    .module('common')
    .config(init);
