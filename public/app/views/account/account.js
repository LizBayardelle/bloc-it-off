(function() {
     function AccountCtrl($auth, $state, ngToast, $scope, user) {
        var $ctrl = this;

        $ctrl.updateAccount = updateAccount;
        $ctrl.updateAccountForm = user;
        $ctrl.changePasswordForm = {};

        function updateAccount(form) {

          $auth.updateAccount(form)
            .then(function(resp) {
              // handle success response
              $scope.$on('auth:account-update-success', function(ev) {
                ngToast.create("Your account has been successfully updated!");
              });
            })
            .catch(function(resp) {
              // handle error response
              // needs lodash
              // var errors = _.map(resp.errors, function(error) {
              //   return _.reduce(error, function(final, errorText) {
              //     final += errorText;
              //     return final;
              //   }, '');
              // })

              ngToast.create("Registration failed: " + resp.statusText);
              $scope.$on('auth:account-update-error', function(ev, reason) {
                ngToast.create("Registration failed: " + reason.errors[0]);
              });
            });
        }
     }

     angular
         .module('myApp')
         .controller('AccountCtrl', AccountCtrl);
 })();
