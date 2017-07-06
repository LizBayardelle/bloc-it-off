(function() {
     function RegistrationCtrl($auth, $state, ngToast) {
        var $ctrl = this;

        $ctrl.handleRegBtnClick = handleRegBtnClick;

        function handleRegBtnClick() {
          $auth.submitRegistration($ctrl.registrationForm)
            .then(function(resp) {
              $state.go('dashboard');
              console.log("Toast should be coming...");
              ngToast.create("Behold!  I made toast!");
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
