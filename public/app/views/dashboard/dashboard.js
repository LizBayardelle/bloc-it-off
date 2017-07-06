(function() {
     function DashboardCtrl($auth, $state, ngToast) {
        var $ctrl = this;

        $ctrl.handleSignOutBtnClick = handleSignOutBtnClick;

        function handleSignOutBtnClick() {
          $auth.signOut()
            .then(function(resp) {
              console.log("Helloooos?");
              ngToast.create("Behold!  I made toast!");
              console.log("Post Tost");
              // root scope probably isn't right
              $rootScope.$on('auth:logout-success', function(ev) {
                  alert('goodbye');
              });
              $state.go('login');
            })
            .catch(function(resp) {
              // root scope probably isn't right
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
