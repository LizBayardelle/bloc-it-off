function User() {
    var _user = null;

    this.getUserFromServer = function(user) {
        //  User.get(userId).$promise.then(user) { _user = user; };
    }

    this.isAuthenticated = function () {
        return user !== null;
    }

    this.logoff = function ()  {
        user = null;
    }

    this.$get = function () {
      return _user;
    }

    this.$set = function (user) {
      _user = user;
    }
}
angular
  .module('myApp')
  .provider('User', User);
