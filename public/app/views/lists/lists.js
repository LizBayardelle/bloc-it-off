(function() {
     function ListsCtrl($auth, $state, ngToast, List) {
        var $ctrl = this;

        $ctrl.createList = createList

        onInit();

        function onInit() {
            List.get().then(function(data) {
              $ctrl.lists = data;
              console.log(data);
            });
        }

        function createList() {
            List.create($ctrl.listName).then(function(data) {
              onInit();
            });
        }

     }

     angular
         .module('myApp')
         .controller('ListsCtrl', ListsCtrl);
 })();
