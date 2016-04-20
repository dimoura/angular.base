// Routes
app.config(function($stateProvider, $urlRouterProvider) {

   $stateProvider
      .state('app', {
         abstract: true,
         templateUrl: '/app/shared/template.html'
      })

      .state('app.dashboard', {
         url: "/",
         templateUrl: "/app/components/dashboard/view.html",
         controller: "homepage"
      })

   $urlRouterProvider.otherwise("/");

});
