define(
    ["angular",
    "Services/services",
    "Directives/directives",
    "Filters/filters",
    "Controllers/Controllers"
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
        console.log(Filters);
        app.factory(Services);
        app.directive(Directives);

        app.filter(('interpolate'),["version",function(version){
            return function(text) {
              return String(text).replace(/\%VERSION\%/mg, version);
            };
        }]);

        
        angular.bootstrap(document,["myApp"]);

        };
    return {
        initialize : initialize
    };
});