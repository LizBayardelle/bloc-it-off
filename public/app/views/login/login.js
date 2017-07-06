(function() {
     function LoginCtrl($auth, $state, ngToast) {
        var $ctrl = this;

        $ctrl.handleLoginBtnClick = handleLoginBtnClick;

        function handleLoginBtnClick() {
          $auth.submitLogin($ctrl.loginForm)
            .then(function(resp) {
              $state.go('dashboard');
            })
            .catch(function(resp) {
              // handle error response
            });
        }
     }

     angular
         .module('myApp')
         .controller('LoginCtrl', LoginCtrl);
 })();
