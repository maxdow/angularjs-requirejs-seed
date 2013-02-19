define(
	["angular",
    "Services/services",
    "Directives/directives",
    "Controllers/Controllers"
	],

	function BaseManager(angular,Services,Directives){
		var initialize = function () {

		var app = angular.module("myApp", [], function($routeProvider, $locationProvider) {

			$routeProvider.when('/', {
			templateUrl: '/templates/Accueil.html',
			controller: AccueilCtrl
			});

		$routeProvider.otherwise( { redirectTo: '/'} );

		$locationProvider.html5Mode(true);
		});

        app.factory(Services);
        app.directive(Directives);
        
		angular.bootstrap(document,["myApp"]);

		};
	return {
		initialize : initialize
	};
});