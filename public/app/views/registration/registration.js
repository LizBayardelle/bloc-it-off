(function() {
     function RegistrationCtrl($auth, $state, ngToast) {
        var $ctrl = this;

        $ctrl.registrationForm = {};
        $ctrl.handleRegBtnClick = handleRegBtnClick;

        function handleRegBtnClick() {
          $auth.submitRegistration($ctrl.registrationForm)
            .then(function(resp) {
              $state.go('dashboard');
              ngToast.create("You are now registered. Congrats!");
            })
            .catch(function(resp) {
              // handle error response
            });
        }
     }

     angular
         .module('myApp')
         .controller('RegistrationCtrl', RegistrationCtrl);
 })();
