(function() {
     function DashboardCtrl($auth, $state, ngToast, $rootScope, User) {
        var $ctrl = this;

        $ctrl.handleSignOutBtnClick = handleSignOutBtnClick;

        getUser();

        function getUser() {
          $ctrl.currentUser = User;
        }

        function handleSignOutBtnClick() {
          $auth.signOut()
            .then(function(resp) {
              $rootScope.$on('auth:logout-success', function(ev) {
                  ngToast.create("You have been successfully signed out!");
              });
              $state.go('login');
            })
            .catch(function(resp) {
              $rootScope.$on('auth:logout-error', function(ev, reason) {
                  alert('logout failed because ' + reason.errors[0]);
              });
            });
        }
     }

     angular
         .module('myApp')
         .controller('DashboardCtrl', DashboardCtrl);
 })();
