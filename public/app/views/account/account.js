(function() {
     function AccountCtrl($auth, $state, ngToast) {
        var $ctrl = this;

        $ctrl.handleUpdateAccountBtnClick = handleUpdateAccountBtnClick;

        function handleUpdateAccountBtnClick() {
          $auth.updateAccount($scope.updateAccountForm)
            .then(function(resp) {
              // handle success response
              $scope.$on('auth:account-update-success', function(ev) {
                alert("Your account has been successfully updated!");
              });
            })
            .catch(function(resp) {
              // handle error response
              $scope.$on('auth:account-update-error', function(ev, reason) {
                alert("Registration failed: " + reason.errors[0]);
              });
            });
        }
     }

     angular
         .module('myApp')
         .controller('AccountCtrl', AccountCtrl);
 })();
