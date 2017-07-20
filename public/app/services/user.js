function User() {
    var _user = null;

    // this.getUserFromServer = function(user) {
    //     //  User.get(userId).$promise.then(user) { _user = user; };
    // }

    // this.isAuthenticated = function () {
    //     return user !== null;
    // }
    //
    // this.logoff = function ()  {
    //     user = null;
    // }

    return {
      $get: function () {
        return _user;
      },

      $set: function (user) {
        _user = user;
      }
    }
}
angular
  .module('myApp')
  .provider('user', User);
