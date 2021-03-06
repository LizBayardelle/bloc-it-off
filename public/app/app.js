(function() {
     function config($locationProvider, $stateProvider, $urlRouterProvider, $authProvider, userProvider) {
        //  $locationProvider
        //      .html5Mode({
        //          enabled: true,
        //          requireBase: false
        //       });
        $authProvider
          .configure({
      			apiUrl: 'http://localhost:3000/api',
            handleLoginResponse: function(response) {
              userProvider.$set(response.data);
              console.log(userProvider.$get());
            },
            handleAccountUpdateResponse: function(response) {
              userProvider.$set(response.data);
              console.log(userProvider.$get());
            },
            handleTokenValidationResponse: function(response) {
              userProvider.$set(response.data);
              console.log(userProvider.$get());
            }
      		});

         $stateProvider
             .state('dashboard', {
               url: '/dashboard',
               controller: 'DashboardCtrl as $ctrl',
               templateUrl: 'app/views/dashboard/dashboard.html',
               resolve: {
                  auth: function($auth) {
                    return $auth.validateUser();
                  }
                }
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
             .state('lists', {
                 url: '/lists',
                 controller: 'ListsCtrl as $ctrl',
                 templateUrl: 'app/views/lists/lists.html'
             })
             .state('listView', {
                 url: '/lists/:id',
                 controller: 'ListCtrl as $ctrl',
                 templateUrl: 'app/views/list/list.html'
             });



        $urlRouterProvider.otherwise('/');
     }

     function run($transitions) {
      //  $transitions.onError({ to: '**' }, function(trans) {
      //    trans.router.stateService.go('login');
      //  });
     }

     angular
         .module('myApp', ['ui.router', 'ng-token-auth', 'ngToast'])
         .config(config)
         .run(run);
 })();
