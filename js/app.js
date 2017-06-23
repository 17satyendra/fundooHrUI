var myApp=angular.module('fundoo', ['ui.router','ngMaterial'])
 .config(function ($stateProvider, $urlRouterProvider) {

	 $stateProvider
	 .state("create",{
		url:"/create",
		templateUrl:"templates/add.html",
		controller:"homeController",
		controllerAs:"hc"
	 });
     $urlRouterProvider.otherwise('/create');
 })
