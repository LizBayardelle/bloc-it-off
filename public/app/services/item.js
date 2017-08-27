function Item($http, user) {
    var service = {};
    service.get = get;
    service.update = update;
    service.destroy = destroy;
    service.create = create;

    function get(id) {
      var userId = user.id;
      return $http.get('api/lists/' + id ).then(function(resp) {
        return resp.data.data;
      });
    }

    function update(itemId, content, done) {
      var data = {
        done: done,
        content: content
      };

      return $http.put('api/items/' + itemId, data).then(function(resp) {
        return resp.data;
      });
    }

    function create(content, listId) {
      var data = {
        content: content,
        list_id: listId
      };

      return $http.post('api/lists/' + listId + '/items', data).then(function(resp) {
        return resp.data.data;
      });
    }

    function destroy(id) {
      return $http.delete('api/items/' + id).then(function(resp) {
        return resp.data;
      });
    }

    return service;
}
angular
  .module('myApp')
  .factory('Item', Item);
