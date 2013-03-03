=======
Angularjs + RequireJs + Express Seed 
======================

## Directory Layout

    src/                --> all of the files to be used in production
      public/             --> AngularJs application
          css/              --> css files
            bootstrap.css     --> bootstrap stylesheet
            style.css         --> application stylesheet
          img/              --> image files
          index.html        --> app layout file (the main html template file of the app)
          js/               --> javascript files
            Controllers     --> application controllers
            Directives      --> application directives
            filters         --> custom angular filters
            Services        --> custom angular services
            app.js          --> application
          lib/              --> angular and 3rd party javascript libraries
            angular/
              angular.js        --> the latest angular js
              angular.min.js    --> the latest minified angular js
              angular-*.js      --> angular add-on modules
              version.txt       --> version number
            require.js          --> require.js library
          template/             --> angular view partials (partial html templates)
            Main.html

    config/testacular.conf.js        --> config file for running unit tests with Testacular

    scripts/            --> handy shell/js/ruby scripts
      test.bat          --> autotests unit tests with Testacular (windows)
      test.sh           --> autotests unit tests with Testacular (*nix)

    test/               --> test source files and libraries
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
      unit/                     --> unit level specs/tests
        controllers.test.js      --> specs for controllers
        directives.test.js      --> specs for directives
        filters.test.js          --> specs for filters
        services.test.js         --> specs for services