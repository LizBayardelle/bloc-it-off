(function() {
     function config($locationProvider, $stateProvider, $urlRouterProvider, $authProvider) {
        //  $locationProvider
        //      .html5Mode({
        //          enabled: true,
        //          requireBase: false
        //       });
        $authProvider
          .configure({
      			apiUrl: 'http://localhost:3000/api'
      		});

         $stateProvider
             .state('dashboard', {
               url: '/dashboard',
               controller: 'DashboardCtrl as $ctrl',
               templateUrl: 'app/views/dashboard/dashboard.html'
             })
             .state('registration', {
                 url: '/',
                 controller: 'RegistrationCtrl as $ctrl',
                 templateUrl: 'app/views/registration/registration.html'
             })
             .state('login', {
                 url: '/login',
                 controller: 'LoginCtrl as $ctrl',
                 templateUrl: 'app/views/login/login.html'
             })
             .state('account', {
                 url: '/account',
                 controller: 'AccountCtrl as $ctrl',
                 templateUrl: 'app/views/account/account.html'
             })
             .state('items', {
                 url: '/items',
                 controller: 'ItemsCtrl as $ctrl',
                 templateUrl: 'app/views/items/items.html'
             })
             .state('lists', {
                 url: '/lists',
                 controller: 'ListsCtrl as $ctrl',
                 templateUrl: 'app/views/lists/lists.html'
             });

        $urlRouterProvider.otherwise('/');
     }

     angular
         .module('myApp', ['ui.router', 'ng-token-auth', 'ngToast'])
         .config(config);
 })();
