define(function(require) {
  var ko = require('knockout');

  var vm_login_frontend = function() {
    this.login = ko.observable();
    this.pwd = ko.observable();
  };

  vm_login_frontend.prototype.performLogin = function() {
    var loginService = require('businesslogic/loginService');
    loginService.performLogin();
  };

  return vm_login_frontend;
});
