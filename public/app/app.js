(function() {
     function config($locationProvider, $stateProvider, $urlRouterProvider) {
        //  $locationProvider
        //      .html5Mode({
        //          enabled: true,
        //          requireBase: false
        //       });

         $stateProvider
             .state('home', {
                 url: '/',
                //  controller: 'HomeCtrl as home',
                 templateUrl: 'app/templates/home.html'
             });

        $urlRouterProvider.otherwise('/');
     }

     angular
         .module('myApp', ['ui.router'])
         .config(config);
 })();
