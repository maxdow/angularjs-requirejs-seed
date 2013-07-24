define(
    ["angular",
    "Services/services",
    "Directives/directives",
    "Filters/filters",
    "Controllers/controllers"
    ],

    function BaseManager(angular,Services,Directives,Filters){
        var initialize = function () {

        var app = angular.module("myApp", [], function($routeProvider, $locationProvider) {

            $routeProvider.when('/', {
                templateUrl: '/templates/Main.html',
                controller: MainCtrl
            });

            $routeProvider.otherwise( { redirectTo: '/'} );

            $locationProvider.html5Mode(true);
        });

        Filters.initialize(app);

        app.factory(Services);
        app.directive(Directives);

        angular.bootstrap(document,["myApp"]);

        };
    return {
        initialize : initialize
    };
});