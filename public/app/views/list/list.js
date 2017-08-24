(function() {
     function ListCtrl($auth, $stateParams, ngToast, List, Item) {
        var $ctrl = this;

        $ctrl.createItem = createItem;

        onInit();

        function onInit() {
          fetchList();
        }

        function fetchList() {
          var listId = $stateParams.id;
          List.getOne(listId).then(function(data) {
            $ctrl.list = data;
          });
        }

        function createItem() {
          var listId = $stateParams.id;
            Item.create($ctrl.itemName, listId).then(function(data) {
              fetchList();
            });
        }
     }

     angular
         .module('myApp')
         .controller('ListCtrl', ListCtrl);
 })();
