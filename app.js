var myApp=angular.module('fundoo', ['ui.router','ngMaterial', 'ui.bootstrap'])
 .config(function ($stateProvider, $urlRouterProvider) {

	 $stateProvider
	 .state("create",{
		url:"/create",
		templateUrl:"templates/add.html",
		controller:"homeController"
	 });
     $urlRouterProvider.otherwise('/create');
 })
