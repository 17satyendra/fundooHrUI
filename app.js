var myApp = angular.module('fundooApp', ['ui.router'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state("profile",{
    url:"/profile",
    templateUrl:"template/profile.html",

  });
  $urlRouterProvider.otherwise('/profile');

});
