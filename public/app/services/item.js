function Item($http, user) {
    var service = {};
    service.get = get;
    service.update = update;
    service.destroy = destroy;

    function get(id) {
      var userId = user.id;
      // This needs some serious help
      return $http.get('api/lists/'+id ).then(function(resp) {
        return resp.data.data;
      });
    }

    function update(id, itemData) {
      // data = {name : 'foobar'}
      // yeah, this needs help too.  How do angular urls get generated?
      return $http.put('api/lists/' + id, {data: listData}).then(function(resp) {
        return resp.data;
      });
    }

    function destroy(id) {
      // This needs to match above...I think...
      return $http.delete('api/lists/' + listId + '/item/' + id).then(function(resp) {
        return resp.data;
      });
    }

    return service;
}
angular
  .module('myApp')
  .factory('Item', Item);
