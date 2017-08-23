(function() {
     function ListCtrl($auth, $stateParams, ngToast, List) {
        var $ctrl = this;

        onInit();

        function onInit() {
          console.log('yo')
          var listId = $stateParams.id;
            List.getOne(listId).then(function(data) {
              $ctrl.list = data;
              console.log(data);
            });
        }
     }

     angular
         .module('myApp')
         .controller('ListCtrl', ListCtrl);
 })();
