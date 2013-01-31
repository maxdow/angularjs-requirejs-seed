define(
	["angular",
	"Controllers/controllers"],

	function BaseManager(angular){
		var initialize = function () {

		var app = angular.module("myApp", [], function($routeProvider, $locationProvider) {
		  $routeProvider.when('/', {
		    templateUrl: '/templates/Accueil.html',
		    controller: AccueilCtrl
		  });
		  $routeProvider.when('/bases', {
		    templateUrl: '/templates/Accueil.html',
		    controller: BasesCtrl
		  });		  
		  // When you put /home, it also automatically handles /home/ as well


		//  $routeProvider.otherwise( { redirectTo: '/login'} );

		  $locationProvider.html5Mode(true);
		});	

		angular.bootstrap(document,["myApp"]);


		};
	return {
		initialize : initialize
	};
});