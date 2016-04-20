app.config(function($stateProvider, $urlRouterProvider) {

   $stateProvider
      .state('app', {
         abstract: true,
         templateUrl: 'views/dashboard/default.html'
      })

   $urlRouterProvider.otherwise("/");

});
