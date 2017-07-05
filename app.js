var myApp = angular.module('fundooApp', ['ui.router','ngMaterial','ngAria', 'ngAnimate'])
.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider.state("profile",{
    url:"/profile",
    templateUrl:"template/profile.html",
    controller:"profileCtrl",
  });
  $urlRouterProvider.otherwise('/profile');

});
