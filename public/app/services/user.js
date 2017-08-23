function User() {
    var _user = null;

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
