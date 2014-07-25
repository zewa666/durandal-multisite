define(function(require) {
  var ko = require('knockout');

  var vm_login_frontend = function() {
    this.login = ko.observable();
    this.pwd = ko.observable();

    this.loginDomain = ko.observable();

    var loginService = require('businesslogic/loginService');
    this.loginDomain("Login to " + loginService.getDomain());
  };

  vm_login_frontend.prototype.performLogin = function() {

    loginService.performLogin();
  };

  return vm_login_frontend;
});
