var app = {
    templateUrl: './app.html'
  };
  
  angular
    .module('common')
    .component('app', app)
    .config(function ($stateProvider) {
      $stateProvider
        .state('app', {
          redirectTo: 'home',
          url: '/app',
          component: 'app'
        })
    });