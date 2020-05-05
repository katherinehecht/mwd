var navbar = {
    templateUrl: './navbar.html',
    bindings : {
      user: '<',
      onLogout: '&'
    }
};

angular
    .module('common')
    .component('navbar', navbar);
