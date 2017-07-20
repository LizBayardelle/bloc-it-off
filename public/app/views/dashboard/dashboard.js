(function() {
     function DashboardCtrl($auth, $state, ngToast, $rootScope, user) {
        var $ctrl = this;

        $ctrl.handleSignOutBtnClick = handleSignOutBtnClick;

        getUser();

        function getUser() {
          console.log(user)
          $ctrl.currentUser = user;
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
