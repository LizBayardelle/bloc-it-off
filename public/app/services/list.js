function List($http, user) {
    var service = {};
    service.get = get;
    service.getOne = getOne;
    service.update = update;
    service.create = create;

    function get() {
      var userId = user.id;
      return $http.get('api/lists?user_id=' + userId).then(function(resp) {
        return resp.data.data;
      });
    }

    function getOne(id) {
      var userId = user.id;
      return $http.get('api/lists/' + id).then(function(resp) {
        return resp.data.data;
      });
    }

    function create(name) {
      var userId = user.id;
      return $http.post('api/lists/', {name: name, user_id: userId}).then(function(resp) {
        return resp.data.data;
      });
    }

    function update(id, listData) {
      // data = {name : 'foobar'}
      return $http.put('api/lists/' + id, {data: listData}).then(function(resp) {
        return resp.data.data;
      });
    }

    return service;
}
angular
  .module('myApp')
  .factory('List', List);
